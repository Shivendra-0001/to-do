import './App.css';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
  
    setTasks([...tasks, newTask]);
    setNewTask("");
  }
  return (
    <div style={{textAlign: "center", marginTop: "50px"}} > 
  <h1>My To-Do List</h1>

      <input type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Add new task here'/>
      <button onClick={handleAddTask}>Add Task</button>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      
      
      
      
    </div>
  );
}

export default App;
