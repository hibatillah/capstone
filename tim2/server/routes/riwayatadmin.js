const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectedId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({
  extended: true
}));

// menampilkan data
recordRoutes.route("/riwayatadmin").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("riwayatadmin")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      res.json({
        message: "Data riwayat admin berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/riwayatadmin/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = {
    _id: new ObjectedId(req.params.id)
  };
  db_connect
    .collection("riwayatadmin")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      res.json({
        message: "Data riwayat admin berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/riwayatadmin/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
      idinvoices: req.body.idinvoices,
      tanggal: req.body.tanggal,
      namapembeli: req.body.namapembeli,
      nohp: req.body.nohp,
      produk: req.body.produk,
      amount: req.body.amount,
      status: req.body.status
  };
  db_connect
    .collection("riwayatadmin")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      res.json({
        message: "Data riwayat admin berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/riwayatadmin/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = {
    _id: new ObjectedId(req.params.id)
  };
  let newValues = {
    $set: {
        idinvoices: req.body.idinvoices,
        tanggal: req.body.tanggal,
        namapembeli: req.body.namapembeli,
        nohp: req.body.nohp,
        produk: req.body.produk,
        amount: req.body.amount,
        status: req.body.status
    },
  };
  db_connect
    .collection("riwayatadmin")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("Data riwayat admin berhasil diupdate");
      res.json(result);
    })
    .then(() => {
      console.log("Data riwayat admin berhasil diupdate");
      res.json({
        message: "Data riwayat admin berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/riwayatadmin/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = {
    _id: new ObjectedId(req.params.id)
  };
  db_connect
    .collection("riwayatadmin")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("Data riwayat admin berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("Data riwayat admin berhasil dihapus");
      res.json({
        message: "Data riwayat admin berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;