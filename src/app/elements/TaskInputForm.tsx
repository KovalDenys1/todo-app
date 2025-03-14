import { useState } from 'react';

type TaskInputFormProps = {
  onAddTask: (task: string, category: 'Home' | 'Work' | 'School', priority: 'High' | 'Medium' | 'Low') => void;
};

export default function TaskInputForm({ onAddTask }: TaskInputFormProps) {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState<'Home' | 'Work' | 'School'>('Home');
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as 'Home' | 'Work' | 'School');
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as 'High' | 'Medium' | 'Low');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task, category, priority);
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
        className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />
      <select
        value={category}
        onChange={handleCategoryChange}
        className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="School">School</option>
      </select>
      <select
        value={priority}
        onChange={handlePriorityChange}
        className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
}
