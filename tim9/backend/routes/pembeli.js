const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/pembeli").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  db_connect
    .collection("pembeli")
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
recordRoutes.route("/pembeli/:no_transaksi").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pembeli")
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
recordRoutes.route("/pembeli/add").post(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myObj = {
    nama: req.body.nama,
    no_hp: req.body.no_hp,
    metode_pembayaran: req.body.metode_pembayaran,
  };
  db_connect
    .collection("pembeli")
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
recordRoutes.route("/pembeli/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      nama: req.body.nama,
      no_hp: req.body.no_hp,
      metode_pembayaran: req.body.metode_pembayaran,
    },
  };
  db_connect
    .collection("pembeli")
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
recordRoutes.route("/pembeli/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pembeli")
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