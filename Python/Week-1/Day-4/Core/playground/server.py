from flask import Flask, render_template

app = Flask(__name__)
# http://127.0.0.1/circles
@app.route('/play/<int:number>/<color>')
def index(number, color):
    return render_template("index.html", number=number, color=color)

if __name__=="__main__":
    app.run(debug=True)