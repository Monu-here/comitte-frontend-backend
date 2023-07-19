<?php

namespace App\Http\Controllers;

use App\Models\comitteModel;
use App\Models\personModel;
use Illuminate\Http\Request;

class comitteController extends Controller
{
    public function list() {
        return response()->json(comitteModel::all());
    }
    public function add(Request $request) {
        $comitteModel = new comitteModel();
        $comitteModel->c_name = $request->c_name;
        $comitteModel->country = $request->country;
        $comitteModel->state = $request->state;
        $comitteModel->district = $request->district;
        $comitteModel->city = $request->city;
        $comitteModel->des = $request->des;
        $comitteModel->save();

    }
    public function edit(Request $request) {
        $comitteModel = comitteModel::where('id', $request->id)->first();
        $comitteModel->c_name = $request->c_name;
        $comitteModel->country = $request->country;
        $comitteModel->state = $request->state;
        $comitteModel->district = $request->district;
        $comitteModel->city = $request->city;
        $comitteModel->des = $request->des;
        $comitteModel->save();
    }
    public function update(Request $request){
        $comitteModel = comitteModel::where('id', $request->id)->first();
        return response()->json($comitteModel);
    }

    public function delete(Request $request) {
        $id =$request->id;
        $comitteModel=ComitteModel::where('id',$id)->first();
        $comitteModel->delete();

    }
}
