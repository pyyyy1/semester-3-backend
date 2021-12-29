// Import database \\
const students = require(".../models/students.js");

// Membuat Class StudentController \\
class StudentController {
  index(req, res) {

  // TODO: 2 Tampilkan data students
  const students = Student.all((result) => {
      const data = {
        message: "Menampilkan semua students",
        data: result,
      };
    res.json(data);
  });
}

// Menambahkan data students \\
  store(req, res) {
    const { nama } = req.body;
    // TODO: 3 Tambahkan data students \\
    dataStudents.push(nama);

    const data = {
      message: `Menambahkan data student: ${nama}`,
      data: dataStudents,
    };

    res.json(data);
  }

// Mengedit data students id \\
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    // TODO: 4 Update data students \\
    dataStudents[id] = nama;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: datastudents,
    };

    res.json(response);
  }

// Menghapus data students id \\
  destroy(req, res) {
    const { id } = req.params;

    // TODO: 5 Hapus data students \\
    dataStudents.splice(1, id);

    const data = {
      message: `Menghapus student id ${id}`,
      data: datastudents,
    };

    res.json(data);
  }
}

// Membuat object StudentController \\
const object = new StudentController();

// Export object StudentController \\
module.exports = object;