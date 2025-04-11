const router = require("express").Router();
const {
  createProduct,
  getProductData,
  updateProductData,
  deleteProduct,
} = require("./controllers.js");

router.post("/products", createProduct);
router.get("/products", getProductData);
router.put("/products", updateProductData);
router.delete("/products", deleteProduct);

module.exports = router;
