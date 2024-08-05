import React from 'react';

const TaskTable = () => {
  // Sample data, replace with API call
  const tasks = [
    { id: 1, leadId: 1, type: 'Call', dueDate: '2023-06-15', notes: 'Follow up with lead' },
    // Add more tasks as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Lead ID</th>
          <th>Type</th>
          <th>Due Date</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.leadId}</td>
            <td>{task.type}</td>
            <td>{task.dueDate}</td>
            <td>{task.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
