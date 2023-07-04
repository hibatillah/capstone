const express= require("express");
const app =express();
const cors = require("cors");

require("dotenv").config({path: "./config.env"});

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//driver connection
const dbo= require("./db/conn");

app.listen(port, ()=>{
    //perform a database connection when server statistic
    dbo.connectToServer(function (err){
        if(err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});

//get routes


// app.use(require("./routes/record"));
const product = require("./routes/product");
const bahanbaku = require("./routes/bahanbaku");



app.use([product,bahanbaku]);