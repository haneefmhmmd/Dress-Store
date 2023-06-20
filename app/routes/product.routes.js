module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Get all Products
  router.get("/", products.findAll);

  // Get Product by id
  router.get("/:id", products.findOne);

  // Add new Product
  router.post("/", products.create);

  // Update a Product by id
  router.put("/:id", products.update);

  // Remove Product by id
  router.delete("/:id", products.delete);

  // Remove all Products
  router.delete("/", products.deleteAll);

  app.use("/api/products", router);
};
