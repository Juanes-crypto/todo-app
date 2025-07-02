import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setMensaje('El título es obligatorio');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false })
      });
      if (response.ok) {
        setMensaje('Todo creado correctamente');
        setTitle('');
        setTimeout(() => navigate('/todos'), 1000);
      } else {
        setMensaje('Error al crear el todo');
      }
    } catch (error) {
      setMensaje('Error de red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>Agregar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default AddTodo;