var path = require("path");

module.exports = function(app) {
    console.log("HTML Routes");

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));

        console.log(path.join(__dirname, "../public/home.html"));
        
    });

    app.get("survey", function(req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });
};







