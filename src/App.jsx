import React, { useState } from "react";
import TaskItem from "./components/TaskItem";

function App() {
  // État pour la tâche en cours de saisie
  const [task, setTask] = useState("");

  // État pour la liste de toutes les tâches
  const [todos, setTodos] = useState([]);

  // Ajouter une nouvelle tâche
  const addTask = () => {
    if (task.trim() === "") return; // Si l'entrée est vide ou seulement des espaces, on annule

    // Ajout de la nouvelle tâche dans la liste (non complétée par défaut)
    setTodos([...todos, { text: task, completed: false }]);
    setTask(""); // Réinitialisation du champ de saisie
  };

  // Fonction pour marquer une tâche comme terminée ou non (toggle)
  const toggleComplete = (index) => {
    const newTodos = [...todos]; // Copie de la liste des tâches
    newTodos[index].completed = !newTodos[index].completed; // Inversion de l'état "completed"
    setTodos(newTodos); // Mise à jour de l'état
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Filtre toutes sauf celle qu'on veut supprimer
    setTodos(newTodos); // Mise à jour de l'état
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
       {/* Titre principal */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📝 Ma Todo Liste</h1>

      {/* Formulaire d’ajout de tâche */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task} // Lier l'input à l'état `task`
          onChange={(e) => setTask(e.target.value)} // Mise à jour en temps réel
          placeholder="Ajouter une tâche"
          className="px-4 py-2 border border-gray-300 rounded-md w-72"
        />
        <button
          onClick={addTask} // Appel de la fonction d’ajout
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Ajouter
        </button>
      </div>

      {/* Liste des tâches */}
      <ul className="w-full max-w-md">
        {todos.length === 0 && (
          <p className="text-gray-500 text-center">Aucune tâche pour le moment.</p>
        )}
        {/* Affichage de chaque tâche */}
        {todos.map((todo, index) => (
          <TaskItem todo={todo} index={index} deleteTask={deleteTask} toggleComplete={toggleComplete}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
