// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// buat koneksi createConnection
// const db = mysql.createConnection({
// host, user, password, database
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// menggunakan metode destructing object
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
// update configuration database dari file .env
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// connect ke database
db.connect((err) => {
  if (err) {
    console.log(`Koneksi gagal ${err}`);
    return;
  }

  console.log("Koneksi berhasil!");
  return;
});

// export database
module.exports = db;