import { useState } from 'react';

type TaskInputFormProps = {
  onAddTask: (task: string, category: 'Home' | 'Work' | 'School') => void;
};

export default function TaskInputForm({ onAddTask }: TaskInputFormProps) {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState<'Home' | 'Work' | 'School'>('Home');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as 'Home' | 'Work' | 'School');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task, category);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex gap-4 mb-6">
      <input
  type="text"
  value={task}
  onChange={handleInputChange}
  placeholder="Enter task"
  className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300 text-black"
/>

      <select
        value={category}
        onChange={handleCategoryChange}
        className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300 text-black"
      >
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="School">School</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add task
      </button>
    </form>
  );
}
