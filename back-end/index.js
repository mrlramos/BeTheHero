const express = require('express');

const app = express();

app.get('/', (request, response) => {

    return response.json({
        evento: 'Criando uma aplicação com nodejs, react e react native',
        aluno: 'Marlon Ramos'
    });
});

app.listen(3333);