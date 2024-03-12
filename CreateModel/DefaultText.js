function CodeForModel(componentName) {
    
    let lowerComponentName = componentName.toLowerCase();
    let greatTextComponentName = lowerComponentName.charAt(0).toUpperCase() + lowerComponentName.slice(1);

    const defaultCode = 
    `
// -- Llamar a las libs que se deberán de usar
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// -- Crear el Schema del Modelo de la Entidad.
/** Se deberá de usar la siguiente estructura para la creación de Schemas de Modelo
 *#
*# var [Entidad]Schema = Schema({
*#  [atributo1]: { type:[tipo de dato], require: [true/false] },   
*#  [atributo2]: { type:[tipo de dato], require: [true/false] },   
*#  [atributo3]: { type:[tipo de dato], require: [true/false] },
*#  [atributo4]: { type:[tipo de dato], require: [true/false] },
*#  [atributo5]: { type:[tipo de dato], require: [true/false] },
*#  createdAT: { type:Date, default: Date.now ,require: true },    //$ En algunos casos se deberá de colocar un valor "default".
*# });
*#
*/   
var ${componentName}Schema = Schema({
    ${greatTextComponentName}: {type:String, require: true},
    createdAT: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model('${lowerComponentName}', ${componentName}Schema);
    `
    return defaultCode;
}

module.exports = {
    CodeForModel
}