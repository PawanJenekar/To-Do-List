import React from "react";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="slds-box slds-box_xx-small slds-m-bottom_small task-item">
      <h3 className="slds-text-heading_small">{task.title}</h3>
      <p>{task.description}</p>
      <button
        className="slds-button slds-button_destructive"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
