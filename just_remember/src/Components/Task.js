import React from 'react'

function Task({id, title, deleteTask}) {
  return (
    <div className='flex justify-around items-center w-[80%] h-[70px] rounded-md bg-blue-200 border-2 my-2'>
        <p>{id} | {title}</p>
        <button className='w-[100px] bg-red-400 rounded-md' onClick={() => deleteTask(id)}>Delete</button>
        <input id="todo-0" type="checkbox" />
    </div>
  )
}

export default Task