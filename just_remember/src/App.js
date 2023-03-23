import React, { useState } from 'react'
import Task from './Components/Task';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({taskTitle: '', taskInfo: ''});

  const handleChange = (e) => {
    const value = e.target.value;
    setTask({
      ...task,[e.target.name]: value
    })
  }

  const taskList = tasks.map((item) => (
    <Task key={item.taskTitle}/>
  ));

  const addTask = () => {
    setTasks([...tasks, task]);
  }
  
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh] bg-blue-200'>
      <div className='relative w-[70%] h-[80%] bg-blue-300 rounded-lg shadow-sm'>
        <div className='flex w-[100%] mt-4 text-white text-2xl cursor-pointer font-semibold'>
          <div className='flex justify-center items-center w-[33%] h-[60px] hover:mt-[-3px] transition-all'>All</div>
          <div className='flex justify-center items-center w-[34%] h-[60px] border-x-2 border-blue-100'>Done</div>
          <div className='flex justify-center items-center w-[33%] h-[60px]'>To do</div>
        </div>

        <div className='flex flex-col items-center mt-8'>
          {taskList}
        </div>

        <button className='absolute bottom-0 w-[50px] h-[50px] bg-blue-400 rounded-tr-md' onClick={addTask}>add</button>
        <input placeholder='title' name='taskTitle' value={task.taskTitle} onChange={handleChange}/>
        <input className='mx-2' placeholder='info' name='taskInfo' value={task.taskInfo} onChange={handleChange}/>
      </div>
    </div>
  )
}
