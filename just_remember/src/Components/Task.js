import React from 'react'

function Task({id}) {
  return (
    <div className='w-[80%] h-[70px] rounded-md bg-blue-200 border-2 my-2'>{id}
        <button className='w-[100px] bg-red-200'>Delete</button>
    </div>
  )
}

export default Task