
const Database = require('./db');

Database.then(async db => {
    //inserindo datas na tabela
    await db.run(`
        INSERT INTO centers (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends

        ) VALUES(
            "-7.226376",
            "-35.8814862" ,
            "Lar dos cats",
            "resgasta gatinhos de ruas",
            "999999999",
            "https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg" ,
            "venha e leve muito amor para sua casa",
            "Horario de funcionamento Das 8h as 18h ",
            "0"
        );
    `)
    
    //consultar dados na tabela
    // aqui é seleciona todos os campos da tabela 
    const selectedCenters = await db.all("SELECT * FROM centers")*/

    //consultar somente um centro de doação
    const center = await db.all('SELECT * FROM centers WHERE   id = "2" ')
    console.log(center);

})