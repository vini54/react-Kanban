import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';
import { useState } from 'react';

let idAcc = 0
const generateId = () => {
  idAcc = idAcc + 1
  return idAcc
}

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state 
    }
    setTasks((existingTasks) => {
      return [...existingTasks, newTask]
    })
  }

  const UpdateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if(task.id === id){
          return {...task, title, state}
        }else{
          return task
        }
      })
    })
  }
  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id)
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className='taskLists'>
        <TaskList 
          children='Pendente'
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === 'Pendente')}
          ontaskUpdate={UpdateTask}
          taskState='Pendente'
          onDeleteTask={deleteTask}
        />
        <TaskList 
          children='Fazendo'
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === 'Fazendo')}
          ontaskUpdate={UpdateTask}
          taskState='Fazendo'
          onDeleteTask={deleteTask}
        />
        <TaskList 
          children='Completa'
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === 'Completa')}
          ontaskUpdate={UpdateTask}
          taskState='Completa'
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
