const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const {setupWebsocket} = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://Caroline:412893@cluster0-kz9i1.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}); 

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP: get (esse método é para receber uma informação, geralmente usado para buscar um usuário), post(utilizado para criar uma informação), put (editar uma informação), delete

//Tipos de Parâmetros:

//Query Params: req.query (Filtros, ordenaçaõ, paginação, ...) apenas para GET
//Route Params: request.params (Identificar um recurso na alteração ou remoção) apenas para PUT,DELETE
//Body: request.body (Dados para criação ou alteração de um registro) utilizado om o POST, PUT

//MongoDB (Banco de Dados Não-relacional)


server.listen(3333);