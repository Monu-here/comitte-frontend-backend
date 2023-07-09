<?php

namespace App\Http\Controllers;

use App\Models\personModel;
use Illuminate\Http\Request;

class personController extends Controller
{
    public function list() {
        return response()->json(personModel::all());
    }
    public function add(Request $request) {
        $personModel = new PersonModel();
        $personModel ->c_name= $request->c_name;
        $personModel->name = $request->name;
        $personModel->address = $request->address;
        $personModel->age = $request->age;
        $personModel->number = $request->number;
        $personModel->dob = $request->dob;
        $personModel->citzenship = $request->citzenship;
        $personModel->save();
    }
    public function delete(Request $request) {
        $id = $request->id;
        $personModel = personModel::where('id', $id)->first();
        $personModel->delete();
    }
}
