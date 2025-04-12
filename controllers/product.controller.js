const ProductModel = require("../models/product.model");
const nodemailer = require("nodemailer");
let message;
const addProductform = (req, res) => {
  //the get request that views the form
  res.render("addproduct", { message });
};

const addProductToDB = (req, res) => {
  // the post request that sends information to the server
  // console.log(req.body)

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "onifadjosh@gmail.com",
      pass: process.env.MAILER_PASS,
    },
  });

  let form = new ProductModel(req.body);
  form
    .save() //method to save inside the database
    .then(() => {
      console.log("product submitted succesfully");
      message = "product added successfully";
      var mailOptions = {
        from: "onifadjosh@gmail.com",
        to: [
          "onifadjosh@gmail",
          "johnoluwapelumi1@gmail.com",
          "michael.patrick.org@gmail.com",
        ],
        subject: "Product Saved!🥳",
        html: `<!DOCTYPE html>
      <html lang="en">
      <head>
      <style>
        h1{
            color: blue;
        }
    </style>
    </head>
    <body>
    <h1>this is a mail for practice </h1>
    </body>
      </html>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
        res.send({ status: true, message });
      });
    })
    .catch((err) => {
      console.log(err);
      message = "error adding product";
      // res.redirect("/products/addproduct");
      res.send({ status: false, message });
    });
};

const getAllProducts = (req, res) => {
  ProductModel.find()
    .then((allProducts) => {
      // res.render("allproducts", { products: allProducts });
      res.send({ status: true, allProducts });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: false, message: "error getting products" });
    });
};

module.exports = {
  addProductform,
  addProductToDB,
  getAllProducts,
};
