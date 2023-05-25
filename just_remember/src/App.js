import React, { useState } from 'react'
import Task from './Components/Task';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState({taskID: tasks.length, taskTitle: '', taskDescription: '', taskStartDate: '', taskEndDate: '', status: false});
  const [taskEdit, setTaskEdit] = useState({taskTitleE: '', taskDescriptionE: '', taskStartDateE: '', taskEndDateE: ''});

  const changeTabAll = () => {
    setTasks(allTasks);
  }

  const changeTab = (e) => {
    let x = JSON.parse(e.target.value)
    const remainingTasks = allTasks.filter((task) => task.status === x);
    setTasks(remainingTasks);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setTask({
      ...task,[e.target.name]: value
    })
  }

  const handleChangeEdit = (e) => {
    const value = e.target.value;
    setTaskEdit({
      ...taskEdit,[e.target.name]: value
    })
  }

  function editTask(id, edit) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.taskID) {
        return {...task, taskTitle: taskEdit.taskTitleE, taskDescription: taskEdit.taskDescriptionE, taskStartDate: taskEdit.taskStartDateE, taskEndDate: taskEdit.taskEndDateE}
      }
      return task;
    });
    edit(false);
    setTaskEdit(false);
    setTasks(updatedTasks);
    setAllTasks(updatedTasks);
  }

  const deleteTask = (id) => {  
    const newList = allTasks.filter((task) => id !== task.taskID);
    setTasks(newList);
    setAllTasks(newList);
  } 

  const addTask = () => {
    setTask({taskID: tasks.length+1, taskTitle: '', taskDescription: '', taskStartDate: '', taskEndDate: '', status: false});
    setTasks([...tasks, task]);
    setAllTasks([...allTasks, task]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.taskID) {
        return {...task, status: !task.status}
      }
      return task;
    });
    setTasks(updatedTasks);
    setAllTasks(updatedTasks);
  }

  const taskList = tasks.map((task) => (
    <Task {...task} {...taskEdit} editTask={editTask} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} handleChangeEdit={handleChangeEdit} />
  ));
  
  return (
    <div className='flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-gray-700'>
      <div className='flex justify-between w-[75%]'>
        <div className='flex justify-between items-center bg-gray-800 w-[39%] mb-2 rounded-md h-[80px] text-white font-bold text-[30px] border-2 border-gray-900'>
          <button className='w-[33%] text-center p-6 cursor-pointer opacity-[80%]' name="all" onClick={changeTabAll}>ALL</button>
          <button className='w-[33%] text-center p-6 cursor-pointer opacity-[80%]' name="todo" value={false} onClick={changeTab}>TO-DO</button>
          <button className='w-[33%] text-center p-6 cursor-pointer opacity-[80%]' name="done" value={true} onClick={changeTab}>DONE</button>
        </div>
        <div className='flex justify-around items-center bg-gray-800 w-[60%] rounded-t-md h-[90px] text-white text-2xl border-2 border-gray-900 border-b-0'>
          <form className='flex justify-center items-center h-[100%] bg-gray-800 w-[100%] rounded-sm text-white text-[18px]'>
            <div className='flex flex-col w-[60%]'>
              <input className='m-1 h-[32px] bg-transparent rounded-br-md border-r border-b border-gray-900 p-1' placeholder='title' name='taskTitle' value={task.taskTitle} onChange={handleChange}/>
              <input className='m-1 h-[32px] bg-transparent rounded-tr-md border-r border-t border-gray-900 p-1' placeholder='description' name='taskDescription' value={task.taskDescription} onChange={handleChange}/>
            </div>
            <div className='flex flex-col ml-1 w-[30%]'>
              <div className='flex border-l border-b border-gray-900 m-1 h-[32px] rounded-bl-md'>
                <label className='w-[50px] text-[10px] font-semibold text-center'>START</label>
                <input className='ml-2 bg-transparent border-b-2 border-gray-800 rounded-sm' type="date" name='taskStartDate' value={task.taskStartDate} onChange={handleChange}></input>
              </div>
              <div className='flex border-l border-t border-gray-900 m-1 h-[32px] rounded-tl-md'>
                <label className='w-[50px] text-[10px] font-semibold text-center'>END</label>
                <input className='ml-2 bg-transparent' type="date" name='taskEndDate' value={task.taskEndDate} onChange={handleChange}></input>
              </div>
            </div>
            <button className='h-[100%] w-[80px] bg-gray-900 font-bold hover:bg-gray-600 transition-all ml-1' type='reset' onClick={addTask}>ADD</button>
          </form>
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
