import React, { useState } from 'react';

export default function TaskForm({ task, categories, onSave, onCancel }) {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [categoryId, setCategoryId] = useState(task?.categoryId || '');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return alert('El título es obligatorio');
    onSave({ title, description, categoryId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Título" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Descripción (opcional)" 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
      />
      <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
        <option value="">Sin categoría</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}
