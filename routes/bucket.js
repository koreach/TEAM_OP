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
	if (req.session.user) {console.log("a");
          //bucketdb.find().sort().exec(renderBucket); 
           
            //function renderBucket(err, bucket) {
              res.render('bucket', {'bucketdb': bucket})
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
  				theme: req.query.theme
  			};
        
      
      
      bucketdb.save(buc);
        //bucketdata.save(buc);
  	res.render('bucket',bucketdb); 
    //bucketdb.unshift(buc); 
};
