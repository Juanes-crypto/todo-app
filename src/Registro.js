import React, { useState } from 'react';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email) {
      setMensaje('Por favor completa todos los campos.');
      return;
    }
    setMensaje('¡Registro simulado exitoso!');
    setNombre('');
    setEmail('');
  };

  return (
    <div>
      <h2>Registro de usuario (ejemplo)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Registro;