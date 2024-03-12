function CodeForController(componentName, ambientName, level) {
    
    let lowerComponentName = componentName.toLowerCase();
    let greatTextComponentName = lowerComponentName.charAt(0).toUpperCase() + lowerComponentName.slice(1);
    let defaultCode;

    switch (level) {
        case 1:
            defaultCode = 
            `
// -- Llamar al modelo de la entidad a Usar
var ${greatTextComponentName} = require('../Models/${greatTextComponentName}Model')
            `;
            break;
        case 2:
            defaultCode =
            `
// -- Llamar al modelo de la entidad a Usar
var ${greatTextComponentName} = require('../../Models/${ambientName}/${greatTextComponentName}Model')
            `;
            break;
        case 3:
            defaultCode =
            `
// -- Llamar al modelo de la entidad a Usar
var ${greatTextComponentName} = require('../Models/${greatTextComponentName}Model')
            `;
            break;
        default:
            defaultCode = `CONTROLLER PARA ${greatTextComponentName}`
            break;
    }

    defaultCode +=
        `
// -- CREACIÓN DE FUNCIONES --
/** Por lo general usaremos la siguiene estructura para nuestras Funciones
 ** Siguiento esto, evitaremos que nuestro backend colapse. 
*
*# const [nombre_función] = async function (req, res){
*#     if(req.user){   //$ req.user servirá para saber si la persona que quiere realizar
*#                         esta acción tiene un token, osea, es alguien deseado.
*#         try{
*#         //* Aquí irá toda la lógica de la función
*#         }catch (error) {
*#         //* Mensaje de error
*#         }
*#     }   
*# }
*#
*/

// -- Creamos la 1ra función del típico CRUD, C => CREATE

//* CREA un nuevo registro, no aceptando duplicados.
const CreateNew${greatTextComponentName} = async function (req, res) {

    //$ Verificará si se ingresó con una Authentication Válida.
    if (req.user) { 
        
        try {

            //$ Se almacena toda la información recibida por parte del front-end en una variable.
            let data = req.body;    

            //$ Se buscará en la Base de Datos si ya existe esta entidad.
            var checkNew${greatTextComponentName}byName = await ${greatTextComponentName}.find({${greatTextComponentName}: data.${greatTextComponentName}});    

            //$ Si la entidad ya existe, se devuelve un mensaje indicando que ya fue creada.
            if (checkNew${greatTextComponentName}byName.length > 0) {    

                res.status(200).send({ data: undefined, message: 'Este ${greatTextComponentName} ya fue creado.' });

            } else {

                //$ Si la entidad no existe, se crea una nueva instancia de ${greatTextComponentName} en la Base de Datos.

                let New${greatTextComponentName} = await ${greatTextComponentName}.create(data);

                res.status(200).send({ data: New${greatTextComponentName}, message: 'Nuevo ${greatTextComponentName} creado con éxito.' });
                
            }

        } catch (error) {

            //$ Si ocurre algún error durante el proceso, se envía un mensaje de error.
            res.status(500).send({ data: undefined, message: error });
        }
    } else {

        //$ Si el token del usuario ha caducado, se devuelve un mensaje indicando que el token ha caducado.
        res.status(500).send({ data: undefined, message: "Token del Usuario caducado." });
    }
}

// -- Creamos la 2da función del típico CRUD, R => READ / VIEWS

//* SELECCIONAR todos los registros, con los datos en su totalidad.
const SelectAll${greatTextComponentName} = async function (req, res) {

    //$ Verificará si se ingresó con una Authentication Válida.
    if (req.user) { 

        try {

            //$ Se obtienen todos los registros de ${greatTextComponentName} de la Base de Datos.
            let ${greatTextComponentName}s = await ${greatTextComponentName}.find();

            res.status(200).send({ data: ${greatTextComponentName}s });

        } catch (error) {

            //$ Si ocurre algún error durante el proceso, se envía un mensaje de error.
            res.status(500).send({ data: undefined, message: error });

        }

    } else {

        //$ Si el token del usuario ha caducado, se devuelve un mensaje indicando que el token ha caducado.
        res.status(500).send({ data: undefined, message: "Token del Usuario caducado." });

    }

}

//* OBTIENE todos los registros, pero solo ciertos datos puntuales.
const GetAll${greatTextComponentName}s = async function (req, res) {

    //$ Verificará si se ingresó con una Authentication Válida.
    if (req.user) { 

        try {

            //$ Se obtienen todos los registros de ${greatTextComponentName} de la Base de Datos seleccionando solo el _id y ${greatTextComponentName}.
            let All${greatTextComponentName}s = await ${greatTextComponentName}.find().select('_id ${greatTextComponentName}');

            res.status(200).send({ data: All${greatTextComponentName}s });

        } catch (error) {

            //$ Si ocurre algún error durante el proceso, se envía un mensaje de error.
            res.status(500).send({ data: undefined, message: error });

        }

    } else {

        //$ Si el token del usuario ha caducado, se devuelve un mensaje indicando que el token ha caducado.
        res.status(500).send({ data: undefined, message: "Token del Usuario caducado." });

    }
}

//* OBTIENE un solo registro, con todos sus datos en particular.
const Get${greatTextComponentName}Data = async function (req, res) {

    //$ Verificará si se ingresó con una Authentication Válida.
    if (req.user) { 

        try {
            
            //$ Se almacena en una variable el id, pasado a través de los params desde el service.
            let id = req.query._id;
        
            //$ Se busca la entidad con el id proporcionado en la Base de Datos.
            let data${greatTextComponentName} = await ${greatTextComponentName}.findById({ _id: id });

            res.status(200).send({ data: data${greatTextComponentName} });

        } catch (error) {

            //$ Si la entidad no se encuentra, se devuelve un mensaje indicando que no fue encontrada.
            res.status(200).send({ data: undefined, message: "${greatTextComponentName} no encontrado" });

        }

    } else {

        //$ Si el token del usuario ha caducado, se devuelve un mensaje indicando que el token ha caducado.
        res.status(500).send({ data: undefined, message: "Token del Usuario caducado." });

    }
}

// -- Creamos la 3ra función del típico CRUD, U => UPDATE

//* ACTUALIZA los datos de un registro en particular.
const Update${greatTextComponentName} = async function (req, res) {

    //$ Verificará si se ingresó con una Authentication Válida.
    if (req.user) { 

        try {

            //$ Se almacena en una variable el id, pasado a través de los params desde el service.
            let id = req.query._id;

            //$ Se almacena toda la información recibida por parte del front-end en una variable.
            let data = req.body;

            //$ Se actualizan los datos de la entidad con el id proporcionado en la Base de Datos.
            let ${greatTextComponentName}Update = await ${greatTextComponentName}.findByIdAndUpdate({ _id: id }, {
                ${greatTextComponentName}: data.${greatTextComponentName},
            });

            res.status(200).send({ data: ${greatTextComponentName}Update, message: "Datos del ${greatTextComponentName} Actualizados" });

        } catch (error) {

            //$ Si ocurre algún error durante el proceso, se envía un mensaje de error.
            res.status(500).send({ data: undefined, message: error });

        }

    } else {

        //$ Si el token del usuario ha caducado, se devuelve un mensaje indicando que el token ha caducado.
        res.status(500).send({ data: undefined, message: "Token del Usuario caducado." });

    }
}

// -- Creamos la 4ta función del típico CRUD, D => DELETE

//* Elimina el registro de la Base de Datos.
const Delete${greatTextComponentName} = async function (req, res) {

    //$ Verificará si se ingresó con una Authentication Válida.
    if (req.user) { 

        try {
            
            //$ Se almacena en una variable el id, pasado a través de los params desde el service.
            let id = req.query._id;

            //$ Se elimina la entidad con el id proporcionado de la Base de Datos.
            await ${greatTextComponentName}.findByIdAndRemove({ _id: id });

            res.status(200).send({ data: true, message: "${greatTextComponentName} Eliminado" });

        } catch (error) {

            //$ Si ocurre algún error durante el proceso, se envía un mensaje de error.
            res.status(500).send({ data: undefined, message: error });

        }

    } else {

        //$ Si el token del usuario ha caducado, se devuelve un mensaje indicando que el token ha caducado.
        res.status(500).send({ data: undefined, message: "Token del Usuario caducado." });

    }
}

// -- Exportamos todas nuestras funciones ya creadas, para poder usarlas en las Routes
module.exports = {
    CreateNew${greatTextComponentName},
    Get${greatTextComponentName}Data,
    Update${greatTextComponentName},
    Delete${greatTextComponentName},
    SelectAll${greatTextComponentName},
    GetAll${greatTextComponentName}s,
};
    `
    return defaultCode;
}

module.exports = {
    CodeForController
}