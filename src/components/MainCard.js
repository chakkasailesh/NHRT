import React, { useState } from 'react'
import './MainCard.css'
import Task from './Task'

const MainCard = ({ title, color }) => {
  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState('')
  const handleAddTask = () => {
    setTasks((prev) => [...prev, { name: taskName }])
    setTaskName('')
  }
  return (
    <div className="main-card" style={{ borderTop: `4px solid ${color}` }}>
      <div>
        <p>{title}</p>
        {tasks.map((task) => (
          <Task key={task.name} name={task.name} />
        ))}
        <input
          type="text"
          name="task"
          id="task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{ width: '80px' }}
        />
        <button onClick={handleAddTask}>+</button>
      </div>
    </div>
  )
}

export default MainCard
