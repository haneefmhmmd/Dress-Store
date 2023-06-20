module.exports = (app) => {
  const categories = require("../controllers/category.controller.js");

  var router = require("express").Router();

  // Create a new Category

  router.post("/", categories.create);

  // Retrieve all Category

  router.get("/", categories.findAll);

  // Retrieve all published Category

  router.get("/published", categories.findAllPublished);

  // Retrieve a single Category with id

  router.get("/:id", categories.findOne);

  // Update a Category with id

  router.put("/:id", categories.update);

  // Delete a Category with id

  router.delete("/:id", categories.delete);

  // Delete all Category

  router.delete("/", categories.deleteAll);

  app.use("/api/categories", router);
};
