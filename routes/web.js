const routerWeb = require('./master');

module.exports = (app) =>{
    app.use(routerWeb);
}