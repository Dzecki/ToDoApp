import React from 'react'

function Task(props) {
  return (
    <div className='flex flex-col items-center w-[60%] h-[200px] my-4 text-gray-1000 border-2 border-gray-900'>
        <div className='relative flex flex-col items-center justify-center h-[70%] w-[100%]'>
          <input type="checkbox" className='absolute top-2 left-2 w-[30px] h-[30px]'></input>
          <div className='flex justify-between w-[80%] h-[60px] m-4'>
            <div className='border-2 border-gray-900 w-[40%] text-center text-white font-semibold p-3'>{props.title}{props.id}</div>
            <div className='border-2 border-gray-900 w-[25%] text-center text-white font-semibold p-3'>{props.startDate}</div>
            <h1 className='p-2 font-bold text-gray-900 text-xl'>{">"}</h1>
            <div className='border-2 border-gray-900 w-[25%] text-center text-white font-semibold p-3'>{props.endDate}</div>
          </div>
          <div className='border-2 border-gray-900 w-[80%] h-[55px] text-center text-white font-semibold p-3'>{props.description}</div>
        </div>
        <div className='flex justify-center items-end h-[30%] w-[100%] font-semibold'>
          <button className='w-[30%] h-[35px] border-2 border-gray-900 m-2 bg-red-400' onClick={() => props.deleteTask(props.id)}>DELETE</button>
          <button className='w-[30%] h-[35px] border-2 border-gray-900 m-2 bg-gray-700'>EDIT</button>
        </div>
    </div>
  )
}

export default Task