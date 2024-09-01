'use client';

import { useRouter } from "next/navigation";



function TaskCard({ task }) {
    const rauter = useRouter()

    const  handleDelete = async (id) => {
        if (window.confirm('Quieres eliminar la tarea?')){
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/`,{
                method: 'DELETE',
            }
        );
          if (res.status == 204){
            rauter.refresh()
          }  
        }
    }

    return (
        <div
          key={task.id}
          className="bg-slate-500 px-4 py-3 mb-2 rounded-md flex justify-between"
        >
          <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>

          <div className="flex justify-between gap-x-2">
            <button className="bg-red-600 text-white rounded-md py-1 px-2"
            onClick={() => handleDelete(task.id)}
            >
              Eliminar
            </button>
            <button className="bg-indigo-700 text-white rounded-md py-1 px-2">
              Actualizar
            </button>
          </div>
        </div>
    )
}
export default TaskCard;