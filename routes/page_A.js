//CODE FOR A/B TESTING
var data = require('../index.json');
exports.viewA = function(req, res){
  res.render('page_A', data);
};

var feed = require("../index.json");

exports.viewA = function(req, res){
  //if (req.session.user) {
      res.render('page_A',feed);
  //} else {
  //    res.redirect("/login")
  //}
};

exports.addToFeedA = function(req, res) {
	var a = { feedPicture: req.query.feedPicture,
          month: req.query.month,
          date: req.query.date,
  				description: req.query.description,
  				startingLoc: req.query.startingLoc,
  				endingLoc: req.query.endingLoc,
  				theme: req.query.theme
  			};
    res.render('page_A', feed);
    feed.feed_object.unshift(a);
};
