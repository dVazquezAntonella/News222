import React, { useState } from 'react';
import ReactWhatsapp from '../components/lib';

const WApp = () => {
  const [message, setMessage] = useState('');
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <div className="cabeza"><p>WhatsApp</p></div>
      <div className="contenedor">
        <div className="Whats">
        <section className="library">

            <h2>¿Cual es tu nombre?</h2>
          <input
            id="nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
          <h2>Mensaje</h2>
          <div className="form">
          <input
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          </div>
          <br/>
          <ReactWhatsapp number="526183220498" message={"NOMBRE: " + nombre + "        " + "MENSAJE: " + message}>
            Enviar
          </ReactWhatsapp>
        </section>
        </div>
      </div>
    </div>
  );
};

export default WApp;
