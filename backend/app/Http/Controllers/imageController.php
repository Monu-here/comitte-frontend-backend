<?php

namespace App\Http\Controllers;

use App\Models\imageModel;
use Illuminate\Http\Request;

class imageController extends Controller
{
    public function image()
    {
        return response()->json(imageModel::all());
    }

    public function imagestore(Request $request)
    {
        $image = new ImageModel();
        $image->image_name = $request->image_name;

        if ($request->hasfile('image')) {
            $image->image = $request->image->store('upload/course');
        }
        $image->description = $request->description;
        $image->save();
    }
    public function imageDelete(Request $request) {
        $id =$request->id;
        $image = ImageModel::where('id',$id)->first();
        $image->delete();
    }
}
