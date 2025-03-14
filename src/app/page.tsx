'use client';

import { useState } from 'react';
import TaskInputForm from './elements/TaskInputForm';
import TaskColumn from './elements/TaskColumn';

type Task = {
  text: string;
  category: 'Home' | 'Work' | 'School';
  priority: 'High' | 'Medium' | 'Low';
};

export default function Home() {
  const [tasksArray, setTasksArray] = useState<Task[]>([]);

  const handleAddTask = (text: string, category: 'Home' | 'Work' | 'School', priority: 'High' | 'Medium' | 'Low') => {
    setTasksArray((prevTasksArray) => [...prevTasksArray, { text, category, priority }]);
  };

  const handleDeleteTask = (index: number) => {
    setTasksArray((prevTasksArray) => prevTasksArray.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold mb-6 text-black">To-Do App</h1>
      <TaskInputForm onAddTask={handleAddTask} />
      <div className="flex gap-8 w-full max-w-screen-lg">
        <TaskColumn
          title="Home"
          tasks={tasksArray.filter((task) => task.category === 'Home')}
          onDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          title="Work"
          tasks={tasksArray.filter((task) => task.category === 'Work')}
          onDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          title="School"
          tasks={tasksArray.filter((task) => task.category === 'School')}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}
