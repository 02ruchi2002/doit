import React from 'react'
import './style.css'

const TaskInput = ({
  value,
  handleChange,
  addTask
}) => {
  return (
    <div className='task-input'>
      <textarea
        value={value}
        placeholder='Add a task'
        onChange={handleChange}
      >
      </textarea>
      <button className='add-task-btn' onClick={addTask}>
        Add Task
      </button>
    </div>
  )
}

export default TaskInput