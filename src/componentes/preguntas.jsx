import React, { useState, useEffect } from "react";

const Pregunta = ({ preguntaId, sumarPuntaje }) => {
  const preguntas = {
    1: {
      pregunta: "¿Cuál es el color del cielo?",
      opciones: ["Rojo", "Azul", "Verde"],
      correcta: "Azul",
    },
    2: {
      pregunta: "¿Cuánto es 2 + 2?",
      opciones: ["3", "4", "5"],
      correcta: "4",
    },
    3: {
      pregunta: "¿Cuál es el animal más rápido?",
      opciones: ["Tortuga", "Chita", "Perro"],
      correcta: "Chita",
    },
  };

  const [seleccion, setSeleccion] = useState(null);
  const [mensaje, setMensaje] = useState("");

  if (!preguntas[preguntaId]) {
    return <h2>Pregunta no encontrada</h2>;
  }

  const { pregunta, opciones, correcta } = preguntas[preguntaId];

  const validarRespuesta = (respuesta) => {
    setSeleccion(respuesta);
    if (respuesta === correcta) {
      setMensaje("¡Correcto!");
      sumarPuntaje();
    } else {
      setMensaje("Respuesta incorrecta");
    }
  };

  return (
    <div className="pregunta">
      <h4 style={{ color: "white" }}>{pregunta}</h4>
      {opciones.map((opcion, index) => (
        <button
          className="opcion"
          key={index}
          onClick={() => validarRespuesta(opcion)}
          disabled={seleccion !== null} // Evita múltiples selecciones
          style={{
            background: seleccion === opcion ? (opcion === correcta ? "lightgreen" : "#faefc0") : "",
          }}
        >
          {opcion}
        </button>
      ))}
      <p>{mensaje}</p>
    </div>
  );
};

export default Pregunta;
