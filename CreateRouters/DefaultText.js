function CodeForRouters(componentName, AmbientName , level) {
    
    let lowerComponentName = componentName.toLowerCase();
    let greatTextComponentName = lowerComponentName.charAt(0).toUpperCase() + lowerComponentName.slice(1);
    let code;

    switch (level) {
        case 1:
            code = 
            `
var express = require('express');
var ${greatTextComponentName}Controller = require('../Controllers/${greatTextComponentName}Controller');
const auth = require('../Middlewares/Authenticate');

var app = express.Router();

// --   Crea rutas del tipo POST
app.post('/CreateNew${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.CreateNew${greatTextComponentName});

// --   Crea rutas del tipo GET
app.get('/SelectAll${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.SelectAll${greatTextComponentName});
app.get('/Get${greatTextComponentName}Data', [auth.auth], ${greatTextComponentName}Controller.Get${greatTextComponentName}Data);
app.get('/GetAll${greatTextComponentName}s', [auth.auth], ${greatTextComponentName}Controller.GetAll${greatTextComponentName}s);

// --   Crea rutas del tipo PUT
app.put('/Update${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.Update${greatTextComponentName});

// --   Crea rutas del tipo DELETE
app.delete('/Delete${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.Delete${greatTextComponentName});

module.exports = app;
            `;
            break;
        case 2:
            code =
            `
var express = require('express');
var ${greatTextComponentName}Controller = require('../../Controllers/${AmbientName}/${greatTextComponentName}Controller');
const auth = require('../../Middlewares/Authenticate');

var app = express.Router();

// --   Crea rutas del tipo POST
app.post('/CreateNew${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.CreateNew${greatTextComponentName});

// --   Crea rutas del tipo GET
app.get('/SelectAll${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.SelectAll${greatTextComponentName});
app.get('/Get${greatTextComponentName}Data', [auth.auth], ${greatTextComponentName}Controller.Get${greatTextComponentName}Data);
app.get('/GetAll${greatTextComponentName}s', [auth.auth], ${greatTextComponentName}Controller.GetAll${greatTextComponentName}s);

// --   Crea rutas del tipo PUT
app.put('/Update${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.Update${greatTextComponentName});

// --   Crea rutas del tipo DELETE
app.delete('/Delete${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.Delete${greatTextComponentName});

module.exports = app;
            `;
            break;
        case 3:
            code =
            `
var express = require('express');
var ${greatTextComponentName}Controller = require('../Controllers/${greatTextComponentName}Controller');
const auth = require('../../../../tools/Middlewares/Authenticate');

var app = express.Router();

// --   Crea rutas del tipo POST
app.post('/CreateNew${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.CreateNew${greatTextComponentName});

// --   Crea rutas del tipo GET
app.get('/SelectAll${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.SelectAll${greatTextComponentName});
app.get('/Get${greatTextComponentName}Data', [auth.auth], ${greatTextComponentName}Controller.Get${greatTextComponentName}Data);
app.get('/GetAll${greatTextComponentName}s', [auth.auth], ${greatTextComponentName}Controller.GetAll${greatTextComponentName}s);

// --   Crea rutas del tipo PUT
app.put('/Update${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.Update${greatTextComponentName});

// --   Crea rutas del tipo DELETE
app.delete('/Delete${greatTextComponentName}', [auth.auth], ${greatTextComponentName}Controller.Delete${greatTextComponentName});

module.exports = app;
            `;
            break;
        default:
            code = `RUTAS PARA ${greatTextComponentName}`
            break;
    }

    return code;
}

module.exports = {
    CodeForRouters
}
