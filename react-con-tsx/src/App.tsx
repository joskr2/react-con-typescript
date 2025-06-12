import { Contador } from "./components/contador";
import "./App.css";

export const App = () => {
  const config1 = {
    valorInicial: 0,
    valorMinimo: -10,
    valorMaximo: 10,
    paso: 1,
  };

  const config2 = {
    valorInicial: 3,
    valorMinimo: -6,
    valorMaximo: 21,
    paso: 3,
  };
  return (
    <div className="app-container">
      <h1>Mi Aplicación</h1>
      <p>Bienvenido a mi aplicación de ejemplo.</p>
      <div className="counters-container">
        <Contador config={config1} titulo={"Contador Principal"} />
        <Contador config={config2} titulo={"Contador Secundario"} />
      </div>
    </div>
  );
};
