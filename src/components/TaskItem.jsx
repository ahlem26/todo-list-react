import React from 'react'

export default function TaskItem({todo,index,deleteTask,toggleComplete}) {
    return (
        <li
            key={index}
            className="flex items-center justify-between bg-white p-4 mb-2 shadow-sm rounded-md"
        >
            {/* Texte de la tâche (clickable pour toggle completed) */}
            <span
                onClick={() => toggleComplete(index)}
                className={`cursor-pointer flex-1 ${todo.completed ? "line-through text-gray-500" : "text-gray-800"
                    }`}
            >
                {todo.text}
            </span>
            {/* Bouton de suppression */}
            <button
                onClick={() => deleteTask(index)}
                className="ml-4 text-red-500 hover:text-red-700"
            >
                Supprimer
            </button>
        </li>
    )
}
