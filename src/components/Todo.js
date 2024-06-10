// import React from "react";
import React, { useState } from "react";
const Todo = ({ addTask, tasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    const todoCount = tasks.filter(task => task.status === 'To Do').length;
    if (status === 'To Do' && todoCount >= tasks.length / 2) {
      alert('Cannot create more "To Do" tasks');
      return;
    }
    addTask({ title, description, status });
    setTitle('');
    setDescription('');
  };

    return (
            <div>
              <h2>Create new Task</h2>
              <div className="container">
                  {/* <div className="col-12 text-end" onClick={handleAdd}>
                      <button>Add New Task</button>
                  </div> */}
              </div>

              <div className="container border rounded d-flex justify-content-center shadow p-3 md-5 bg-white rounded">
                <div className="row">                  
                  <form className="col-12 p-2" onSubmit={handleSubmit}>
                    <label htmlFor="title" className="my-2">
                        Enter Title
                    </label>
                    <input type="text" name="title" id="title" placeholder="Title" className="w-100 my-1 p-2" value={title} onChange={(e) => setTitle(e.target.value)} required/>

                    <label htmlFor="description" className="my-2">
                        Enter Description
                    </label>
                    <input type="text" name="description" id="description" placeholder="Description" className="w-100 my-1 p-2" value={description} onChange={(e) => setDescription(e.target.value)} required/>

                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>

                    <button className="btn btn-primary my-2">Save</button>
                  </form>
                </div>
              </div>
            </div>
    );
}

export default Todo