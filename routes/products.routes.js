const express = require("express");
const ProductModel = require('../models/product.model')
const router = express.Router();
const {addProductform, addProductToDB, getAllProducts}= require('../controllers/product.controller')

router.get("/addproduct", addProductform);

router.post("/addproduct", addProductToDB);

router.get("/allproducts", getAllProducts);

module.exports= router;
