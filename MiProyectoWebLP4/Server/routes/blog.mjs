import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// TRAE UNA LISTA DE LOS BLOGS
router.get("/", async (req, res) => {
  let Blog = await db.collection("Blog");
  let results = await Blog.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let Blog = await db.collection("Blog");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await Blog.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// CREA UN NUEVO BLOG
router.post("/", async (req, res) => {
  let newDocument = {
    titulo: req.body.titulo,
    contenido: req.body.contenido,
    categoria: req.body.categoria,
    fechaCreacion: req.body.fechaCreacion,
    fechaActualizacion: req.body.fechaActualizacion
  };
  let Blog = await db.collection("Blog");
  let result = await Blog.insertOne(newDocument);
  res.send(result).status(204);
});

// ACTUALIZA UN BLOG
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
      titulo: req.body.titulo,
      contenido: req.body.contenido,
      categoria: req.body.categoria,
      fechaCreacion: req.body.fechaCreacion,
      fechaActualizacion: req.body.fechaActualizacion
    }
  };

  let Blog = await db.collection("Blog");
  let result = await Blog.updateOne(query, updates);

  res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const Blog = db.collection("Blog");
  let result = await Blog.deleteOne(query);

  //Envía el resultado de la operación de eliminación como respuesta a la solicitud y establece el código de estado HTTP en 200.
  res.send(result).status(200);
});

export default router;