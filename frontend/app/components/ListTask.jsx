"use client"
// Solucion para la carga de tareas cuando se agg una nueva a la db, se agg este codigo a la pagina
// contenedor, y luego se le indica al componente form
// export const dynamic= "force-dynamic"

// peticiones por parte del servidor, este tipo de peticion es super rapida y se almacena
// en el cache pero a la hora de que se agg una new task no se va a recopilar el nuevo fetch en la db,
// tenemos que hacer otra cosa.
async function loadTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`);
  const tasks = await res.json();
  return tasks;
}
import React from "react";

async function ListTask() {
  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <div className="bg-slate-700 p-4 w-full">
      <h1>Lista de tareas:</h1>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-slate-500 px-4 py-3 mb-2 rounded-md flex justify-between"
        >
          <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>

          <div className="flex justify-between gap-x-2">
            <button className="bg-red-600 text-white rounded-md py-1 px-2">
              Eliminar
            </button>
            <button className="bg-indigo-700 text-white rounded-md py-1 px-2">
              Actualizar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTask;
