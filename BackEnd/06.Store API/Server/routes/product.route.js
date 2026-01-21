const express = require("express");
const {
  getAllProducts,
  getAllProductsStatic,
  addProducts,
} = require("../controllers/product.controler");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);
router.route("/addProduct").post(addProducts);

module.exports = router;
