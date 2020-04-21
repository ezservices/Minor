const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");


mongoose.connect('mongodb://localhost:27017/servicesDB', {useNewUrlParser: true, useUnifiedTopology: true});


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.use('/',indexRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  