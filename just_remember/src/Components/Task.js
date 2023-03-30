import React from 'react'

function Task({id, title, description, startDate, endDate, deleteTask}) {
  return (
    <div className='flex justify-center w-[90%] h-[90px] my-4 text-white'>
        <div className='flex w-[45%] bg-gray-700 rounded-l-md'>
          <div className='w-[50%]'>
            <label className='m-2 font-semibold'>TITLE</label>
            <p className='text-[30px] m-2'>{title}</p>
          </div>
          <div>
            <label className='m-2 font-semibold'>DESCRIPTION</label>
            <p className='text-[30px] m-2'>{title}</p>
          </div>
        </div>

        <div className='flex flex-col justify-center w-[50px]'>
          <button className='bg-red-600 h-[50%] font-bold' onClick={() => deleteTask(id)}>X</button>
          <button className='bg-gray-600 h-[50%] font-semibold'>E</button>
        </div>

        <div className='flex justify-end w-[45%] bg-gray-700 rounded-r-md'>
          <div className='w-[50%]'>
            <label className='m-2 font-semibold'>START DATE</label>
            <p className='text-[30px] m-2'>{title}</p>
          </div>
          <div>
            <label className='m-2 mr-12 font-semibold'>END DATE</label>
            <p className='text-[30px] m-2'>{title}</p>
          </div>
        </div>
    </div>
  )
}

export default Task