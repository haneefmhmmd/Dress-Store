const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URI;
db.products = require("./product.model")(mongoose);
db.categories = require("./category.model")(mongoose);
module.exports = db;
