
import { useEffect, useState } from 'react';
import axios from 'axios';

type Task = {
  id: number;
  title: string;
  is_completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks/')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTask = () => {
    axios.post('http://localhost:8000/api/tasks/', { title: newTask })
      .then(res => setTasks([res.data, ...tasks]))
      .catch(err => console.error(err));
    setNewTask('');
  };

  const toggleComplete = (id: number, is_completed: boolean) => {
    axios.put(`http://localhost:8000/api/tasks/${id}/`, {
      ...tasks.find(t => t.id === id),
      is_completed: !is_completed
    })
      .then(res => setTasks(tasks.map(t => t.id === id ? res.data : t)))
      .catch(err => console.error(err));
  };

  const deleteTask = (id: number) => {
    axios.delete(`http://localhost:8000/api/tasks/${id}/`)
      .then(() => setTasks(tasks.filter(t => t.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <main className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">TaskSync</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center border-b py-2">
            <span className={task.is_completed ? 'line-through' : ''}>
              {task.title}
            </span>
            <div className="flex gap-2">
              <button onClick={() => toggleComplete(task.id, task.is_completed)} className="text-green-500">
                {task.is_completed ? 'Undo' : 'Done'}
              </button>
              <button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
