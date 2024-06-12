import React, { useState } from "react";
import './ToDoList.css'

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if(newTask.trim() !== ""){
        setTasks((t) => [...t, newTask]);
        setNewTask("");
    }
    
  };

  const deleteTask = (index) =>
    setTasks((t) => t.filter((_, i) => i !== index));

  const moveUpward = (index) => {
    if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index -1]];
        setTasks(updatedTasks);
    }
  }

  const moveDownward =(index) => {
    if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
        setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h2>To-Do-List</h2>
      <input
        id="task"
        value={newTask}
        type="text"
        placeholder="Enter a task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-button" onClick={addTask}>Add</button>
      <div>
        <ol>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveUpward(index)}>👆</button>
                <button className="move-button" onClick={() => moveDownward(index)}>👇</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
