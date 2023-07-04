//import files
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectedId = require("mongodb").ObjectId;
recordRoutes.use(express.urlencoded({ extended: true }));

//Menampilkan Data
recordRoutes.route("/supplier").get(function(req, res) {
    let db_connect = dbo.getDb("mietenagamuda");
    db_connect
        .collection("supplier")
        .find({})
        .toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
        }).then((data) => {
            res.json({
                message: "Data Berhasil Ditampilkan",
                data : data
            });
        });
});

//Menampilkan Data Berdasarkan ID
recordRoutes.route("/user/supplier/:id").get(function(req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectedId(req.params.id) };
    db_connect.collection("supplier").findOne(myquery, function(err, result) {
        if (err) throw err;
        res.json(result);
    }).then((data) => {
        res.json({
            message: "Data Berhasil Ditampilkan",
            data : data
        });
    });
});        


//Menambahkan Data
recordRoutes.route("/user/supplier/add").post(function(req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        suppliername: req.body.suppliername,
        supplieraddress: req.body.supplieraddress,
        supplierphone: req.body.supplierphone,
    };
    db_connect.collection("supplier").insertOne(myobj, function(err, res) {
        if (err) throw err;
        response.json(res);
    }).then(() => {
        response.json({
            message: "Data Berhasil Ditambahkan",
            data : myobj
        });
    });
});


//Mengupdate Data
recordRoutes.route("/user/supplier/update/:id").put(function(req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectedId(req.params.id) };
    let newvalues = {
        $set: {
            suppliername: req.body.suppliername,
            supplieraddress: req.body.supplieraddress,
            supplierphone: req.body.supplierphone,

        }
    };
    db_connect
        .collection("supplier")
        .updateOne(myquery, newvalues , function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        }).then(() => {
            console.log("1 document updated");
            response.json({
                message: "Data Berhasil Diupdate",
                data : newvalues
        });
    });
});


//Menghapus Data
recordRoutes.route("user/supplier/delete/:id").delete(function(req, response) { 
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectedId(req.params.id) };
    db_connect.collection("supplier").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    }).then((data) => {
        console.log("1 document deleted");
        response.json({
            message: "Data Berhasil Dihapus",
            data : data
        });
    });
});

module.exports = recordRoutes;