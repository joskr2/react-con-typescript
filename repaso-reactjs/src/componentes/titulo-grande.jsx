import "./titulo-grande.css";

export function TituloGrande(props) {
  const { titulo, cantidadDeSaludos } = props;
  return (
    <div>
      <h3>Mi titulo super grande es : {titulo}</h3>
      <p>{cantidadDeSaludos}</p>
    </div>
  );
}
