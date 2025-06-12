import "./styles.css"

import { useState, type FormEvent, type ChangeEvent } from "react";

// un enum es una forma de definir un conjunto de constantes con nombre
// que pueden ser utilizadas en el código para representar valores específicos.
// En este caso, se define un enum llamado TipoConsulta que tiene cuatro valores posibles:


export const TipoConsulta = {
  GENERAL: "General",
  SOPORTE: "Soporte",
  VENTAS: "Ventas",
  RECLAMO: "Reclamo",
} as const;

type TipoConsulta = typeof TipoConsulta[keyof typeof TipoConsulta];

interface DatosFormulario {
  nombre: string;
  email: string;
  telefono: string;
  consulta: TipoConsulta;
  mensaje: string;
  recibirPublicidad: boolean;
}

interface ErroresValidacion {
  nombre?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
}

export const FormularioContacto = () => {
  const datosIniciales: DatosFormulario = {
    nombre: "",
    email: "",
    telefono: "",
    consulta: TipoConsulta.GENERAL,
    mensaje: "",
    recibirPublicidad: false,
  };
  const [datos, setDatos] = useState<DatosFormulario>(datosIniciales);

  const [errores, setErrores] = useState<ErroresValidacion>({});
  const [enviado, setEnviado] = useState<boolean>(false);
  const [cargando, setCargando] = useState<boolean>(false);

  const manejarCambioTexto = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setDatos({
      ...datos,
      [name]: value,
    });

    if (errores[name as keyof ErroresValidacion]) {
      setErrores({
        ...errores,
        [name]: undefined,
      });
    }
  };

  const manejarCambioSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setDatos({
      ...datos,
      [name]: value as TipoConsulta,
    });

    if (errores[name as keyof ErroresValidacion]) {
      setErrores({
        ...errores,
        [name]: undefined,
      });
    }
  };

  const manejarCambioCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setDatos({
      ...datos,
      [name]: checked,
    });

    if (errores[name as keyof ErroresValidacion]) {
      setErrores({
        ...errores,
        [name]: undefined,
      });
    }
  };

  const validarFormulario = (): ErroresValidacion => {
    const errores: ErroresValidacion = {};

    if (!datos.nombre.trim()) {
      errores.nombre = "El nombre es obligatorio";
    }

    if (!datos.email.trim()) {
      errores.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(datos.email)) {
      errores.email = "El email no es válido";
    }

    if (!datos.telefono.trim()) {
      errores.telefono = "El teléfono es obligatorio";
    } else if (!/^\d+$/.test(datos.telefono)) {
      errores.telefono = "El teléfono debe contener solo números";
    }

    if (!datos.mensaje.trim()) {
      errores.mensaje = "El mensaje es obligatorio";
    }

    return errores;
  };

  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrores({});

    const erroresValidacion = validarFormulario();

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setCargando(true);

    setTimeout(() => {
      setCargando(false);
      setEnviado(true);
      setDatos(datosIniciales);
    }, 2000);
  };


  const obtenerTipoConsulta = (tipo: TipoConsulta) => {
    switch (tipo) {
      case TipoConsulta.GENERAL:
        return "Consulta General";
      case TipoConsulta.SOPORTE:
        return "Soporte Técnico";
      case TipoConsulta.VENTAS:
        return "Consulta de Ventas";
      case TipoConsulta.RECLAMO:
        return "Reclamo";
      default:
        return "Tipo de Consulta Desconocido";
    }
  }

  if (enviado) {
    return (
      <div className="mensaje-exito">
        <h2>¡Formulario enviado con éxito!</h2>
        <p>Gracias por contactarnos, {datos.nombre}.</p>
        <p>Tipo de consulta: {obtenerTipoConsulta(datos.consulta)}</p>
      </div>
    );
  }

  if (cargando) {
    return <div className="cargando">Enviando...</div>;
  }
  
  return (
    <form className="formulario-contacto" onSubmit={manejarEnvio}>
      <h2>Formulario de Contacto</h2>
      <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datos.nombre}
          onChange={manejarCambioTexto}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>

      <div className="campo">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={datos.email}
          onChange={manejarCambioTexto}
        />
        {errores.email && <span className="error">{errores.email}</span>}
      </div>

      <div className="campo">
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={datos.telefono}
          onChange={manejarCambioTexto}
        />
        {errores.telefono && <span className="error">{errores.telefono}</span>}
      </div>

      <div className="campo">
        <label htmlFor="consulta">Tipo de Consulta:</label>
        <select
          id="consulta"
          name="consulta"
          value={datos.consulta}
          onChange={manejarCambioSelect}
        >
          {Object.values(TipoConsulta).map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={datos.mensaje}
          onChange={manejarCambioTexto}
        />
        {errores.mensaje && (
          <span className="error">{errores.mensaje}</span>
        )}
      </div>

      <div className="campo">
        <label>
          <input
            type="checkbox"
            name="recibirPublicidad"
            checked={datos.recibirPublicidad}
            onChange={manejarCambioCheckbox}
          />
          Recibir publicidad y novedades
        </label>
      </div>
      <button type="submit" className="boton-enviar">
        Enviar Consulta
      </button>
    </form>
  )
};
