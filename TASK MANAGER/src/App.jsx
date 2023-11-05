import React, { useState } from 'react';
import TaskList from '../src/components/TaskList'
import TaskForm from '../src/components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  
  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task, id) => {
      if (id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} completeTask={completeTask} />
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
