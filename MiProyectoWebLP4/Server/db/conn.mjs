import { MongoClient } from "mongodb";

/*Define la cadena de conexión a la base de datos utilizando el valor de la variable de entorno ATLAS_URI 
o una cadena vacía como valor predeterminado. */
const connectionString = process.env.ATLAS_URI || "mongodb+srv://MarilynMejia:u9d1jOI6qOJnaTqQ@lp4.hxb91yc.mongodb.net/?retryWrites=true&w=majority";

//Crea una instancia del cliente de MongoDB utilizando la cadena de conexión.
const client = new MongoClient(connectionString);

/*Intenta conectarse a la base de datos utilizando el método connect del cliente de MongoDB y maneja cualquier error que pueda ocurrir. */
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

//Obtiene una referencia a la base de datos sample_training utilizando el método db del objeto de conexión.
let db = conn.db("sample_training");

//Exporta la referencia a la base de datos para que pueda ser utilizada en otras partes del código.
export default db;