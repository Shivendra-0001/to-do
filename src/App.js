import './App.css';
import react, { useState } from react;

function App() {

  const [task, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
  
    setTasks([...setTasks, newTask]);
    setNewTask("");
  }
  return (
    <div style={{textAlign: "center", marginTop: "50px"}} > 
  <h1>My To-Do List</h1>

      <input type='text'
        value={newTask}
        onChange={(e) => setNewTaske(e.target.value)}
      placeholder='Add new task here'/>
      
      

      
      
      
      
    </div>
  );
}

export default App;
