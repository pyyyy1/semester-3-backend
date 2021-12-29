// Mengimport database \\
const db = require("../config/database");

// Membuat class model student \\
class Student {
  // Method untuk query semua data \\
  static all(callback) {
    new Promise((resolve, reject) => {
      // Membuat query di dalam variabel sql \\
      const sql = "SELECT * FROM students";

      // Memasukkan query ke database \\
      db.query(sql, (err, results) => {
        callback(results);
      });
    });
  }
}

// exports class student
module.exports = Student;