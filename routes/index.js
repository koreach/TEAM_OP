var data = require('../index.json');
exports.view = function(req, res){
  data['showAlternate'] = true;
  res.render('index', data);
};

var feed = require("../index.json");

exports.view = function(req, res){
  feed['showAlternate'] = true;
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
  				endingLoc: req.query.endingLoc,
  				theme: req.query.theme
  			};
        feed['showAlternate'] = true;

    res.render('index', feed);
    feed.feed_object.unshift(a);
};


//CODE FOR A/B TESTING
var data = require('../index.json');
exports.viewA = function(req, res){
  data['showAlternate'] = false;
  res.render('index', data);
};

var feed = require("../index.json");

exports.viewA = function(req, res){
  feed['showAlternate'] = false;
  if (req.session.user) {
      res.render('index',feed);
  } else {
      res.redirect("/login")
  }
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
    feed['showAlternate'] = false;
    res.render('index', feed);
    feed.feed_object.unshift(a);
};

exports.viewB = function(req, res){
  data['showAlternate'] = true;
  res.render('index', data);
};

exports.viewB = function(req, res){
feed['showAlternate'] = true;
  if (req.session.user) {
      res.render('index',feed);
  } else {
      res.redirect("/login")
  }
};

exports.addToFeedB = function(req, res) {
	var a = { feedPicture: req.query.feedPicture,
          month: req.query.month,
          date: req.query.date,
  				description: req.query.description,
  				startingLoc: req.query.startingLoc,
  				endingLoc: req.query.endingLoc,
  				theme: req.query.theme
  			};
    feed['showAlternate'] = true;
    res.render('index', feed);
    feed.feed_object.unshift(a);
};
