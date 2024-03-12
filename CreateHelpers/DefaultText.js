function CodeForHepler() {

    const defaultCode = 
    `
var jwt = require("jwt-simple");
var moment = require("moment");

//$ Clave secreta para el jwt
var secret = '####';

// -- Creación de la función para la creación del token
exports.createToken = function(user, rememberme) {
    
    var expirationPeriod = rememberme ? 180 : 1; 

    var payload = {
        sub: user._id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        email: user.email,
        rol: user.rol,
        iat: moment().unix(),
        exp: moment().add(expirationPeriod, 'days').unix(),
    };

    return jwt.encode(payload, secret); //$ Codifica el payload de los datos del usuario junto a la Clave secreta
};
    `
    return defaultCode;
}

module.exports = {
    CodeForHepler
}