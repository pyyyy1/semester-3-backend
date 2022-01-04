<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class PatientController extends Controller
{
    // akan menampilkan function index,
    public function index()
    {
    
    // akan menampilkan seluruh data pada database
    $patients = Patient::all();

    // memberikan informasi jumlah seluruh data pada $patients
    $total = count($patients);
    
    // kondisi jika $total
    if ($total) {
        // jika data pada $total nya ada
        $dataAda = [
            // maka akan menampilkan success true
            'success' => true,
            // memberikan pesan bahwa data is available
            'message' => 'Data is available',
            'total' => $total,
            'data' => $patients
        ];

        // dan mengembalikan response dalam bentuk json pada $dataada, dan mengembalikan status code 200
        return response()->json($dataAda, 200);
    }

    // else, jika data nya kosong
    $dataEmpty = [
        // maka akan menampilkan success false
        'success' => false,
        // memberikan pesan bahwa data is empty
        'message' => 'Data is empty'
    ];
    
    // dan mengembalikan response dalam bentuk json pada $dataempty, dan mengembalikan status code 200
    return response()->json($dataEmpty, 200);
    }

    // akan menampilkan function method store dengan $reuest
    public function store(Request $request)
    {
    // create validation menggunakan $request
    $validation = $request->validate([
        'name' => 'required|unique:patients,name',
        'HP' => 'required|numeric',
        'address' => 'required',
        'status' => 'required',
        'in_date_at' => 'required',
        'out_date_at' => 'nullable'
    ]);

    // dan kemudian menyimpan data tersebut kedalam database
    $patients = Patient::create($validation);

    // serta mengembalikan response dalam bentuk json
    return response()->json([
        // maka akan menampilkan success true
        'success' => true,
        // dan memberikan pesan bahwa data is added successfully
        'message' => 'Data is added successfully',
        'data' => $patients
    ], 201); 
    }

    // akan menampilkan function method show, dimana jika id tersedia dalam database atau tdk akan tetap tersimpan
    public function show($id)
    {
    // mencari id
    $patients = Patient::find($id);

    // membuat kondisi, jika $patients
    if ($patients) {
        // jika data berhasil ditampilkan sesuai id yang ada di db akan menampilkan $success
        $success = [
            // maka akan menampilkan success true
            'success' => true,
            // dan menampilkan pesan successful appears
            'message' => 'id : ' . $id . ' successful appears',
            'data' => $patients
        ];

        // kemudian akan mengembalikan response dalam bentuk json dan kode 200
        return response()->json($success, 200);
    }

    // else, tidak dapat menampilkan data, dikarenakan id tidak sesuai yang ada di db
    $failed = [
        // maka akan menampilkan pesan resource not found
        'message' => 'Resource not found'
    ];

    // serta mengembalikan response dalam bentuk json $failed, kode 404 (not found)
    return response()->json($failed, 404);
    }

    public function update(Request $request, $id)
    {
    // mencari id
    $patients = Patient::find($id);

    // buat kondisi
    if ($patients) {
        // mengupdate data patients
        $patients->update($request->all());

        // response success => status code (200)
        $success = [
            'success' => true,
            'message' => 'id : ' . $id . ' is update successfully',
            'data' => $patients
        ];

        return response()->json($success, 200);
    }

    // else, response failed => status code (404)
    $failed = [
        'success' => false,
        'message' => 'id : ' .  $id . ' not found'
    ];

    return response()->json($failed, 404);
    }

    public function destroy($id)
    {
    // mencari id
    $patients = Patient::find($id);

    // buat kondisi
    if ($patients) {
        // menghapus data patients
        $patients->delete();

        // response success => status code (200)
        $success = [
            'success' => true,
            'message' => 'id : ' . $id . ' is deleted successfully'
        ];

        return response()->json($success, 200);
    }

    // else, response failed => status code (404)
    $failed = [
        'success' => false,
        'message' => 'id : ' .  $id . ' not found'
    ];

    return response()->json($failed, 404);
    }
    // membuat function status dead
    public function dead()
    {
        $patients = Patient::where('status', 'dead')->get();
        $total = count($patients);

        if ($total) {
            $data = [
                'success' => true,
                'message' => 'Get dead resource',
                'total patients' => $total,
                'data patients' => $patients
            ];
            return response()->json($data, 200);
        }

        $data = [
            'success' => false,
            'message' => 'Data is empty'
        ];
        return response()->json($data, 200);
    }

    // membuat function status positive
    public function positive()
    {
        $patients = Patient::where('status', 'positive')->get();
        $total = count($patients);

        if ($total) {
            $data = [
                'success' => true,
                'message' => 'Get positive resource',
                'total patients' => $total,
                'data patients' => $patients
            ];
            return response()->json($data, 200);
        }

        $data = [
            'success' => false,
            'message' => 'Data is empty'
        ];
        return response()->json($data, 200);
    }

    // membuat function status recovered
    public function recovered()
    {
        $patients = Patient::where('status', 'recovered')->get();
        $total = count($patients);

        if ($total) {
            $data = [
                'success' => true,
                'message' => 'Get recovered resource',
                'total patients' => $total,
                'data patients' => $patients
            ];
            return response()->json($data, 200);
        }

        $data = [
            'success' => false,
            'message' => 'Data is empty'
        ];
        return response()->json($data, 200);
    }

    // membuat function search
    public function search($name)
    {
        // mencari dan menampilkan data berdasarkan nama yang di cari
        $patients = Patient::where('name', 'like', '%' . $name . '%')->get();

        // memberikan informasi jumlah seluruh data
        $total = count($patients);

        // buat kondisi
        if ($total) {
            // success, jika ada data yang berdasarkan nama yang di cari
            $success = [
                'success' => true,
                'message' => 'Get searched resource',
                'total' => $total,
                'data' => $patients
            ];

            return response()->json($success, 200);
        }

        // else, jika nama yang di cari tidak ada di db
        $failed = [
            'success' => false,
            'message' => 'Resource not found'
        ];

        return response()->json($failed, 404);
    }
}