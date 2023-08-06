//IMPORTANDO MODULOS
import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";


/*Define el puerto en el que se ejecutará el servidor, ya sea el valor de la variable de 
entorno PORT o el valor predeterminado 5050. */
const PORT = process.env.PORT || 5050;
const app = express();//Crea una instancia de la aplicación Express y la almacena en la variable app.


/*Usa el middleware cors para habilitar el intercambio de recursos de origen cruzado (CORS) */
app.use(cors());
/*Usa el middleware express.json para analizar las solicitudes entrantes con cargas útiles JSON. */
app.use(express.json());

/*Usa el enrutador records para manejar las solicitudes a la ruta /record. */
app.use("/record", records);

/*Inicia el servidor Express en el puerto especificado y registra un mensaje en la consola
 indicando que el servidor está en ejecución */
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
});


/*
EXPLICACION DE LA GUIA
Aquí, estamos importando express y cors para ser utilizados. const port process.env.port accederá a
 la variable port desde el archivo config.env que necesitamos.
 
 EXPLICACION DE BING
 este código crea un servidor de Express.js que escucha en un puerto específico y 
 maneja las solicitudes a la ruta /record utilizando el enrutador records.*/