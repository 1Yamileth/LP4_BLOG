import React, { useState } from 'react';
import "./crearblog.css";
    

function CrearBlog() {
  //Estas variables almacenan los datos del blog que el usuario está creando.
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  //funciones para manejar los cambios en los inputs del formulario
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };
/*La constantes anteriores se llaman cuando el usuario cambia el valor de los inputs. Cada función toma el valor del input
 correspondiente y lo usa para actualizar la variable de estado correspondiente. */



 /*se llama cuando el usuario envía el formulario. Esta función se usa para enviar los datos del formulario a un servidor, pero por ahora
 se registrando los datos del formulario en la consola.*/
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Tags:', tags.split(',').map((tag) => tag.trim()));
  };

  return (
    <form className='crear-blog-form' onSubmit={handleSubmit}>
      <label>
        Titulo:
        <input
          type='text'
          value={title}
          onChange={handleTitleChange}
          minLength={5}
          maxLength={100}
          required
        />
      </label>
      <br />
      <label>
        Contenido:
        <textarea value={content} onChange={handleContentChange} required />
      </label>
      <br />
      <label>
        Tags:
        <input type='text' value={tags} onChange={handleTagsChange} />
      </label>
      <br />
      <input type='submit' value='Submit' />
    </form>
  );
}

export default CrearBlog;
