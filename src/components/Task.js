import React, { useState } from 'react'
import Modal from './Modal'
import './Task.css'
import { useDispatch } from 'react-redux'
import { open, close } from './utils/Reducer'

const Task = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const [taskData, setTaskData] = useState({
    title: name,
    description: '',
    assignee: '',
  })
  const handleClose = () => {
    console.log('handle close')
    setIsOpen(false)
    dispatch(close())
  }
  const handleSave = (taskData) => {
    setTaskData(taskData)
    dispatch(close())
  }
  const handleOpen = () => {
    dispatch(open())
  }
  return (
    <div className="task" onClick={handleOpen}>
      <p>{taskData.title}</p>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        onSave={handleSave}
        data={taskData}
      />
    </div>
  )
}

export default Task
