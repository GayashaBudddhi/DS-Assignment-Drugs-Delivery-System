<?php


namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class ProductController extends Controller
{
   
    public function index(){
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $product = new Product([
          'pro_name'=> $request->get('pro_name'),
          'pro_code'=> $request->get('pro_code'),
         'cat_id'=> $request->get('cat_id'),
         'pro_info'=> $request->get('pro_info'),
         'pro_price'=> $request->get('pro_price')
        ]);
        $product->save();
        
            return response()->json('Product Added Successfully.');
      
    }
    
    //search

    public function frontend(){
        return product::all();
    }

    public function backend(Request $request){
        //filter for search
        $query = Product::query();

        if($s = $request -> input('s')){
            //where we can use our own condition
            $query -> whereRaw("pro_name LIKE '%" . $s . "%'")
                    -> orWhereRaw("pro_info LIKE '%" . $s . "%'");
        }
        //displaying no. of items per page
        $perPage = 5;
        $page = $request -> input ('page', 1);
        $total = $query -> count();

        $result = $query -> offset(($page -1) * $perPage) -> Limit($perPage) -> get();
     
      
        return [
            'hits' => $result,
            'total' => $total,
            'page' => $page,
            'last_page' => ceil($total / $perPage)
        ];
    }



    public function show($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->pro_name = $request->get('pro_name');
        $product->pro_code = $request->get('pro_code');
        $product->cat_id = $request->get('cat_id');
        $product->pro_info = $request->get('pro_info');
        $product->pro_price = $request->get('pro_price');
        $product->save();

        return response()->json([
            'ty' => $request->get('pro_name'),
            'message' => 'update succesfully',
            'product' => $product,
        ]);
    }

    public function destroy($id)
    {
      $product = Product::find($id);
      $product->delete();


      return response()->json('Product Deleted Successfully.');
    }

    //for adding cart
}