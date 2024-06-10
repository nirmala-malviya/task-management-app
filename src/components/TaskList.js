import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      <div className="container">
        {tasks.map(task => (
            <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))}
			</div>
    </div>
  );
};

export default TaskList;
