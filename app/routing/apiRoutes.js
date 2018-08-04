module.exports = function(app) {

var path = require("path");
var friends = require("../data/friends.js");

app.get("/api/friends", function(req, res) {
    return res.json(friends);
})  
}