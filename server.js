var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

var response = {
    "name":"Correa",
    "photo":"",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//apiRoute for Survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/Users/ismaelcorrea/Desktop/week_13/friend_finder/public/survey.html"));
  });

//default Route
app.get("/"),function(req,res){
      res.sendFile(path.join(_dirname,"/Users/ismaelcorrea/Desktop/week_13/friend_finder/public/home.html"));
}

app.get("/api/friends"),function(req,res){
    return res.json(response);
}

app.post("/api/friends"),function(req,res){
    res.json();
}

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

//In Order to complete this assignment one must correctly route the html
//In addition to this one must correctly determine the logic matching person one with person two
//One must also parse the JSON object















