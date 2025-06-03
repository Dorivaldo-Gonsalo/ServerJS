const routerWeb = require('./master');
const routerUser = require('./usuarios');
const routerContrato = require('./contratos');
const routerResidencia = require('./residencias');
const routerAPI = require('./api');

module.exports = (app) =>{
    app.use(routerWeb);
    app.use(routerUser);
    app.use(routerContrato);
    app.use(routerResidencia);
    app.use(routerAPI);
}