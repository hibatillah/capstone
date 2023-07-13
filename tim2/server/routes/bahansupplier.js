const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectedId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({
  extended: true
}));

// menampilkan data
recordRoutes.route("/bahansupplier").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("bahansupplier")
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
recordRoutes.route("/bahansupplier/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = {
    _id: new ObjectedId(req.params.id)
  };
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
recordRoutes.route("/bahansupplier/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
      kodeproduk: req.body.kodeproduk,
      nama: req.body.nama,
      harga: req.body.harga,
      stok: req.body.stok,
      status: req.body.status
  };
  db_connect
    .collection("bahansupplier")
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
recordRoutes.route("/bahansupplier/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = {
    _id: new ObjectedId(req.params.id)
  };
  let newValues = {
    $set: {
        kodeproduk: req.body.kodeproduk,
        nama: req.body.nama,
        hargasatuan: req.body.hargasatuan,
        stok: req.body.stok,
        status: req.body.status
    },
  };
  db_connect
    .collection("bahansupplier")
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
recordRoutes.route("/bahansupplier/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = {
    _id: new ObjectedId(req.params.id)
  };
  db_connect
    .collection("bahansupplier")
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