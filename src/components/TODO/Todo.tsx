import React from "react";
import { Itask } from "../TODO/Interface";

interface Props {
  task: Itask;
  deleteTask(taskNameToDelete: string): void;
}

const Todo = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.Days}</span>
      </div>

      <button
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};
export default Todo;
