function CodeForFirstLevel(componentName, ambientName , level, SectionName, AreaName) {
    
    let defaultCode = 
    `
const express = require("express");
const cors = require('cors');
const app = express();
var mongoose = require("mongoose");
const fs = require('fs');
const bodyParser = require("body-parser");

process.setMaxListeners(20);

// Configurar puerto
const PORT = 6842;

// -- Crear las CORS que deberá seguir el backend.
/** Instrucciones para la creación de las CORS
 ** La Estructura a seguir deberia de ser:
*# const corsOptions = {
*# 
*# origin: '*',                    -La configración de las CORS puede ser variada,
*# optionsSuccessStatus: 200,      -dependerá de lo que se requiera.
*# 
*# } 
*/ 

const corsOptions = {

    origin: '*',
    optionsSuccessStatus: 200,

};  

// -- Crear la conexión Base de Datos - backend.
/** Instrucciones para la conexión con la Base de Datos
 ** La Estructura a seguir deberia de ser:
*# async function startServer() {
*#     try {
*#         /Establecer conexión con la Base de Datos/

*#         console.log("Conexión con la Base de Datos Establecida")

*#     } catch(err) {
*#         console.log("Error al intentar conectar con la Base de Datos")
*#         console.log("| Error |:", err)
*#     }
*# } 
*/ 

async function startServer() {

    try {                                                                       //$ Inicio del Bloque Try.

        await mongoose.connect('mongodb://127.0.0.1:27017/_ERP_JEPKOM', {       //$ Inicio de la conexión con la Base de Datos MongoDB, Buscará la BD "_ERP_JEPKOM".

            useUnifiedTopology: true,                                           //$ Estas opciones se utilizan para mejorar la compatibilidad con las versiones
            useNewUrlParser: true                                               //$ anteriores de MongoDB y para aprovechar las nuevas características del servidor.

        });
        
        console.log("Conexión a la base de datos establecida");                 //$ Console.log que indicará que la conexión se efectuó sin problemas.
        
    } catch (err) {                                                             //$ Se ejecuta si algo salio mal en el Bloque Try.

        console.log("Error al intentar conectar con la Base de Datos")          //$ Console.log que indicará que la conexión tuvo problemas al conectarse. 
        console.log("| Error |:", err)                                          //$ Console.log que señalará el error en particular.

    }
}

// Llamas a la función para Iniciar la Conexión
startServer();

// -- La Aplicación pone en uso las CORS que configuramos anteriormente.
app.use(cors(corsOptions));

// -- La Aplicación se pone en arranque y empieza a escuchar las peticiones entrantes.
app.listen(PORT, () => {

    console.log('Servidor HTTPS corriendo en el puerto' + PORT);                //$ Console.log que indicará que el servidor se puso al corriente, y en que puerto.

});

// -- Configuración de las rutas que tendrá el Backend.
/** Instrucciones para la conexión con la Base de Datos
 ** Se deberán de seprar por Secciones de Rutas. 
*
*# // -- Variables Routeadas - [ROUTERS] / [ENTIDAD]Rounters
*# var [nombre]_routes = requiere('ruta/hacia/el/router1');
*# var [nombre]_routes = requiere('ruta/hacia/el/router2');
*# var [nombre]_routes = requiere('ruta/hacia/el/router3');
*
*/
    `
    switch (level) {
        case 1:
            defaultCode += 
            `
// -- Variables Routeadas - Routers - Entidad
var ${componentName}_routes = require('./Routers/${componentName}Routers');
            `;
            break;
        case 2:
            defaultCode +=
            `
// -- Variables Routeadas - Routers - Entidad
var ${componentName}_routes = require('./Routers/${ambientName}/${componentName}Routers');
            `;
            break;
        case 3:
            defaultCode +=
            `
// -- Variables Routeadas - Routers - Entidad
var ${componentName}_routes = require('./app/${SectionName}/${AreaName}/${componentName}/Routers/${componentName}Routers');
            `;
            break;
        default:
            defaultCode = `INDEX PARA ${greatTextComponentName}`
            break;
    }

    defaultCode += `

// -- Ueso y Aplicación del BodyParser para nuestro Backend
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

// -- Aplicación de Encabezados apra nuestro Backend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

// -- Añadir las rutas que Creamos previamente
/** Instrucciones para añadir las rutas que usará nuestro Backend
 ** La Estructura a seguir deberia de ser:
*# // -- ROUTERS - SECCIÓN - AREA
*#     app.use('/api', [variable ruta])
*# 
*/ 

// -- ROUTER - SECCIÓN 1 - AREA 1
app.use('/api', ${componentName}_routes);
    `
    return defaultCode;
}

module.exports = {
    CodeForFirstLevel
}