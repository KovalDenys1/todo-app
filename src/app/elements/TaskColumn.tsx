type Task = {
    text: string;
    category: 'Home' | 'Work' | 'School';
  };
  
  type TaskColumnProps = {
    title: string;
    tasks: Task[];
    onDeleteTask: (index: number) => void;
  };
  
  export default function TaskColumn({ title, tasks, onDeleteTask }: TaskColumnProps) {
    return (
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4 text-black">{title}</h2>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-white rounded shadow mb-2 text-black"
            >
              {task.text}
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
  