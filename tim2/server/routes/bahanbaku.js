const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectedId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/bahanbaku").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("bahanbaku")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      res.json({
        message: "Data bahan baku berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/bahanbaku/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectedId(req.params.id) };
  db_connect
    .collection("bahanbaku")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      res.json({
        message: "Data bahan baku berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/bahanbaku/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
    name: req.body.name,
    desc: req.body.desc,
    qty: req.body.qty,
    satuan: req.body.satuan,
  };
  db_connect
    .collection("bahanbaku")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      res.json({
        message: "Data bahan baku berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/bahanbaku/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectedId(req.params.id) };
  let newValues = {
    $set: {
        name: req.body.name,
        desc: req.body.desc,
        qty: req.body.qty,
        satuan: req.body.satuan,
    },
  };
  db_connect
    .collection("bahanbaku")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("Data bahan baku berhasil diupdate");
      res.json(result);
    })
    .then(() => {
      console.log("Data bahan baku berhasil diupdate");
      res.json({
        message: "Data bahan baku berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/bahanbaku/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectedId(req.params.id) };
  db_connect
    .collection("bahanbaku")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("Data bahan baku berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("Data bahan baku berhasil dihapus");
      res.json({
        message: "Data bahan baku berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;