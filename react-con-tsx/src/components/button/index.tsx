// 1. Agrego estilos a mi componente Button
import "./styles.css";

// 2. Defino las propiedades que recibirá el componente Button

// interface es una forma de definir la estructura de un objeto en TypeScript

// interface ButtonProps significa Propiedades del botón
interface ButtonProps {
  // children: React.ReactNode; // Contenido del botón, puede ser texto o elementos JSX
  // ? Indica que esta propiedad es opcional, es decir, no es necesario pasarla al componente
  children?: React.ReactNode;
  // onClick: () => void; // Función que se ejecuta al hacer clic en el botón
  onClick?: () => void;
  // className?: string; // Clase CSS adicional para personalizar el estilo del botón
  className?: string;
  // disabled?: boolean; // Indica si el botón está deshabilitado
  disabled?: boolean;
  // type?: "button" | "submit" | "reset"; // Tipo de botón, por defecto es "button"
  type?: "button" | "submit" | "reset";
}

// 3. Defino el componente Button
// props:ButtonProps es un objeto que contiene las propiedades definidas en ButtonProps

// export const Button es la forma de exportar el componente para que pueda ser utilizado en otros archivos
export const Button = (props: ButtonProps) => {
  // Desestructuro las propiedades del objeto props
  // Esto me permite acceder a las propiedades directamente sin usar props.children, props.onClick, etc.
  const { children, onClick, className, disabled, type = "button" } = props;

  // 4. Retorno el JSX del componente Button
  // JSX es una sintaxis que permite escribir HTML dentro de JavaScript
  // En este caso, retorno un botón con las propiedades y estilos definidos
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
      type={type}
    >
      {/* children es el contenido del botón, puede ser texto o elementos JSX */}
      {children}
    </button>
  );
};
