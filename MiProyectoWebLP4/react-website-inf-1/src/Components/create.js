/*El siguiente código servirá como componente de creación para nuestros registros. 
Con este componente, los usuarios pueden crear un nuevo registro. Este componente enviará un 
comando create a nuestro servidor.

El componente define un formulario con campos para ingresar el nombre, la posición y el nivel del nuevo registro. 
Cuando el usuario envía el formulario, el componente envía una solicitud POST a la ruta /record del servidor para agregar
el nuevo registro a la base de datos*/

import React, { useState } from "react";
import { useNavigate } from "react-router";
import './create.css';





export default function Create() {
  // This function will handle the submission.
async function onSubmit(e) {
  e.preventDefault();

  // When a post request is sent to the create url, we'll add a new record to the database.
  const newPerson = { ...form };//ERROR ACA

  await fetch("http://localhost:5050/record", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ name: "", position: "", level: "" });//ERROR ACA
  navigate("/");
}
const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
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
   if (form.title.length < 5 || form.title.length > 10) {
     alert('EL TITUTLO DEBE DE TENER ENTRE 5 Y 100 CARACTERES');
     return;
   }
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ title: "", content: "", tags: "" });
   navigate("/");
 }
 

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Share Your Story</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Your Story</label>
          <textarea
            className="form-control"
            id="content"
            value={form.content}
            onChange={(e) => updateForm({ content: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="media">Photos/Videos</label>
          <input
            type="text"
            className="form-control"
            id="media"
            value={form.media}
            onChange={(e) => updateForm({ media: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            value={form.tags}
            onChange={(e) => updateForm({ tags: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Share" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}