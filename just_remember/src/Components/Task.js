import React from 'react'

function Task({id, title, description, startDate, endDate, deleteTask}) {
  return (
    <div className='flex flex-col items-center w-[45%] h-[150px] my-4 text-gray-1000 border-2 border-gray-900'>
        <div className='h-[60%] w-[100%]'>
          <input type="checkbox" className='w-[40px] h-[40px] m-4'></input>
        </div>
        <div className='flex justify-center h-[40%] w-[100%] font-semibold'>
          <button className='w-[30%] h-[35px] border-2 border-gray-900 m-2 bg-red-400' onClick={() => deleteTask(id)}>DELETE</button>
          <button className='w-[30%] h-[35px] border-2 border-gray-900 m-2 bg-gray-600'>EDIT</button>
        </div>
    </div>
  )
}

export default Task