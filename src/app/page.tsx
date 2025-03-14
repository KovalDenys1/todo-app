'use client';

import { useState } from 'react';
import Header from './elements/Header';
import TaskInputForm from './elements/TaskInputForm';
import TaskColumn from './elements/TaskColumn';
import { Task } from './elements/Types';

export default function Home() {
  const [tasksArray, setTasksArray] = useState<Task[]>([]);

  const handleAddTask = (text: string, category: 'Home' | 'Work' | 'School') => {
    setTasksArray([...tasksArray, { text, category }]);
  };

  const handleDeleteTask = (index: number) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Хэддер */}
      <Header />

      {/* Форма добавления задачи */}
      <TaskInputForm onAddTask={handleAddTask} />

      {/* Список задач по категориям */}
      <div className="flex gap-8 w-full max-w-screen-lg">
        {/* Колонка "Дом" */}
        <TaskColumn
          title="Home"
          tasks={tasksArray.filter((task) => task.category === 'Home')}
          onDeleteTask={handleDeleteTask}
        />

        {/* Колонка "Работа" */}
        <TaskColumn
          title="Work"
          tasks={tasksArray.filter((task) => task.category === 'Work')}
          onDeleteTask={handleDeleteTask}
        />

        {/* Колонка "Учёба" */}
        <TaskColumn
          title="School"
          tasks={tasksArray.filter((task) => task.category === 'School')}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}