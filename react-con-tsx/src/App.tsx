import MiSaludo from "./components/mi-saludo";

export const App = () => {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <p>Bienvenido a mi aplicación de ejemplo.</p>
      <p>
        Esta aplicación muestra cómo crear y usar componentes en React con
        TypeScript.
      </p>
      <p>
        En este ejemplo, hemos creado un componente de saludo y un botón
        personalizado.
      </p>
      {/* Aquí puedes agregar otros componentes o contenido que desees mostrar en tu aplicación */}
      <MiSaludo />
    </div>
  );
};
