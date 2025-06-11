import { useState, useEffect } from "react";

function ContenidoReactivo() {
  const [coincidencias, setCoincidencias] = useState(0);
  const [letra, setLetra] = useState("");
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (letra.length === 1) {
      let contador = 0;
      for (let l = 0; l < texto.length; l++) {
        if (letra === texto[l]) {
          contador = contador + 1;
        }
      }
      setCoincidencias(contador);
    } else {
      setCoincidencias(0);
    }
  }, [texto, letra]);

  return (
    <>
      <h2>
        La letra se encontró {coincidencias} veces en el texto: {texto}
      </h2>
      <input
        type="text"
        name="letra"
        id="letra"
        value={letra}
        maxLength={1}
        placeholder="Letra"
        onChange={(e) => setLetra(e.target.value)}
      />
      <input
        type="text"
        name="texto"
        id="texto"
        value={texto}
        placeholder="Texto"
        onChange={(e) => setTexto(e.target.value)}
      />
    </>
  );
}

export default ContenidoReactivo;
