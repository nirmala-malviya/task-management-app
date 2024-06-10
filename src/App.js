import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from "./components/Header";
import Todo from "./components/Todo";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/tasks`).then(response => setTasks(response.data));
  }, []);

  const addTask = (newTask) => {
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/tasks`, newTask).then(response => {
      setTasks([...tasks, response.data]);
    });
  };

  const updateTask = (id, updatedTask) => {
    axios.patch(`${process.env.REACT_APP_API_BASE_URL}/tasks/${id}`, updatedTask).then(response => {
      setTasks(tasks.map(task => (task.id === id ? response.data : task)));
    });
  };

  const deleteTask = (id) => {
    axios.delete(`${process.env.REACT_APP_API_BASE_URL}/tasks/${id}`).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  };
  

  const filteredTasks = tasks.filter(task => filter === 'All' || task.status === filter);
  
  return (
    <div className="App">
      <Header />
      <Todo addTask={addTask} tasks={tasks} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
