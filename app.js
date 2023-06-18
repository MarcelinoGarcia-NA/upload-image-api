const express = require("express");
const app= express();
const cors= require("cors");

require("dotenv").config();
require("./DB");
const port = process.env.PORT || 3000;

const pictureRouter= require("./routes/picture");


app.use(cors());

app.use(express.json());
app.use("/pictures",pictureRouter);

app.listen(port,()=>{
    console.log(`O servidor está rodando na porta ${port}`);
});