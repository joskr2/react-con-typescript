import React from "react";

// rfce + enter

function NuevaLista(props) {
  const { lista = [] } = props;
  return (
    <>
      {lista.map((itemLista) => (
        <p style={{ color: "white" }} key={`key${ itemLista.id}-${itemLista.title}`}>
          {itemLista.title}
        </p>
      ))}
    </>
  );
}

export default NuevaLista;
