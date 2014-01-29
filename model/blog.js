var mongoose = require("mongoose");

//connect to database
//var db = mongoose.connect('mongodb://127.0.0.1:27017/db_comp');

//create schema for blog post
var blogSchema = new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

//compile schema to model
//module.exports = db.model('blog', blogSchema);
module.exports = mongoose.model('blog',blogSchema);