var data = require('../index.json');
exports.view = function(req, res){
  res.render('index', data);
};

var feed = require("../index.json");

exports.view = function(req, res){
if (req.session.user) {
    res.render('index',feed);
} else {
    res.redirect("/login")
}
};

exports.addToFeed = function(req, res) {
	var a = { feedPicture: req.query.feedPicture,
          month: req.query.month,
          date: req.query.date,
  				description: req.query.description,
  				startingLoc: req.query.startingLoc,
          joinedList: req.query.joinedList,
          location1: req.query.location1,
          location2: req.query.location2,
          location3: req.query.location3,
          location4: req.query.location4,
          location5: req.query.location5,
          location6: req.query.location6,
          location7: req.query.location7,
          location8: req.query.location8,
          location9: req.query.location9,
          location10: req.query.location10,
  				endingLoc: req.query.endingLoc,
  				theme: req.query.theme
  			};
    res.render('index', feed);
    feed.feed_object.unshift(a);
};
