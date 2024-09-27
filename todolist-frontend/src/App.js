import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      fetchTasks(); // Refresh the task list after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Fetch tasks on initial load
  }, []);

  return (
    <Container className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Typography variant="h4" align="center" className="mb-4 text-gray-800">
        To-Do List App
      </Typography>
      <TaskForm refreshTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} deleteTask={deleteTask} />
    </Container>
  );
};

export default App;
