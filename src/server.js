//importar dependencia 
const express = require('express');
const path = require('path');


const server = express();

//utilizando arquivos estáricos 
server.use(express.static('public'));


//criando uma rota 
server

//configurar  template engine (ela pode enviar datas para o html
//executar por lá)
.set('views', path.join(__dirname, 'views'))

.set('view engine', 'hbs')
.get('/', (req, res)=> {
    //uma funçao que pede onde tá o arquivo
    return res.render('index');
}
);

//ligar o servidor
server.listen(5500)