const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/admin").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  db_connect
    .collection("admin")
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
recordRoutes.route("/admin/:id").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("admin")
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
recordRoutes.route("/admin/add").post(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myObj = {
    nama_bahan_baku: req.body.nama_bahan_baku,
    nama_supplier: req.body.nama_supplier,
    Total_pesanan: req.body.Total_pesanan,
  };
  db_connect
    .collection("admin")
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
recordRoutes.route("/admin/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
        nama_bahan_baku: req.body.nama_bahan_baku,
        nama_supplier: req.body.nama_supplier,
        Total_pesanan: req.body.Total_pesanan,
    },
  };
  db_connect
    .collection("admin")
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
recordRoutes.route("/admin/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("admin")
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