//import files
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectedId = require("mongodb").ObjectId;
recordRoutes.use(express.urlencoded({ extended: true }));

//Menampilkan Data
recordRoutes.route("/user").get(function(req, res) {
    let db_connect = dbo.getDb("mietenagamuda");
    db_connect
        .collection("user")
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
recordRoutes.route("/user/:id").get(function(req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectedId(req.params.id) };
    db_connect.collection("user").findOne(myquery, function(err, result) {
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
recordRoutes.route("/user/add").post(function(req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password,

    };
    db_connect.collection("user").insertOne(myobj, function(err, res) {
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
recordRoutes.route("/user/update/:id").put(function(req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectedId(req.params.id) };
    let newvalues = {
        $set: {
            name: req.body.name,
            role: req.body.role,
            email: req.body.email,
            password: req.body.password,        
        }
    };
    db_connect
        .collection("user")
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
recordRoutes.route("/user/delete/:id").delete(function(req, response) { 
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectedId(req.params.id) };
    db_connect.collection("user").deleteOne(myquery, function(err, obj) {
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