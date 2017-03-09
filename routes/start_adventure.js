var data = require("../start_adventure.json");
exports.view = function(req, res){
    res.render('start_adventure', data);
};

var adventures = require("../start_adventure.json");

exports.view = function(req, res){
  if (req.session.user) {
      res.render('start_adventure', adventures);
  } else {
      res.redirect("/login");
  }
};

exports.addToAdventure = function(req, res) {
	var adv = { picture: req.query.picture,
          date: req.query.date,
  				description: req.query.description,
  				startingLoc: req.query.startingLoc,
  				endingLoc: req.query.endingLoc,
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
  				theme: req.query.theme
  			};
        console.log(adv);
  	res.render('start_adventure',adventures);
    adventures.adventure.push(adv);
};

exports.delTripDay = function() {
  adventures.splice(index, 1); // then delete by index
};
