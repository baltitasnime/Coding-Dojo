from flask import Flask , render_template

app=Flask(__name__)

@app.route ("/")
def show():
    return "hello world"


@app.route("/show")
def show_1():
    return render_template("index.html",row=8,col=8)

@app.route("/<int:row>/<int:col>")
def show2(row,col):
    return render_template("index.html",row=row,col=col,color1="red",color2="black")

@app.route("/<int:row>/<int:col>/<color1>/<color2>")
def show3(row,col,color1,color2):
    return render_template("index.html",row=row,col=col,color1=color1,color2=color2)


# @app.route("/color (int:number)")
# def color():
#    return render_template("index.html")




if __name__ == "__main__":
 app.run(debug=True)



