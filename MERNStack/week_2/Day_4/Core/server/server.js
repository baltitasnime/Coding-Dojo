const express = require("express");
const app = express();
require("dotenv").config();


const port = process.env.port;

app.use(express.json(), express.urlencoded({ extended: true }));



require("../server/config/mongoose.config")
require("../server/routes/jokes.routes")(app)
app.listen(port, () => {
    console.log("🚀🚀 Listenning to port " + port);
});
