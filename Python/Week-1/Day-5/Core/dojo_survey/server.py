from flask import Flask,render_template,redirect,request,session 
app = Flask(__name__)
app.secret_key='tastass'


@app.route("/")
def index_html():
    return render_template("index.html")

@app.route("/process",methods=['POST'])
def process():
    print('-'*20,request.form,'-'*20)
    session["name"]=request.form['name']
    session["dojo_location"]=request.form['dojo_location']
    session["fav_language"]=request.form['fav_language']
    session["Comments"]=request.form['Comments']
    return redirect('/result')

@app.route('/result')
def display():
    return render_template("result.html")

if __name__=="__main__":   
    app.run(debug=True, port=1420)
