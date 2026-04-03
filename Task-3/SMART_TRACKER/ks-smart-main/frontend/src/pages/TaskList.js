import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get("http://localhost:8080/api/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8080/api/tasks/${id}`)
      .then(fetchTasks);
  };

  const markComplete = (id) => {
    axios.put(`http://localhost:8080/api/tasks/${id}/complete`)
      .then(fetchTasks);
  };

  return (
    <div className="container">
      <h2>Task List</h2>

      {tasks.map(task => (
        <div className="task-card" key={task.id}>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span className="priority">{task.priority}</span>
          </div>

          <div>
            <button onClick={() => markComplete(task.id)}>✔</button>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;