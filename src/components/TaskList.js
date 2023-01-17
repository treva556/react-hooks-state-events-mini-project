
import React from "react";
import Task from "./Task"

function TaskList({ tasks, onDelete }) {
  const taskLists = tasks.map((task, index) => {
    return <Task
      key={index}
      text={task.text}
      category={task.category}
      onDelete={onDelete} />
  })

  return (
    <div className="tasks">
      {taskLists}
    </div>
  );
}

export default TaskList;
