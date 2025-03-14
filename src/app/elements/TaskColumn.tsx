type Task = {
  text: string;
  category: string;
  priority: string;
};

type TaskColumnProps = {
  title: string;
  tasks: Task[];
  onDeleteTask: (index: number) => void;
};

export default function TaskColumn({ title, tasks, onDeleteTask }: TaskColumnProps) {
  // Sort tasks by priority
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder: { [key: string]: number } = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold mb-4 text-black">{title}</h2>
      <ul>
        {sortedTasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 bg-white rounded shadow mb-2 ${
              task.priority === 'High'
                ? 'border-red-500'
                : task.priority === 'Medium'
                ? 'border-yellow-500'
                : ''
            }`}
          >
            {task.text}<span className={`font-bold ${getPriorityColor(task.priority)}`}>{task.priority}</span>
            <button
              onClick={() => onDeleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getPriorityColor(priority: string): string {
  switch (priority) {
    case "High":
      return "text-red-500";
    case "Medium":
      return "text-yellow-500";
    case "Low":
      return "text-green-500";
    default:
      return "";
  }
}
