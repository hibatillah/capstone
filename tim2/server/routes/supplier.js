const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectedId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({
    extended: true
}));

// menampilkan data
recordRoutes.route("/supplier").get(function (req, res) {
    let db_connect = dbo.getDb("capstone");
    db_connect
        .collection("supplier")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        })
        .then((data) => {
            res.json({
                message: "Data supplier berhasil ditampilkan",
                data: data,
            });
        });
});

// menampilkan data by id
recordRoutes.route("/supplier/:id").get(function (req, res) {
    let db_connect = dbo.getDb("capstone");
    let myquery = {
        _id: new ObjectedId(req.params.id)
    };
    db_connect
        .collection("supplier")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        })
        .then((data) => {
            res.json({
                message: "Data supplier berhasil ditampilkan",
                data: data,
            });
        });
});

// menambahkan data
recordRoutes.route("/supplier/add").post(function (req, res) {
    let db_connect = dbo.getDb("capstone");
    let myObj = {
        name: req.body.name,
        alamat: req.body.alamat,
        email: req.body.email,
        nohp: req.body.nohp,
        stokbahan: req.stokbahan,
    };
    db_connect
        .collection("supplier")
        .insertOne(myObj, function (err, result) {
            if (err) throw err;
            res.json(result);
        })
        .then(() => {
            res.json({
                message: "Data supplier berhasil ditambahkan",
                data: myObj,
            });
        });
});

// mengupdate data
recordRoutes.route("/supplier/update/:id").put(function (req, res) {
    let db_connect = dbo.getDb("capstone");
    let myquery = {
        _id: new ObjectedId(req.params.id)
    };
    let newValues = {
        $set: {
            name: req.body.name,
            alamat: req.body.alamat,
            email: req.body.email,
            nohp: req.body.nohp,
            jstokbahan: req.jstokbahan,
        },
    };
    db_connect
        .collection("supplier")
        .updateOne(myquery, newValues, function (err, result) {
            if (err) throw err;
            console.log("Data supplier berhasil diupdate");
            res.json(result);
        })
        .then(() => {
            console.log("Data supplier berhasil diupdate");
            res.json({
                message: "Data supplier berhasil diupdate",
                data: newValues,
            });
        });
});

// menghapus data
recordRoutes.route("/supplier/delete/:id").delete(function (req, res) {
    let db_connect = dbo.getDb("capstone");
    let myquery = {
        _id: new ObjectedId(req.params.id)
    };
    db_connect
        .collection("supplier")
        .deleteOne(myquery, function (err, result) {
            if (err) throw err;
            console.log("Data supplier berhasil dihapus");
            res.json(result);
        })
        .then((data) => {
            console.log("Data supplier berhasil dihapus");
            res.json({
                message: "Data supplier berhasil dihapus",
                data: data,
            });
        });
});

module.exports = recordRoutes;