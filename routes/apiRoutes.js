//var db = require("../models");

//module.exports = function (app) {
  // Get all examples
  //app.get("/api/examples", function (req, res) {
    //db.Example.findAll({}).then(function (dbExamples) {
      //res.json(dbExamples);
   // });
 // });

  // Delete an example by id
  //app.delete("/api/examples/:id", function (req, res) {
   // db.Example.destroy({
      //where: {
        //id: req.params.id
      //}
    //}).then(function (dbExample) {
      //res.json(dbExample);
    //});
  //});
//};
var express = require('express');
var sequelize = require('sequelize');
var wines = require('../models/wine.js');
//var routes = require('./config/seeds');


module.exports = function(app){

app.get('/',function(req,res){
  wines.all(function(wine_data){
    console.log(wine_data);
    res.json('wines');
  });
});


app.post('/', function(req,res){
  console.log(req,body);
  db.wine.create({
    title: req, body, title,
    country: req, body, country,
    appelation: req, body, appelation,
    vintage: req, body, vintage,
    cost: req, body, cost,
    website: req, body, website,
    sale: req, body, sale
  })
  .then(function(dbwine){
    res.json(dbwine);
  });
});

app.put('/', function(req,res){
  dbwine.update(req.body,
    {
      where:{
        id: req.body.id
      }  
})
.then(function(dbwine){
  res.json(dbwine);
});
});
};
// PUT route for updating posts

//app.put("/api/posts", function(req, res) {
  //db.Post.update(req.body,
   // {
      //where: {
       //id: req.body.id
     // }
    //})
    //.then(function(dbPost) {
     //res.json(dbPost);
   // });
//});
//};



//This is an example from the Sequelize from Unit 15

 // GET route for getting all of the posts

 //app.get("/api/posts/", function(req, res) {
  //db.Post.findAll({})
    //.then(function(dbPost) {
     // res.json(dbPost);
   // });
//});

 // POST route for saving a new post

 //app.post("/api/posts", function(req, res) {
  //console.log(req.body);
  //db.Post.create({
    //title: req.body.title,
    //body: req.body.body,
    //category: req.body.category
  //})
    //.then(function(dbPost) {
      //res.json(dbPost);
   // });
//);




