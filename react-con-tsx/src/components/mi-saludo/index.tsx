import { Button } from "../button";

const MiSaludo = () => {
  return (
    <div>
      <h1>¡Hola, mundo!</h1>
      <p>Este es un componente de saludo.</p>
      {/* Aquí usamos el componente Button que creamos en Button/index.tsx */}
      {/* type="reset" indica que el botón es de tipo reset, lo que significa que al hacer clic, se reiniciarán los campos del formulario */}
      {/* onClick es una función que se ejecuta al hacer clic en el botón */}
      {/* className es una clase CSS adicional para personalizar el estilo del botón */}
      {/* disabled indica si el botón está deshabilitado o no */}
      {/* asi usamos al componente Button, que creamos en Button>index.tsx  */}
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



// 1 mini ejercicio: Nuevo componente
// Crea un nuevo componente llamado MiComponente que muestre un mensaje personalizado y un botón que al hacer clic muestre una alerta con el mensaje "¡Hola desde MiComponente!".

