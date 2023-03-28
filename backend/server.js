//pour utiliser variable il faut require et function
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const billsRoutes = require("./routes/route");
const cors = require("cors");

// express app
const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

// middleware
app.use(express.json());

// routes
app.use("/api/bills", billsRoutes);
const port = process.env.PORT || 4000;
// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(port, () => {
      console.log("listening for requests on port", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
