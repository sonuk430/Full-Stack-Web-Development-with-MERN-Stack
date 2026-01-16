import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // const [loading, setLoading] = useState(false);

  const API = "http://localhost:8080/api/v1/tasks";

  // 🔹 Get all tasks
  const fetchTasks = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTasks(data.getAllTask);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // console.log(tasks);
  // 🔹 Create task
  const addTask = async () => {
    if (!title) return alert("Title required");

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    fetchTasks();
  };

  // 🔹 Update task (toggle completed)
  const toggleTask = async (id, completed) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });

    fetchTasks();
  };

  // 🔹 Delete task
  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  return (
    <div
      style={{ maxWidth: "500px", margin: "50px auto", fontFamily: "Arial" }}
    >
      <h2>📝 Todo App</h2>

      {/* Add Task */}
      <div>
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <span
              onClick={() => toggleTask(task._id, task.completed)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>

            <button onClick={() => deleteTask(task._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
