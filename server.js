// const mongoose = require("mongoose");

// const mongoURI =
//   "mongodb+srv://haneefmhmmd:haneefmhmmd@clusterdressstore.nrewfau.mongodb.net/";

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB Atlas");
// });

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const express = require("express");

const cors = require("cors");

const app = express();

const db = require("./app/models");

db.mongoose

  .connect(db.url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Connected to the database!");
  })

  .catch((err) => {
    console.log("Cannot connect to the database!", err);

    process.exit();
  });

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Haneef's application." });
});

require("./app/routes/product.routes")(app);
require("./app/routes/category.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
