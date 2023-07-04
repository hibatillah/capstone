const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectedId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/product").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("product")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      res.json({
        message: "Data produk berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/product/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectedId(req.params.id) };
  db_connect
    .collection("product")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      res.json({
        message: "Data produk berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/product/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
    name: req.body.name,
    desc: req.body.desc,
    qty: req.body.qty,
    price: req.body.price,
  };
  db_connect
    .collection("product")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      res.json({
        message: "Data produk berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/product/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectedId(req.params.id) };
  let newValues = {
    $set: {
        name: req.body.name,
        desc: req.body.desc,
        qty: req.body.qty,
        price: req.body.price,
    },
  };
  db_connect
    .collection("product")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("Data produk berhasil diupdate");
      res.json(result);
    })
    .then(() => {
      console.log("Data produk berhasil diupdate");
      res.json({
        message: "Data produk berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/product/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectedId(req.params.id) };
  db_connect
    .collection("product")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("Data produk berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("Data produk berhasil dihapus");
      res.json({
        message: "Data produk berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;