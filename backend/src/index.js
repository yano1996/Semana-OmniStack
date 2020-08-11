const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Metodo HTTP:
 * GET:Buscar uma informação do back-end
 * POST:Criar uma informação do back-end
 * PUT:Alterar uma informação do back-end
 * DELETE:Deletar uma informação do back-end
 */



 /**
  * Tipo de parametros:
  * Query Params: Parametros nomeados enviados na rota aps "?" (Filtros, paginação)
  * Route Params:Parametros utilizados para identificar recursos
  * Reques Body:Corpo da requisiição, utilizado para criar ou alterar recurso
  */


app.listen(3333);