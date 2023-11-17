from flask import Flask,render_template
app = Flask(__name__) 

@app.route('/')
def index():
    return "hello World !"

@app.route('/dojo')
def dojo():
    return "Dojo !"

@app.route('/say/<name>')
def say_name(name):
    if (name.isdigit() == False) :
        return "hi " +  name
    else :
        return "You have to put a string"

@app.route('/repeat/<int:counter>/<word>')
def say_word(word,counter):
    return (word + " ") * counter 


if __name__=="__main__":
    app.run(debug=True) 