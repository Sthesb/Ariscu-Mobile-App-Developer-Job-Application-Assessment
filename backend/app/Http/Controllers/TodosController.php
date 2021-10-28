<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Todo::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'todo' => 'required'
        ]);

        return Todo::create([
            'user_id' => $request->user_id,
            'todo' => $request->todo
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {


        // 'todos' => Todo::where('user_id', $id)->get()
        // // 'token' => $token

        return Todo::where('user_id', $id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $todo = Todo::find($id);
        $request->validate([
            'user_id' => 'required',
            'todo' => 'required'
        ]);

        $todo->update($request->all());

        return $todo;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Todo::destroy($id);
    }

    /**
     * Search the specified resource from storage by name
     *
     * @param  string  $todo
     * @return \Illuminate\Http\Response
     */
    public function search($todo)
    {
        return Todo::where('todo', 'like', '%' . $todo . '%')->get();
    }
}
