//Wb6CZi82Z8t5u9dO
//109.186.90.240/32

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const commentsRoutes = require('./routes/comments');
const scrapsRoutes = require('./routes/‏‏scraps');


const app = express();

// these lines of code are used to change between local and shared mongoDB.
// localhost:27017
//mongoose.connect("mongodb+srv://Fox:"+ process.env.MONGO_ATLAS_PW +"@cluster0-ugkpd.mongodb.net/node-angular?retryWrites=true&w=majority")
mongoose.connect("mongodb://localhost:27017/tester")
.then(()=>{
  console.log('Connected to database');
}).catch(()=>{
  console.log('Connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images",express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept ,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts",postsRoutes);
app.use("/api/user",userRoutes);
app.use("/api/comments",commentsRoutes);
app.use("/api/scraps",scrapsRoutes);

module.exports = app;
