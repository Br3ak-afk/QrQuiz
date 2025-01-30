import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pregunta from "./componentes/preguntas.jsx"; 

// Componentes de navegación
const Home = () => <h1>Página de Inicio</h1>;

function App() {
  const [puntaje, setPuntaje] = useState(0);

  // Cargar puntaje guardado al iniciar
  useEffect(() => {
    const puntajeGuardado = localStorage.getItem("puntaje");
    if (puntajeGuardado) {
      setPuntaje(parseInt(puntajeGuardado, 10));
    }
  }, []);

  // Función para aumentar puntaje y guardarlo en memoria
  const sumarPuntaje = () => {
    const nuevoPuntaje = puntaje + 1;
    setPuntaje(nuevoPuntaje);
    localStorage.setItem("puntaje", nuevoPuntaje);
  };

  return (
    <Router>

      <h3>Puntaje: {puntaje}</h3>

      <Routes>
        <Route path="/" element={<Home />} />
        <HashRouter path="/pregunta-1" element={<Pregunta preguntaId={1} sumarPuntaje={sumarPuntaje} />} />
        <HashRouter path="/pregunta-2" element={<Pregunta preguntaId={2} sumarPuntaje={sumarPuntaje} />} />
        <HashRouter path="/pregunta-3" element={<Pregunta preguntaId={3} sumarPuntaje={sumarPuntaje} />} />
      </Routes>
    </Router>
  );
}

export default App;
