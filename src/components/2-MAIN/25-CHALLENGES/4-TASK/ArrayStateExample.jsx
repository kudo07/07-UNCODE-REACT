import React, { useState } from 'react';
// Example 2: Managing an Array of Objects
// When state is an array of objects, ensure that updates create new array and object instances.
const ArrayStateExample = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
  ]);
  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };
  return (
    <div>
      <h1>task list</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            {task.completed ? 'Completed' : ''}
            {!task.completed && (
              <button onClick={() => completeTask(task.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayStateExample;
