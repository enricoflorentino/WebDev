var express = require('express')

var app = express();


app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!");
});


app.get("/speak/:shout", function(req, res){
   if (req.params.shout == "pig") {
       res.send("The pig says OINK");
   } 
   else if (req.params.shout == "cow") {
       res.send("The cow says MOO");
   }
   else if (req.params.shout == "dog") {
       res.send("The dog says WOOF");
   }
});


app.get("/repeat/:number", function(req, res){
   var numOfHello = parseInt(req.params.number);
   var string = "";
   for (var i = 0; i < numOfHello; i++){
       string+= "hello ";
   }
   res.send(string);
});

app.get("*", function(req, res) {
    res.send("Sorry, page was not found.");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");      
});