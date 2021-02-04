
const Database = require('./database/db')
const saveCenter = require('./database/saveCenter'); 
//responsaveis por contar as funcoes das rotas 

module.exports = {

    index(req, res){

        //uma funçao que pede onde  tá o arquivo
        return res.render('index')
    },
    async center(req, res){
        const id =req.query.id;
        try {

            const db = await Database;
            const results = await db.all(`SELECT * FROM centers WHERE   id = "${id}"` );
            
            const center = results[0];
            center.images = center.images.split(",");
            center.firstImg = center.images[0];

            if (center.open_on_weekends === "0") {
                center.open_on_weekends = false;
                
            } else {
                center.open_on_weekends = true;
            }

            return res.render('center', {center});

        } catch (error) {
            console.log(error);
            return res.send('Error no banco de dados');
        }
        
    },
    //colocar centers pelo bd
    async centers(req, res){
        try{

        const db = await Database; 
        const centers = await db.all("SELECT * FROM centers")

        return res.render('centers', {centers})

        } catch(error){
            console.log(error);
            return res.send('Erro no banco de dados');
        }
    },
    createCenter(req, res){
        return res.render('create-center')
    }
} 