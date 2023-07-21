const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// get driver conection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

// get routes
const product = require("./routes/product");
// const customer = require("./routes/customer");
const belibahan = require("./routes/belibahan");
const beliproduk = require("./routes/beliproduk");
const user = require("./routes/user");
const bahan = require("./routes/produk_bahan_baku");

// use routes
app.use([bahan, user, product, belibahan, beliproduk]);