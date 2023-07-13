const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/supplier").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  db_connect
    .collection("supplier")
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
recordRoutes.route("/supplier/:id").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("supplier")
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
recordRoutes.route("/supplier/add").post(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myObj = {
    nama_supplier: req.body.nama_supplier,
    Tanggal_pemesanan: req.body.Tanggal_pemesanan,
    Bahan_baku: req.body.Bahan_baku,
    status: req.body.status,
  };
  db_connect
    .collection("supplier")
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
recordRoutes.route("/supplier/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
        nama_supplier: req.body.nama_supplier,
        Tanggal_pemesanan: req.body.Tanggal_pemesanan,
        Bahan_baku: req.body.Bahan_baku,
        status: req.body.status,
    },
  };
  db_connect
    .collection("supplier")
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
recordRoutes.route("/supplier/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("supplier")
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