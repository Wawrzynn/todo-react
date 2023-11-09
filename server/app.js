const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todo");

const app = express();
const port = "8080";
dotenv.config();
const mongoURI = process.env.MONGODB_URI;

app.use(bodyParser.json());
app.use(cors());

app.use("/todo", todoRoutes);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB.");
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
