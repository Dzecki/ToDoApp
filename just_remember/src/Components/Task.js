import React from 'react';

function Task(props) {
  return (
    <div className='flex flex-col items-center w-[60%] h-[200px] my-4 text-gray-1000 border-2 border-gray-900 bg-gray-700'>
        <div className='relative flex flex-col items-center justify-center h-[70%] w-[100%]'>
        <input type="checkbox" className='absolute top-2 left-2 w-[30px] h-[30px]' defaultChecked={props.status} checked={props.status} onChange={() => props.toggleTaskCompleted(props.taskID)}></input>
          {props.editMode ? 
            <div className='flex flex-col w-[80%]'> 
              <div className='flex justify-between w-[100%] h-[60px] m-4'>
                <input className='border-2 border-gray-900 w-[40%] text-center bg-gray-800 text-white font-semibold p-3' placeholder={props.taskTitle} name='taskTitleE' onChange={props.handleChangeEdit}></input>
                <input className='border-2 border-gray-900 w-[25%] text-center bg-gray-800 text-white font-semibold p-3' type='date' name='taskStartDateE' defaultValue={props.taskStartDate} placeholder={props.taskStartDate} onChange={props.handleChangeEdit}></input>
                <h1 className='p-3 font-bold text-gray-900 text-xl'>{"-"}</h1>
                <input className='border-2 border-gray-900 w-[25%] text-center bg-gray-800 text-white font-semibold p-3' type='date' name='taskEndDateE' defaultValue={props.taskEndDate} placeholder={props.taskEndDate} onChange={props.handleChangeEdit}></input>
              </div>
              <input className='border-2 border-gray-900 w-[100%] h-[60px] text-center bg-gray-800 text-white font-semibold p-3 ml-4' placeholder={props.taskDescription}  name='taskDescriptionE' onChange={props.handleChangeEdit}></input>   
            </div> : 
            <div className='flex flex-col w-[80%]'>
              <div className='flex justify-between w-[100%] h-[60px] m-4'>
                <div className='border-2 border-gray-900 w-[40%] text-center bg-gray-800 text-white font-semibold p-4'>{props.taskTitle}</div>
                <div className='border-2 border-gray-900 w-[25%] text-center bg-gray-800 text-white font-semibold p-4'>{props.taskStartDate}</div>
                <h1 className='p-3 font-bold text-gray-900 text-xl'>{"-"}</h1>
                <div className='border-2 border-gray-900 w-[25%] text-center bg-gray-800 text-white font-semibold p-4'>{props.taskEndDate}</div> 
              </div>
              <div className='border-2 border-gray-900 w-[100%] h-[60px] text-center bg-gray-800 text-white font-semibold p-4 ml-4'>{props.taskDescription}</div> 
            </div>
        }
        </div>
        <div className='flex justify-center items-end h-[30%] w-[100%] font-semibold'>
          <button className='w-[30%] h-[35px] border-2 border-gray-900 m-2 bg-red-400' onClick={() => props.deleteTask(props.taskID)}>DELETE</button> 
          {props.editMode ?
            <button className='w-[30%] h-[35px] border-2 border-gray-900 m-2 bg-blue-400' onClick={() => props.editTask(props.taskID)}>CONFIRM</button> :
            <button className='w-[30%] h-[35px] border-2 border-gray-900 m-2 bg-gray-700' onClick={() => props.setEditMode(true)}>EDIT</button>
          }
        </div>
    </div>
  )
}

export default Task