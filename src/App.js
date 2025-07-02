import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navegación simple */}
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/todos">Mis Todos</Link>
          <Link to="/add">Agregar Todo</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/add" element={<AddTodo />} />
          {/* Ruta 404 */}
          <Route path="*" element={<main><p>¡No hay nada aquí!</p></main>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
