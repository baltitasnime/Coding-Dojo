const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
console.log(dbName, username, pw);
const uri = `mongodb+srv://${username}:${pw}@ahmedmohsen.ssexibg.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database " + dbName))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
    
module.exports = mongoose ;