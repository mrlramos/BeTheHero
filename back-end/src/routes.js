const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ngos', async (request, response) => {
    var result = await connection('ngos').select('*');
    
    console.log(result);

    return response.json({result});
});

routes.post('/ngos', async (request, response) => {
    const {name, email, whatsapp, city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ngos').insert({

        id, name, email, whatsapp, city, uf
    });

    console.log(name, email, whatsapp, city, uf);
    
    return response.json({id});
});

module.exports = routes;