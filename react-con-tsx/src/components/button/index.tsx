
// 1. Agrego estilos a mi componente Button
import "./styles.css";

// 2. Defino las propiedades que recibirá el componente Button
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = (props: ButtonProps) => {
  const { children, onClick, className, disabled, type = "button" } = props;

  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
