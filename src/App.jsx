import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Ajouter une nouvelle tâche
  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  // Marquer comme terminé
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Supprimer une tâche
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📝 Ma Todo Liste</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Ajouter une tâche"
          className="px-4 py-2 border border-gray-300 rounded-md w-72"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Ajouter
        </button>
      </div>

      <ul className="w-full max-w-md">
        {todos.length === 0 && (
          <p className="text-gray-500 text-center">Aucune tâche pour le moment.</p>
        )}
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-4 mb-2 shadow-sm rounded-md"
          >
            <span
              onClick={() => toggleComplete(index)}
              className={`cursor-pointer flex-1 ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
