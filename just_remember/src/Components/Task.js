import React from 'react'

function Task({id, title, info, deleteFunction}) {
  return (
    <div className='flex justify-around items-center w-[80%] h-[70px] rounded-md bg-blue-200 border-2 my-2'>{id}
        <p>{title} | {info}</p>
        <button className='w-[100px] bg-red-400 rounded-md' onClick={deleteFunction}>Delete</button>
    </div>
  )
}

export default Task