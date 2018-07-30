var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/friends", function(req, res) {
    return res.json(friends);
})