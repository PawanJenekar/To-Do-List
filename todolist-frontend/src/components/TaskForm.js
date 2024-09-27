import React, { useState } from "react";
import { createTask } from "../services/taskService";
import { TextField, Button, Box } from "@mui/material";

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title cannot be empty");
      return;
    }
    setError("");
    const newTask = { title, description };
    await createTask(newTask);
    setTitle("");
    setDescription("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="mb-2"
      >
        <TextField
          label="New Task Title"
          variant="outlined"
          size="small"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mr-2 w-48"
          error={!!error} 
        />
        <TextField
          label="Description"
          variant="outlined"
          size="small"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mr-2 w-48"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          className="h-12 px-4"
        >
          Add Task
        </Button>
      </Box>
    </form>
  );
};

export default TaskForm;
