const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/pesanbahan").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  db_connect
    .collection("pesanbahan")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('pesanbahan berhasil ditampilkan')
      res.json({
        message: "pesanbahan berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/pesanbahan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pesanbahan")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('pesanbahan berhasil ditampilkan')
      res.json({
        message: "pesanbahan berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/pesanbahan/add").post(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myObj = {
    name: req.body.name,
    kategori: req.body.kategori,
    harga: req.body.harga,
    pesanbahan: req.body.pesanbahan,
  };
  db_connect
    .collection("pesanbahan")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('pesanbahan berhasil ditambahkan')
      res.json({
        message: "pesanbahan berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/pesanbahan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      kategori: req.body.kategori,
      harga: req.body.harga,
      pesanbahan: req.body.pesanbahan,
    },
  };
  db_connect
    .collection("pesanbahan")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update pesanbahan");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update pesanbahan");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/pesanbahan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("menantea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pesanbahan")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("pesanbahan berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("pesanbahan berhasil dihapus");
      res.json({
        message: "pesanbahan berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;