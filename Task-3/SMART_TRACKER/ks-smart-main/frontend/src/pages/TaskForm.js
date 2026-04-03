import React, { useState } from "react";
import axios from "axios";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const aiRes = await axios.post("http://localhost:5000/ai/priority", {
      description: task.description
    });

    const newTask = {
      ...task,
      priority: aiRes.data.priority
    };

    await axios.post("http://localhost:8080/api/tasks", newTask);

    alert("Task Created!");
    setTask({ title: "", description: "" });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Create New Task</h2>

        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />

          <label>Description</label>
          <textarea
            placeholder="Enter task description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            required
          />

          <button type="submit">Create Task</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;