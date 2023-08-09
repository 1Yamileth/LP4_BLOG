/*El siguiente código servirá como componente de visualización para nuestros registros.
 Obtendrá todos los registros en nuestra base de datos a través de un método GET.
 
 
El componente recupera los registros de la base de datos utilizando una solicitud GET a la ruta /record del servidor y
muestra cada registro en una fila de la tabla. Cada fila tiene botones para editar y eliminar el registro correspondiente. 
Cuando el usuario hace clic en el botón “Eliminar”, el componente envía una solicitud DELETE a la ruta /record/:id del servidor
para eliminar el registro de la base de datos. */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './blogList.css';


const Blog = (props) => (
  <tr>
    <td>{props.blog.titulo}</td>
    <td>{props.blog.contenido}</td>
    <td>{props.blog.categoria}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.blog._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteBlog(props.blog._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  // This method fetches the blogs from the database.
  useEffect(() => {
    async function getBlogs() {
      const response = await fetch(`http://localhost:5050/Blog/`);

      if (!response.ok) {
        const message = `SE HA PRODUCIDO UN ERROR: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const blogs = await response.json();
      setBlogs(blogs);
    }

    getBlogs();

    return;
  }, [blogs.length]);

  // This method will delete a blog
  async function deleteBlog(id) {
    await fetch(`http://localhost:5050/Blog/${id}`, {
      method: "DELETE"
    });

    const newBlogs = blogs.filter((el) => el._id !== id);
    setBlogs(newBlogs);
  }

  // This method will map out the blogs on the table
  function blogList() {
    return blogs.map((blog) => {
      return (
        
        <Blog
          blog={blog}
          deleteBlog={() => deleteBlog(blog._id)}
          key={blog._id}
        />
      );
    });
  }

  // This following section will display the table with the blogs.
  return (
    <div className="BlogList"> {/* Agrega la clase BlogList al elemento raíz LOS CORCHETES PARA QUE SE COMENTE*/}
      <h3>Blog List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{blogList()}</tbody>
      </table>
    </div>
  );
}
