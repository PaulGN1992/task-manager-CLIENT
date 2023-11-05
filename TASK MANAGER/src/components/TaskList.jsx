function TaskList({ tasks, completeTask }) {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index} onClick={() => completeTask(index)} className={task.completed ? 'completed' : ''}>
            {task.text}
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;