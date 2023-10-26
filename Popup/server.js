const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const mysql=require("mysql2")


const Options = {                
    host: "localhost",
    user: "root",
    password: "root",
    database: "eco_score"
};


app.set('view engine', 'ejs')


var USERNAME;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}));

const cors = require("cors");
app.use(cors());



const db = mysql.createConnection(Options).promise();


app.post("/product",async function(req,res){
    console.log(req.body)

    var product=req.body.data;
    
    res.send({"name":"aloo"});
    
})



app.listen(3000,function(){
    console.log("Server started on port 3000");
});




