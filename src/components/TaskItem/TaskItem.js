import React, {useState} from "react";
import PropTypes from 'prop-types'
import './TaskItem.css'

export default function TaskItem({id, title, taskState, ontaskUpdate, onDeleteTask}) {
   const [isEditing, setIsEditing] = useState(false)
   const [editableTitle, setEditableTitle] = useState(title)

   const onTitleChange = (e) => {
      const newTitle = e.target.value 
      setEditableTitle(newTitle)
      ontaskUpdate(id, newTitle, taskState)
   }
   const onKeyPress = (e) => {
      if(e.key === 'Enter'){
         setIsEditing(false)
         if(editableTitle.length === 0) {
            onDeleteTask(id)
         }
      }
   }
   const onTaskStateChange = (e) => {
      ontaskUpdate(id, title, e.target.value)
   }

   if(isEditing){
      return <input className='taskButon' type="text" value={editableTitle} onChange={onTitleChange} onKeyPress={onKeyPress} />
   }else{
      return(
         <div className='itemContent'>
            <p onClick={(e) => {setIsEditing(true)}}>{editableTitle}</p>
            <select onChange={onTaskStateChange} value={taskState} >
               <option value="Pendente">Pendente</option>
               <option value="Fazendo">Fazendo</option>
               <option value="Completa">Completa</option>
            </select>
         </div>
         
      )
   }
}

TaskItem.prototype = {
   id: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   taskState: PropTypes.string.isRequired
}