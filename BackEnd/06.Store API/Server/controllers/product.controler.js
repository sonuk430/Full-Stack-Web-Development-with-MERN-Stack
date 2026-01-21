const Product = require("../models/product.model");

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "Products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products route" });
};
//! New Product created
const addProducts = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }
    if (!price) {
      return res.status(400).json({ message: "price is required" });
    }

    const newProduct = await Product.create(req.body);

    // send response

    res.status(201).json({
      message: "Product created successfully",
      productList: newProduct,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }

  // res.status(201).json({ msg: "Product crested" });
};

module.exports = { getAllProducts, getAllProductsStatic, addProducts };
