const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/beliproduk").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  db_connect
    .collection("beliproduk")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('beliproduk berhasil ditampilkan')
      res.json({
        message: "beliproduk berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/beliproduk/:id").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("beliproduk")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('beliproduk berhasil ditampilkan')
      res.json({
        message: "beliproduk berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/beliproduk/add").post(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myObj = {
    name: req.body.name,
    kategori: req.body.kategori,
    harga: req.body.harga,
    beliproduk: req.body.beliproduk,
  };
  db_connect
    .collection("beliproduk")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('beliproduk berhasil ditambahkan')
      res.json({
        message: "beliproduk berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/beliproduk/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      kategori: req.body.kategori,
      harga: req.body.harga,
      beliproduk: req.body.beliproduk,
    },
  };
  db_connect
    .collection("beliproduk")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update beliproduk");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update beliproduk");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/beliproduk/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("beliproduk")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("beliproduk berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("beliproduk berhasil dihapus");
      res.json({
        message: "beliproduk berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;