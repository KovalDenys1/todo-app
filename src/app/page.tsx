'use client';

import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask('');
    }
  };

  const handleDelete = (index: number) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold mb-6 text-black">To-Do App</h1>
      <form onSubmit={handleFormSubmit} className="flex gap-4 mb-6">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
      <ul className="w-full max-w-md">
        {tasksArray.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-white rounded shadow mb-2 text-black"
          >
            {task}
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}