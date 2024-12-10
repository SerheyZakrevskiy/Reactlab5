import React, { useState } from "react";
import { observer } from "mobx-react";
import todoStore from "../store/todoStore";

const TodoApp = observer(() => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      todoStore.addTodo(taskText);
      setTaskText("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task"
          style={{ width: "70%", padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleAddTask} style={{ padding: "8px 12px" }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todoStore.todos.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              background: task.completed ? "#e0ffe0" : "#fff",
            }}
          >
            <span
              onClick={() => todoStore.toggleTodo(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => todoStore.deleteTodo(task.id)}
              style={{ color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoApp;
