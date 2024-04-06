const express = require('express');
require('./model/db');    // for conn establish 
const studentController = require('./controller/studentController');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");


app.use("/student", studentController)
app.listen(8081, ()=>{
    console.log("Server at 8081");
});