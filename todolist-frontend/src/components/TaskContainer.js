import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskContainer = ({ tasks, fetchTasks, deleteTask }) => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                {/* Task Form */}
                <TaskForm refreshTasks={fetchTasks} />

                {/* Tabs Navigation */}
                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="ex1-tab-1"
                      data-bs-toggle="tab"
                      href="#ex1-tabs-1"
                      role="tab"
                      aria-controls="ex1-tabs-1"
                      aria-selected="true"
                    >
                      All
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="ex1-tab-2"
                      data-bs-toggle="tab"
                      href="#ex1-tabs-2"
                      role="tab"
                      aria-controls="ex1-tabs-2"
                      aria-selected="false"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="ex1-tab-3"
                      data-bs-toggle="tab"
                      href="#ex1-tabs-3"
                      role="tab"
                      aria-controls="ex1-tabs-3"
                      aria-selected="false"
                    >
                      Completed
                    </a>
                  </li>
                </ul>

                {/* Tabs Content */}
                <div className="tab-content" id="ex1-content">
                  <div
                    className="tab-pane fade show active"
                    id="ex1-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                  >
                    <TaskList
                      tasks={tasks}
                      fetchTasks={fetchTasks}
                      deleteTask={deleteTask}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex1-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-2"
                  >
                    {/* Active tasks can be filtered here */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex1-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-3"
                  >
                    {/* Completed tasks can be filtered here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskContainer;
