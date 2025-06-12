import { Button } from "../button";
import "./styles.css";

// 1. useState es un hook de React que permite manejar el estado en componentes funcionales
// el estado es una forma de almacenar información que puede cambiar a lo largo del tiempo
import { useState } from "react";

// 2. crear la interfaz ContadorConfig que define la estructura de la configuración del contador
interface ContadorConfig {
  valorInicial: number; // Valor inicial del contador, es opcional
  paso: number; // El valor que se incrementa o decrementa en cada acción
  valorMinimo: number; // El valor mínimo que puede alcanzar el contador
  valorMaximo: number; // El valor máximo que puede alcanzar el contador
}

// 3. crear la interfaz ContadorProps que define las propiedades del componente Contador
interface ContadorProps {
  config: ContadorConfig; // Configuración del contador
  titulo: string; // Título del contador
}

// 3. crear el componente Contador que recibe las propiedades definidas en ContadorProps
export function Contador(props: ContadorProps) {
  // 4. Desestructurar las propiedades del componente
  const { config, titulo } = props;
  const { valorInicial, paso, valorMaximo, valorMinimo } = config;

  // 5. Usar useState para crear el estado del contador, inicializándolo con valorInicial
  // useState es un hook que permite manejar el estado en componentes funcionales
  // el primer valor es el estado actual y el segundo es una función para actualizarlo
  // en este caso, contador es el estado actual y setContador es la función para actualizarlo
  // valorInicial es el valor con el que se inicializa el contador
  const [contador, setContador] = useState(valorInicial);

  // 6. historial de cambios del contador
  // se inicializa con un array que contiene el valor inicial del contador
  // esto permite llevar un registro de los valores que ha tenido el contador
  // se usa un array de números para almacenar los valores del contador en cada cambio
  // <number[]> indica que es un array de números
  const [historial, setHistorial] = useState<number[] | null>(null);

  // 7. Función para incrementar el contador
  const incrementar = () => {
    // nuevoValor es una variable que almacena el nuevo valor del contador
    // se calcula sumando el paso al contador actual
    const nuevoValor = contador + paso; // Calcula el nuevo valor del contador

    // se verifica si el nuevo valor no supera el valor máximo
    // si el nuevo valor es menor o igual al valor máximo, se actualiza el contador
    if (nuevoValor <= valorMaximo) {
      setContador(nuevoValor); // Actualiza el contador si no supera el máximo// setHistorial([...historial, nuevoValor]); // Agrega el nuevo valor al historial
      // se usa el operador spread (...) para crear un nuevo array que contiene todos los valores del historial
      // el spread operator(...) permite crear una copia del array actual y agregarle el nuevo valor
      setHistorial((prevHistorial) => [
        ...(prevHistorial ?? []),
        nuevoValor,
      ]); // Agrega el nuevo valor al historial
    } else {
      console.warn("El valor máximo ha sido alcanzado"); // Muestra un mensaje de advertencia si se supera el máximo
    }
  };

  // 8. Función para decrementar el contador
  const decrementar = () => {
    // nuevoValor es una variable que almacena el nuevo valor del contador
    // se calcula restando el paso al contador actual
    const nuevoValor = contador - paso; // Calcula el nuevo valor del contador

    // se verifica si el nuevo valor no es menor que el valor mínimo
    // si el nuevo valor es mayor o igual al valor mínimo, se actualiza el contador
    if (nuevoValor >= valorMinimo) {
      setContador(nuevoValor); // Actualiza el contador si no es menor que el mínimo
      setHistorial((prevHistorial) => [
        ...(prevHistorial ?? []),
        nuevoValor,
      ]); // Agrega el nuevo valor al historial
    } else {
      console.warn("El valor mínimo ha sido alcanzado"); // Muestra un mensaje de advertencia si se supera el mínimo
    }
  };

  const resetear = () => {
    setContador(valorInicial); // Resetea el contador al valor inicial
    setHistorial(null); // Resetea el historial al valor inicial
  };

  const obtenerColor = () => {
    if (contador < valorMinimo) {
      return "color-minimo"; // Si el contador es menor que el mínimo, retorna rojo
    }
    if (contador > valorMaximo) {
      return "color-maximo"; // Si el contador es mayor que el máximo, retorna azul
    }
    return "color-default"; // Si está dentro del rango, retorna verde
  };

  return (
    <div className="counter-container">
      <h2>{titulo}</h2>
      <p className={obtenerColor()}>Valor actual: {contador}</p>
      <div className="counter-buttons">
        <Button
          onClick={incrementar}
          disabled={contador >= valorMaximo}
          className="boton-maximo"
        >
          Incrementar
        </Button>
        <Button
          onClick={decrementar}
          disabled={contador <= valorMinimo}
          className="boton-minimo"
        >
          Decrementar
        </Button>
        <Button onClick={resetear} className="boton-default">
          Resetear
        </Button>
      </div>

      <div className="counter-config">
        <h3>Configuración:</h3>
        <ul>
          <li>Valor inicial: {valorInicial}</li>
          <li>Valor mínimo: {valorMinimo}</li>
          <li>Valor máximo: {valorMaximo}</li>
          <li>Paso: {paso}</li>
        </ul>
        <h3>Historial de cambios:</h3>
        <ul className="historial-lista">
          {historial?.map((valor, index) => (
            <li key={`${index + valor}`}>Elemento#{valor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
