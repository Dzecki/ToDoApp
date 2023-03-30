import React, { useState } from 'react'
import Task from './Components/Task';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({taskID: 1, taskTitle: '', taskDescription: '', taskStartDate: '', taskEndDate: ''});

  const handleChange = (e) => {
    const value = e.target.value;
    setTask({
      ...task,[e.target.name]: value
    })
  }

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.taskID);
    setTasks(remainingTasks);
  } 

  const taskList = tasks.map((task) => (
    <Task id={task.taskID} title={task.taskTitle} description={task.taskDescription} deleteTask={deleteTask}/>
  ));

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask({taskID: 2});
  }
  
  return (
    <div className='flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-gray-700'>
      <div className='flex justify-between w-[75%]'>
        <div className='flex justify-between items-center bg-gray-800 w-[39%] mb-2 rounded-md h-[80px] text-white font-bold text-[30px]'>
          <div className='w-[33%] text-center p-6 cursor-pointer'>ALL</div>
          <div className='w-[33%] text-center p-6 cursor-pointer'>TO-DO</div>
          <div className='w-[33%] text-center p-6 cursor-pointer'>DONE</div>
        </div>
        <div className='flex justify-between bg-gray-800 w-[60%] rounded-t-md h-[90px] text-white text-2xl'></div>
      </div>

      <div className='relative w-[75%] h-[85%] bg-gray-800 rounded-md shadow-sm rounded-r-none rounded-b-md'>
        <div className='flex flex-col items-center mt-8'>
          {taskList}
        </div>

        <div className='flex justify-center items-center absolute bottom-4 right-4 bg-gray-700 w-fit rounded-sm pr-2 text-white'>
          <div className='flex flex-col'>
            <input className='m-2 mt-4 h-[40px] bg-gray-800 rounded-sm p-1' placeholder='title' name='taskTitle' value={task.taskTitle} onChange={handleChange}/>
            <input className='m-2 h-[40px] bg-gray-800 rounded-sm p-1' placeholder='description' name='taskInfo' value={task.taskInfo} onChange={handleChange}/>
            <input className='m-2 h-[40px] bg-gray-800 rounded-sm p-1' type="date"></input>
            <input className='m-2 h-[40px] bg-gray-800 rounded-sm p-1' type="date"></input>
            <button className='m-2 h-[30px] bg-gray-800 ml-2 font-semibold rounded-sm hover:bg-gray-600 transition-all' onClick={addTask}>new task</button>
          </div>
        </div>
      </div>
    </div>
  )
}
