// peticiones por parte del servidor
async function loadTasks(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`)
  const tasks = await res.json()
  return tasks
}
import React from 'react'

async function ListTask() {
  const tasks = await loadTasks()
  console.log(tasks)

  
  return (
    <div
    className='bg-slate-700 p-4 w-full'
    >
      <h1>Lista de tareas:</h1>
      {tasks.map(task => (
        <div key={task.id} 
        className='bg-slate-500 px-4 py-3 mb-2 rounded-md'>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    
    </div>
  )
}

export default ListTask