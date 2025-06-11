import React from "react";
import { MiBoton } from "./componentes/mi-boton";
import { TituloGrande } from "./componentes/titulo-grande";
import { SuperAnchor } from "./componentes/super-anchor";
import NuevaLista from "./componentes/nueva-lista";
import ContenidoReactivo from "./componentes/contenido-reactivo";

const products = [
  { title: "Col", id: 1 },
  { title: "Ajo", id: 2 },
  { title: "Manzana", id: 3 },
];

const App = () => {
  return (
    <>

    <ContenidoReactivo/>

      <NuevaLista lista={products} />

      <SuperAnchor
        esVerde
        url="wwww.hola.coh"
        tamanho={32}
        contenido="Soy el contenido dinamico de mi elemento Super Anchor"
      />

      <SuperAnchor esVerde={false} tamanho={12} contenido="Hola mundo" />

      <MiBoton />

      <TituloGrande titulo="Hola chicos de codigo" />
      <TituloGrande cantidadDeSaludos={7} />
      <TituloGrande titulo="Esto es un saludo de amistad" />
      <TituloGrande
        titulo="Esto es un saludo de amistad"
        cantidadDeSaludos={4}
      />
    </>
  );
};

export default App;
