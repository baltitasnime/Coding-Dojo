<<<<<<< HEAD
from flask import Flask, render_template

app = Flask(__name__)
# http://127.0.0.1/circles
@app.route('/<int:x>/<int:y>/<color>/<color_1>')
def index(x,y,color,color_1):
    return render_template("index.html", x=x,y=y,color=color, color_1=color_1)

if __name__=="__main__":
    app.run(debug=True)
=======
from flask import Flask , render_template

app=Flask(__name__)

@app.route ("/")
def show():
    return "hello world"


@app.route("/show")
def show_1():
    return render_template("index.html",row=8,col=8)


# @app.route("/color (int:number)")
# def color():
#    return render_template("index.html")




if __name__ == "__main__":
 app.run(debug=True)



>>>>>>> d017090 (commit)
