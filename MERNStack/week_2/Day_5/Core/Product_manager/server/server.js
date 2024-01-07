const express = require("express");
const cors = require("cors");
const app =express();
require("dotenv").config()
const port =process.env.PORT
//middleware
app.use(express.json(),cors(),express.urlencoded({extended:true}))

//config
require("./config/mongoose.config")


//routes
require("./routes/products.routes")(app)



app.listen(port, ()=>{console.log("listening to port "+port);})
