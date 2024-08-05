import React from 'react';
import TaskTable from '../components/tables/TaskTable';
import TaskForm from '../components/forms/TaskForm';

const Tasks = () => {
  return (
    <div>
      <h2>Tasks</h2>
      <TaskForm />
      <TaskTable />
    </div>
  );
};

export default Tasks;
