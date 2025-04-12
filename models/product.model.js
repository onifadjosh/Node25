const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    productname: { type: String, required: true },
    productprice: { type: Number, required: true },
    productquantity: { type: String, required: true },
    productdescription: { type: String, required: true },
    datecreated: { type: String, default: Date.now() },
  });
  
  //after schema, create the model
  const ProductModel = mongoose.model("products", ProductSchema);

  module.exports = ProductModel