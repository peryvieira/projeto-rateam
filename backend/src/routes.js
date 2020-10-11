const {Router} = require('express')

const routes = Router();

routes.get('/', (req, resp) =>{
    return resp.json({
        message: 'Hello Pery 21'
    });
})

module.exports = routes;