import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import StatusFilter from './components/StatusFilter.jsx';

import { fetchTasks, fetchCategories, createTask, updateTask, deleteTask, toggleTaskStatus } from './API.js';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: '', status: '' });
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const data = await fetchTasks(filters);
      setTasks(data);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  const loadCategories = async () => {
    try {
      const cats = await fetchCategories();
      setCategories(cats);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadTasks();
  }, [filters]);

  const handleSave = async (taskData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, taskData);
        setEditingTask(null);
      } else {
        await createTask(taskData);
      }
      loadTasks();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (taskId) => {
    if (!window.confirm('¿Seguro que querés eliminar esta tarea?')) return;
    try {
      await deleteTask(taskId);
      loadTasks();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleToggleStatus = async (taskId, completed) => {
    try {
      await toggleTaskStatus(taskId, completed);
      loadTasks();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <div>
        <CategoryFilter selected={filters.category} categories={categories} onChange={category => setFilters(f => ({ ...f, category }))} />
        <StatusFilter selected={filters.status} onChange={status => setFilters(f => ({ ...f, status }))} />
      </div>

      {editingTask ? (
        <TaskForm
          task={editingTask}
          categories={categories}
          onSave={handleSave}
          onCancel={() => setEditingTask(null)}
        />
      ) : (
        <button onClick={() => setEditingTask({})}>Crear nueva tarea</button>
      )}

      {loading ? <p>Cargando...</p> : (
        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={handleDelete}
          onToggle={handleToggleStatus}
        />
      )}
    </div>
  );
}
