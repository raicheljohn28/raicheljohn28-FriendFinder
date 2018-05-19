var path = require("path");

var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //Adding new friend
    app.post("/api/friends", function (req, res) {
        //Get the user input
        var userInput = req.body;
        console.log('userInput = ' + JSON.stringify(userInput));

        var userResponse = userInput.score;
        console.log("User Response = " + userResponse);

        //Best friend match
        var matchName = "";
        var matchImage = "";
        var totalDiff = 1000;

        //examining exixting friend list
        for (var i = 0; i < friends.length; i++) {
            console.log("Friends = " + JSON.stringify(friends[i]));

            //Compute difference of each question
            var diff = 0;
            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(friends[i].score[j] - userResponse[j]);

            }
            console.log("Diff = " + diff);

            //If there is lowest difference record the match
            if (diff < totalDiff) {
                console.log('Closest match found = ' + diff);
                console.log('Friend name = ' + friends[i].name);
                console.log('Friend image = ' + friends[i].photo);

                totalDiff = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        //Add new user
        friends.push(userInput);

        res.json({ status: "OK", matchName: matchName, matchImage: matchImage });
    });
};

