import React, { useState } from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './style.css'
import TaskInput from '../task-input';
import { useDispatch } from 'react-redux';
import { addTask, completeTodoTask, deleteTask, redoCompletedTask } from '../../redux/thunks/task'

const TaskList = ({
  todoList = [],
  completedList = [],
}) => {
  const [showTaskInput, setShowTaskInput] = useState(true);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleAddTask = () => {
    setInput('');
    dispatch(addTask(input))
  }
  const handleDeleteTask = (task, type) => {
    dispatch(deleteTask(task, type))
  }

  const completeTask = (task) => {
    dispatch(completeTodoTask(task))
  }
  const redoTask = (task) => {
    dispatch(redoCompletedTask(task))
  }
  return (
    <div className='task-list'>
      <div className='todo-input-toggle'>
        ToDo
        <ArrowDropDownIcon onClick={() => setShowTaskInput(!showTaskInput)} />
      </div>
      {
        showTaskInput ?
          <TaskInput
            value={input}
            handleChange={handleInputChange}
            addTask={handleAddTask}
          /> : null
      }
      <div className="todo-container">
        {
          todoList.map((item, index) => (
            <div className='task'>
              <div className='checkbox-wrapper'>
                <input
                  type='checkbox'
                  checked={false}
                  onClick={() => completeTask(item)}
                />
                <label className='checkbox-label'>{item}</label>
              </div>
              <div className='important-task'>
                <StarBorderOutlinedIcon />
                <DeleteIcon onClick={() => handleDeleteTask(item, 'todo')} />
              </div>
            </div>
          ))
        }
      </div>
      <br />
      <div className="completed-text">Completed</div>
      <div className="completed-container">
        {
          completedList.map((item, index) => (
            <div className='task'>
              <div className='checkbox-wrapper'>
                <input
                  type='checkbox'
                  checked={true}
                  onClick={() => redoTask(item)}
                />
                <label className='checkbox-label'>{item}</label>

              </div>
              <div className='important-task'>
                <StarBorderOutlinedIcon />
                <DeleteIcon onClick={() => handleDeleteTask(item, 'completed')} />
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TaskList