import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [task, setTask] = useState({
    leadId: '',
    type: '',
    dueDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/tasks', task);
      // Handle success (e.g., reset form, show success message)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="leadId" placeholder="Lead ID" onChange={handleChange} required />
      <input type="text" name="type" placeholder="Type" onChange={handleChange} required />
      <input type="date" name="dueDate" placeholder="Due Date" onChange={handleChange} required />
      <textarea name="notes" placeholder="Notes" onChange={handleChange}></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
