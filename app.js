//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true
});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

/////////////////////////All Articles///////////////////////////////////

app.route("/articles")


.get(function(req, res){
  Article.find(function(err, name){
    if (articles) {
      const jsonArticles = JSON.stringify(name);
      res.send(jsonArticles);
    } else {
      res.send("No articles currently in wikiDB.");
    }
  });
})

.post(function(req, res){
  const name = Article({
    name: req.body.title,
    likedpost1: req.body.content
  });

  newArticle.save(function(err){
    if (!err){
      res.send("Successfully added a new article.");
    } else {
      res.send(err);
    }
  });
})

.delete(function(req, res){

  Article.deleteMany(function(err){
    if (!err){
      res.send("Successfully deleted all the articles in wikiDB.");
    } else {
      res.send(err);
    }
  });

});


/////////////////////////Individual Articles///////////////////////////////////

app.route("/articles/:articleTitle")

.get(function(req, res){
  const articleTitle = req.params.articleTitle;
  Article.findOne({names: name}, function(err, names){
    if (names){
      const jsonArticle = JSON.stringify(names);
      res.send(jsonArticle);
    } else {
      res.send("No article with that title found.");
    }
  });
})

.patch(function(req, res){
  const name = req.params.name;
  Article.update(
    {names: name},
    {content: req.body.newContent},
    function(err){
      if (!err){
        res.send("Successfully updated selected article.");
      } else {
        res.send(err);
      }
    });
})

.put(function(req, res){

  const articleTitle = req.params.articleTitle;

  Article.update(
    {name: names},
    {content: req.body.newContent},
    {likedpost1: req.body.content},
    {overwrite: true},
    function(err){
      if (!err){
        res.send("Successfully updated the content of the selected article.");
      } else {
        res.send(err);
      }
    });
})


.delete(function(req, res){
  const name = req.params.name;
  LostPet.findOneAndDelete({title: names}, function(err){
    if (!err){
      res.send("Successfully deleted selected article.");
    } else {
      res.send(err);
    }
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
