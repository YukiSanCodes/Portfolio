<?php 
namespace App\Controllers; 
 
class Home extends BaseController 
{ 
    public function index(): string 
    { 
        $data = [ 
            'title' => 'Julian — IT Portfolio',
            'page' => 'home' 
        ]; 
         
        return view('home', $data); 
    } 
 
} 
