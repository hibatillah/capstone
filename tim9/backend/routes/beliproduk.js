const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/produk/beli").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  db_connect
    .collection("beliproduk")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('customer berhasil ditampilkan')
      res.json({
        message: "customer berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/produk/beli/:id").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("beliproduk")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('customer berhasil ditampilkan')
      res.json({
        message: "customer berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/produk/beli/add").post(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myObj = {
    produk: req.body.produk,
    customer: req.body.customer,
    tanggal: req.body.tanggal,
    status: req.body.status,
    pembayaran: req.body.pembayaran,
  };
  db_connect
    .collection("beliproduk")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('customer berhasil ditambahkan')
      res.json({
        message: "customer berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/produk/beli/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
        produk: req.body.produk,
        customer: req.body.customer,
        tanggal: req.body.tanggal,
        status: req.body.status,
        pembayaran: req.body.pembayaran,
    },
  };
  db_connect
    .collection("beliproduk")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update customer");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update customer");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/produk/beli/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("beliproduk")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("customer berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("customer berhasil dihapus");
      res.json({
        message: "customer berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;