// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const query = "INSERT INTO students SET ? ";
      db.query(query, data, (err, results) => {
        if (err) reject(err);
        resolve(results.insertId);
      });
    });

    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students WHERE id = ?";
      db.query(query, id, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // mencari id, bisa digunakan untuk method show, update dan destroy
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        // menggunakan destructing array
        const [student] = results;
        resolve(student);
      });
    });
  }

  // mengupdate data students
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // mencari data yang baru di update
    const student = await this.find(id);
    return student;
  }

  // menghapus data dari database
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class Student
module.exports = Student;