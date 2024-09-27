import React, { useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = ({ tasks, fetchTasks, deleteTask }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      fetchTasks();
    }, 5000);
    return () => clearInterval(interval);
  }, [fetchTasks]);

  return (
    <List className="w-96 bg-white shadow-md rounded-lg p-4">
      {tasks.length === 0 ? (
        <ListItem>
          <ListItemText primary="No tasks available. Add a task to get started!" />
        </ListItem>
      ) : (
        tasks.map((task) => (
          <ListItem key={task.id} className="border-b last:border-b-0">
            <ListItemText primary={task.title} secondary={task.description} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTask(task.id)}
                className="hover:text-red-500 transition-colors"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default TaskList;
