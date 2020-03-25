const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

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

Tipos de DBs:
SQL: MySQL, SQLite, PostdreSQL, etc
NoSQL: MongoDB, CouchDB, etc

Driver: SELECT * FROM USERS;
Query Builder(knex): table('users').select('*').where()

*/

app.listen(3333);