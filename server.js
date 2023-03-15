const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "157.245.59.56",
  user: "u6406275",
  password: "6406275",
  database: "u6406275_DIT322",
  port: 3366,
});

var app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    status: "ok",
    message: "Hello World",
  });
});

app.get("/customer", function (req, res) {
  connection.query("SELECT * FROM a1_customer", function (err, results) {
    console.log(results);
    res.json(results);
  });
});

app.get("/wowen_shoes", function (req, res) {
  connection.query("SELECT * FROM a1_women_shoes", function (err, results) {
    console.log(results);
    res.json(results);
  });
});

app.get("/order", function (req, res) {
  connection.query("SELECT * FROM a1_order", function (err, results) {
    console.log(results);
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log("Server is started.");
});
