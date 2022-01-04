// import mysql
const mysql = require("mysql");

// import dotenv kemudian menjalankan method config
require("dotenv").config();

// menggunakan metode destructing object
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

// mengupdate configuration database dari file .env
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