function CodeForAuthenticate() {

    const defaultCode = 
    `
var jwt = require('jwt-simple');
var moment = require('moment');

//$ Clave secreta del encode del jwt
var secret = '####';

// -- Función para la decodificación del token
exports.auth = function(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message: "NoHeaderError"});
    }

    ///$ Adquirimos el token
    var token = req.headers.authorization.replace(/['"]+/g,'');

    //$ Lo segmentamos para identificar si es un token Válido
    var segment = token.split('.');
    if (segment.length != 3) {
        return res.status(403).send({message: 'InvalidToken '})
    } else {
        try {

            //$ Decodificamos el token con la clave secreta del encode.
            var payload = jwt.decode(token,secret);
            if(payload.exp <= moment().unix()){
                return res.status(403).send({message:'TokenExpirado'});
            }
        } catch (error) {
            return res.status(403).send({message: 'ErrorToken '})
        }
    }

    req.user = payload;
    next();
}
    `
    return defaultCode;
}

module.exports = {
    CodeForAuthenticate
}