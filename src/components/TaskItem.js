import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleStatusChange = (e) => {
    updateTask(task.id, { ...task, status: e.target.value });
  };

  return (
    <div className='container border rounded d-flex justify-content-center shadow p-3 md-5 bg-white rounded'>
      <div className="row">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <select value={task.status} onChange={handleStatusChange}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button className="btn btn-primary my-2" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
