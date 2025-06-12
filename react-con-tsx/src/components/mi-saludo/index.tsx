import { Button } from "../button";

const MiSaludo = () => {
  return (
    <div>
      <h1>¡Hola, mundo!</h1>
      <p>Este es un componente de saludo.</p>
      <Button
        type="reset"
        onClick={() => alert("¡Hola!")}
        className="mi-saludo-button"
        disabled={false}
      >
        Saludar
      </Button>
    </div>
  );
};

export default MiSaludo;
