const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/land001.html");
});

app.get("/land",function(req, res){
   
    res.sendFile(__dirname + "/land001.html");
});

app.listen(3000, function(){
    console.log("server start on port 3000");
});

