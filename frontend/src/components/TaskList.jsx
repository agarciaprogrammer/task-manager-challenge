import React from 'react';

export default function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  if (!tasks.length) return <p>No hay tareas para mostrar.</p>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <strong>{task.title}</strong> ({task.category?.name || 'Sin categoría'})
          <button onClick={() => onToggle(task.id, !task.completed)}>
            {task.completed ? 'Marcar Pendiente' : 'Marcar Completada'}
          </button>
          <button onClick={() => onEdit(task)}>Editar</button>
          <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}
