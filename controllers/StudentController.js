// TODO: 1 Import data students dari folder models/Student.js
const Student = require("../models/Student");

// Membuat Class StudentController
class StudentController {
  // Menambahkan keyword async
  async index(req, res) {
    // Memanggil method static all dengan async await.
    const students = await Student.all();

    // TODO: 2 Tampilkan data students
    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
  /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
  */
  // Tambahkan data students
  const students = await Student.create(req.body);

  const data = {
      message: "Menambahkan data student",
      data: students,
  };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Mengexport object StudentController
module.exports = object;