// todas los componentes tienen propiedades(parea info extra) , como los parametros

import "./super-anchor.css";

export function SuperAnchor(props) {
  // tengo dos propiedades donde voy a pasar info extra: tamanho y esVerde
  const { tamanho, esVerde, url, contenido } = props;

  return (
    <a
      className={esVerde ? "es-verde " : ""}
      style={{ fontSize: `${tamanho}px`, color: "white" }}
      href={url}
    >
      {contenido}
    </a>
  );
}
