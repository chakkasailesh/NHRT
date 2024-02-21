import React, { useState } from 'react'
import './Modal.css'
import { useSelector } from 'react-redux'

const Modal = ({ onClose, onSave, data }) => {
  const open = useSelector((state) => state.modal.isOpen)
  const [taskData, setTaskData] = useState(data)
  const handleChange = (e) => {
    const { name, value } = e.target
    setTaskData((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <div className="modal" style={{ display: `${open ? 'flex' : 'none'}` }}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={handleChange}
        value={taskData.title}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        onChange={handleChange}
        value={taskData.description}
      />
      <label htmlFor="assignee">Assignee</label>
      <select
        name="assignee"
        id="assignee"
        onChange={handleChange}
        value={taskData.assignee}
      >
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
        <option value="user3">User 3</option>
      </select>
      <button onClick={() => onSave(taskData)}>Save</button>
      <button onClick={() => onClose()}>Cancel</button>
    </div>
  )
}

export default Modal
