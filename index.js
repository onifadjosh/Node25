const express = require("express");
const app = express();
const ProductRoute = require('./routes/products.routes')
const ejs = require("ejs");
let dotenv = require('dotenv')
const mongoose = require("mongoose"); //first thing to do is import mongoose
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/products', ProductRoute)
const ProductModel= require('./models/product.model')
dotenv.config()

//mongoose is an ORM (Object Relational Mapping)

//URI, URL
//URI-Uniform resource identifier
//URL-Uniform resource locator
let URI = process.env.DATABASE_URI;

mongoose
  .connect(URI) // next is connect
  .then(() => {
    console.log("database ti connect oooo");
  })
  .catch((err) => {
    console.log(err, "error connecting to DB");
  });

//schema, constraints- guidelines for users to follow

let nameOfPerson = "Pamilerin Joshua";




const port = 5009; // first thing is your port

app.listen(port, (err) => {
  if (err) {
    console.log("error ti wa o, server cannot run");
  } else {
    console.log("server has started sucessfully");
  }
});
