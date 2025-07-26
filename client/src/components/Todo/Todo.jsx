import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md"; // 

import './index.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    if (!newTask.trim()) return;
    try {
      await axios.post(
        "http://localhost:5000/api/tasks",
        { title: newTask },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setNewTask("");
      fetchTasks();
    } catch (err) {
      console.error("Error creating task", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      fetchTasks();
    } catch (err) {
      console.error("Error updating task", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task", err);
    }
  };

  return (
    <div className="container">
      <h1>Live Collaborative To-Do List</h1>
      <div className="new-task">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={createTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span>{task.title}</span>
            <select
              value={task.status}
              onChange={(e) => updateStatus(task._id, e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button onClick={() => deleteTask(task._id)} className="delete-btn">
              <MdDelete size={20} color="red" />
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
