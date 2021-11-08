import React from "react";
import './Tasklist.css'
import PropTypes from 'prop-types'
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({children, onAddTask, tasks, ontaskUpdate, taskState, onDeleteTask}){

   const addTask = () => {
      onAddTask('Nova tarefa', taskState)
   }

   return(
      <div className='Tasklist'>
         <div className='title'>{children}</div>
         <div className="content">
            {tasks.map((task) => {
               return <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                taskState={task.state}
                ontaskUpdate={ontaskUpdate}
                onDeleteTask={onDeleteTask}
                />
            })}
            <button onClick={addTask}>Adicionar Tarefa</button>
         </div>
      </div>
   )
}

TaskList.propTypes = {
   children: PropTypes.string.isRequired,
   onAddTask: PropTypes.func.isRequired,
   tasks: PropTypes.array.isRequired
}