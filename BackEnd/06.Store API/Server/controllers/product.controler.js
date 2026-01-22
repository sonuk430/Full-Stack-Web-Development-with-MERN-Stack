const Product = require("../models/product.model");

const getAllProductsStatic = async (req, res) => {
  try {
    // const products = await Product.find({});
    const products = await Product.find({}).select("name price");
    res.status(200).json({ totalProducts: products.length, products });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const { featured, company, name, sort } = req.query;
    const queryObject = {};

    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }

    if (company) {
      queryObject.company = company;
    }

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
    let result = Product.find(queryObject);
    if (sort) {
      console.log(sort);
      const sortList = sort.split(",").join(" ");
      result = result.sort(sortList);
      // products = products.sort();
    } else {
      result = result.sort("createdAt");
    }

    const products = await result;
    res.status(200).json({ totalProducts: products.length, products });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
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
