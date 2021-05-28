# Build-Your-Own-RESTful-API

## Example Documents

```
{
    "_id" : ObjectId("5c139771d79ac8eac11e754a"),
    "name" : "ABC",
    "Likedpost1" : "Yes"
    "Likedpost2" : "No"
    "Likedpost3" : "Yes"
}


{
    "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
    "name" : "DEF",
    "Likedpost1" : "Yes"
    "Likedpost2" : "Yes"
    "Likedpost3" : "Yes"
}


{
    "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
    "name" : "ABC",
    "Likedpost1" : "No"
    "Likedpost2" : "No"
    "Likedpost3" : "Yes"
}
```

## Server Starting Code

```
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

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
```

## Re-populate Database

```

{
    "_id" : "5c18e1892998bdb3b3d355bf",
    "name" : "XYZ",
    "Likedpost1" : "Yes"
    "Likedpost2" : "Yes"
    "Likedpost3" : "No"
}

```
