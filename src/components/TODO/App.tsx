import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { Itask } from "./Interface";
import Todo from "../TODO/Todo";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [days, setDays] = useState<number>(0);
  const [todo, setTodo] = useState<Itask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDays(Number(e.target.value));
    }
  };
  const addTask = (): void => {
    const newTask = { taskName: task, Days: days };
    setTodo([...todo, newTask]);
    setTask("");
    setDays(0);
    console.log("todo", todo);
  };
  const deleteTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputf">
          <input
            type="text"
            placeholder="Task"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Days"
            name="days"
            value={days}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>ADD TASK</button>
      </div>
      <div className="todoList">
        {todo.map((task: Itask, key: number) => {
          return <Todo key={key} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};
export default App;
