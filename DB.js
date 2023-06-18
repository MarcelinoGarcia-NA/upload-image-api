const { default: mongoose } = require("mongoose");


require("dotenv").config();
const user = process.env.USER;
const pass = process.env.PASS;

const connection = async function(){
     await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.wvw2d.mongodb.net/upload-images?retryWrites=true&w=majority`);
     console.log("conectado com a base de dados!")
    }
connection().catch((err)=> console.log(err));

module.exports = connection;