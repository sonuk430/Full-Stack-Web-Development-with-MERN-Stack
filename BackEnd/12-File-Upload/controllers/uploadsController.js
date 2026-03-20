const path = require("path");
const Product = require("../models/Product");

const uploadProductImage = async (req, res) => {
  if (!req.files) {
    return res.json({ message: "Please uploaded file" });
  }

  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    return res.json({ message: "Please Upload Image" });
  }

  const maxSize = 1024 * 1024;

  if (productImage > maxSize) {
    return res.json({ message: "Please Upload Image smaller 1KB" });
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`,
  );
  await productImage.mv(imagePath);
  return res
    .status(201)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = { uploadProductImage };
