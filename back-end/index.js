const express = require('express');

const app = express();

app.use(express.json());

// Rota/Recurso

/* Métodos HTTP:
GET: Buscar 
POST: Criar 
PUT: Alterar
DELETE: Deletar

Tipos de parâmetros:
Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
Route Params: Parâmetros utilizado para identificar recursos
Request Body: Corpo da requisição, utilizado 
*/

app.post('/users', (request, response) => {
    const params = request.body;

    console.log(params);
    
    return response.json({
        evento: 'Criando uma aplicação com nodejs, react e react native',
        aluno: 'Marlon Raoni Ramos'
    });
});

app.listen(3333);