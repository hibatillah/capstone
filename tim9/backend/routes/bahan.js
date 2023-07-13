const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/bahan").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  db_connect
    .collection("bahan")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('bahan berhasil ditampilkan')
      res.json({
        message: "bahan berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/bahan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("bahan")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('bahan berhasil ditampilkan')
      res.json({
        message: "bahan berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/bahan/add").post(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myObj = {
    name: req.body.name,
    kategori: req.body.kategori,
    harga: req.body.harga,
    bahan: req.body.bahan,
  };
  db_connect
    .collection("bahan")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('bahan berhasil ditambahkan')
      res.json({
        message: "bahan berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/bahan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      kategori: req.body.kategori,
      harga: req.body.harga,
      bahan: req.body.bahan,
    },
  };
  db_connect
    .collection("bahan")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update bahan");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update bahan");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/bahan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("bahan")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("bahan berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("bahan berhasil dihapus");
      res.json({
        message: "bahan berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;