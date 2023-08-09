/*El siguiente código servirá como componente de creación para nuestros registros. 
Con este componente, los usuarios pueden crear un nuevo registro. Este componente enviará un 
comando create a nuestro servidor.

El componente define un formulario con campos para ingresar el nombre, la posición y el nivel del nuevo registro. 
Cuando el usuario envía el formulario, el componente envía una solicitud POST a la ruta /record del servidor para agregar
el nuevo registro a la base de datos*/
import React, { useState } from "react";
import { useNavigate } from "react-router";
import './crearblog.css';

export default function Create() {
  const [form, setForm] = useState({
    titulo: "",
    contenido: "",
    categoria: "",
    fechaCreacion: "",
    fechaActualizacion: ""
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    //CONDICION PARA EL USUARIO
    if (form.titulo.length < 5 || form.titulo.length > 100) {
      alert('EL TITULO DEBE DE CONTENER MAS DE 5 Y MENOS DE 100 CARACTERES');
      return;
    }
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newBlog = { ...form };

    await fetch("http://localhost:5050/Blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ titulo: "", contenido: "", categoria: "", fechaCreacion: "", fechaActualizacion: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Share Your Story</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Title</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={form.titulo}
            onChange={(e) => updateForm({ titulo: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contenido">Your Story</label>
          <textarea
            className="form-control"
            id="contenido"
            value={form.contenido}
            onChange={(e) => updateForm({ contenido: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Category</label>
          <input
            type="text"
            className="form-control"
            id="categoria"
            value={form.categoria}
            onChange={(e) => updateForm({ categoria: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaCreacion">Creation Date</label>
          <input
            type="date"
            className="form-control"
            id="fechaCreacion"
            value={form.fechaCreacion}
            onChange={(e) => updateForm({ fechaCreacion: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaActualizacion">Update Date</label>
          <input
            type="date"
            className="form-control"
            id="fechaActualizacion"
            value={form.fechaActualizacion}
            onChange={(e) => updateForm({ fechaActualizacion: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Share" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
