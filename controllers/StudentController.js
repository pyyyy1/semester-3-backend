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
  /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
  */
  async store(req, res) {

  // menambahkan data students
  const students = await Student.create(req.body);

  const data = {
      message: "Menambahkan data student",
      data: students,
  };

    res.json(data);
  }

  // melakukan perintah show
  async show(req, res) {
    const { id } = req.params;

    // cari student berdasarkan id
    const student = await Student.find(id);

    if (student) {
      const success = {
        message: `Menampilkan detail students`,
        data: student,
      };

      res.status(200).json(success);
    }

    // const fail
    const fail = {
      message: `Student dengan id ${id} not found`,
    };

    res.status(404).json(fail);
  }

  // melakukan perintah update
  async update(req, res) {
    const { id } = req.params;

    // cari id student yang ingin di update
    const student = await Student.find(id);

    if (student) {
      // melakukan update data
      const student = await Student.update(id, req.body);
      const success = {
        message: `Mengedit student id ${id}`,
        data: student,
      };

      res.status(200).json(data);
  }

  // const fail
  const fail = {
    message: `Student dengan id ${id} not found`,
  };

  res.status(404).json(fail);
  }

  // melakukan perintah destroy
  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      // melakukan delete data
      await Student.delete(id);
      const success = {
        message: `Menghapus student id ${id}`,
      };

      res.status(200).json(success);
    }

    // const fail
    const fail = {
      message: `Student dengan id ${id} not found`,
    };

    res.status(404).json(fail);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Mengexport object StudentController
module.exports = object;