'use client'
import { useState } from "react";

useState;

function FormTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(title, description);

    const res= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`,{
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`)

  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-slate-200 p-7 rounded-md">
        <h1 className="text-black font-bold">Añadir Tarea</h1>

        <label htmlFor="title" className="text-xs text-black">
          Title:
        </label>
        <input
          type="text"
          name="title"
          className="bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="descripttion" className="text-xs text-black">
          Description:
        </label>
        <textarea
          name="description"
          className="bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button className="bg-indigo-500 rounded-md w-full text-white block p-1">
          Save
        </button>
      </form>
    </div>
  );
}

export default FormTask;
