import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="task-list task-filter nav-left">
      <b>Apply Filter from here </b>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default TaskFilter;
