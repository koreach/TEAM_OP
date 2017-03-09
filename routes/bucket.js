var express = require('express');
//var multer = require('multer');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');
var formidable = require('formidable');
var fs = require('fs-extra');
var qt = require('quickthumb');


//configuration
//mongoose.connect("mongodb://teamop:teamop170@olympia.modulusmongo.net:27017/quB6uvyz");
var db = mongoose.createConnection("mongodb://teamop:teamop170@ds113680.mlab.com:13680/useraccount");

var data = require("../bucket.json");
exports.view = function(req, res){
    res.render('bucket', data);
};

var buckets = require('../bucket.json');
var bucketdb = db.collection('bucket');

exports.view = function(req, res){
	if (req.session.user) {
          //bucketdb.find().sort().exec(renderBucket);
            //function renderBucket(err, bucket) {
              res.render('bucket', buckets)
           // }
    } else {
        res.redirect("/login");
    }
};

exports.addToBucket = function(req, res) {
	var buc = { picture: req.query.picture, date: req.query.date,
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

     // bucketdb.save(buc);
        //bucketdata.save(buc);
  	res.render('bucket',bucketdb);
    buckets.bucketlist.unshift(buc);
};
