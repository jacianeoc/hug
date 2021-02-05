//importar dependencia 
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express();

//criando uma rota 
server

//utilizar o body do reque
.use(express.urlencoded({extended: true}))
//utilizando arquivos estáricos 
.use(express.static('public'))

//configurar  template engine (ela pode enviar datas para o html
//executar por lá)
.set('views', path.join(__dirname, 'views'))

.set('view engine', 'hbs')
.get('/', pages.index) //no certo momento ele vai executar, quando tiver na pagina das pages
.get('/center', pages.center)
.get('/centers', pages.centers)
.get('/create-center', pages.createCenter)
.post('/save-center', pages.saveCenter)
//ligar o servidor
server.listen(5500)