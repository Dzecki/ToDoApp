import React, { useState } from 'react'
import Task from './Components/Task';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({taskID: 0, taskTitle: '', taskDescription: '', taskStartDate: '', taskEndDate: ''});

  const changeTab = (e) => {
    return e.target.style = "opacity: 100%";
  }

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

  const addTask = () => {
    console.log(tasks);
    setTask({taskID: tasks.length});
    setTasks([...tasks, task]);
  }

  const taskList = tasks.map((task) => (
    <Task id={task.taskID} title={task.taskTitle} description={task.taskDescription} startDate={task.taskStartDate} endDate={task.taskEndDate} deleteTask={deleteTask}/>
  ));
  
  return (
    <div className='flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-gray-700'>
      <div className='flex justify-between w-[75%]'>
        <div className='flex justify-between items-center bg-gray-800 w-[39%] mb-2 rounded-md h-[80px] text-white font-bold text-[30px] border-2 border-gray-900'>
          <div className='w-[33%] text-center p-6 cursor-pointer opacity-[80%]' name="all" onClick={changeTab}>ALL</div>
          <div className='w-[33%] text-center p-6 cursor-pointer opacity-[80%]' name="todo">TO-DO</div>
          <div className='w-[33%] text-center p-6 cursor-pointer opacity-[80%]' name="done">DONE</div>
        </div>
        <div className='flex justify-around items-center bg-gray-800 w-[60%] rounded-t-md h-[90px] text-white text-2xl border-2 border-gray-900 border-b-0'>
          <div className='flex justify-center items-center h-[100%] bg-gray-800 w-[100%] rounded-sm text-white text-[18px]'>
            <div className='flex flex-col w-[60%]'>
              <input className='m-1 h-[32px] bg-transparent rounded-br-md border-r border-b border-gray-900 p-1' placeholder='title' name='taskTitle' value={task.taskTitle} onChange={handleChange}/>
              <input className='m-1 h-[32px] bg-transparent rounded-tr-md border-r border-t border-gray-900 p-1' placeholder='description' name='taskDescription' value={task.taskDescription} onChange={handleChange}/>
            </div>
            <div className='flex flex-col ml-1 w-[30%]'>
              <div className='flex border-l border-b border-gray-900 m-1 h-[32px] rounded-bl-md'>
                <label className='w-[50px] text-[10px] font-semibold text-center'>START</label>
                <input className='m-1 bg-transparent border-b-2 border-gray-800 rounded-sm p-1' type="date" name='taskStartDate' value={task.taskStartDate} onChange={handleChange}></input>
              </div>
              <div className='flex border-l border-t border-gray-900 m-1 h-[32px] rounded-tl-md'>
                <label className='w-[50px] text-[10px] font-semibold text-center'>END</label>
                <input className='m-1 bg-transparent p-1' type="date" name='taskEndDate' value={task.taskEndDate} onChange={handleChange}></input>
              </div>
            </div>
            <button className='h-[100%] w-[80px] bg-gray-900 font-semibold hover:bg-gray-600 transition-all ml-1' onClick={addTask}>add</button>
          </div>
        </div>
      </div>

      <div className='relative w-[75%] h-[85%] bg-gray-800 rounded-md shadow-sm rounded-r-none rounded-b-md border-2 border-gray-900 overflow-y-scroll scrollbar-hide'>
        <div className='relative flex flex-col justify-center items-center mt-8'>
          {taskList}
        </div>
      </div>
    </div>
  )
}
