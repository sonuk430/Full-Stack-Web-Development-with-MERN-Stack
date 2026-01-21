const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name must be provided"],
    },
    price: {
      type: Number,
      required: [true, "Product price must be provided"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    company: {
      type: String,
      enum: {
        values: ["hero", "maruti", "toyota", "honda"],
        message: "{VALUE} is not supported",
      },
      default: "toyota",
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
