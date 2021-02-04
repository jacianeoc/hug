const Database = require('sqlite-async');




function execute(db){
    //aqui tem haver com a linguagem sql
    //criar uma tabela
    //não tem o jeito muito bom para fazer um debug, então tem que ver na marra mesmo

    return db.exec(`
        CREATE TABLE IF NOT EXISTS centers(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `);
/*id  é a primeira coisa dá tabela, quer que o sqlite crie um numero sozinho e unico*/
    
}

//promises
module.exports = Database.open(__dirname + '/database.sqlite')
.then(execute);//resultado disse aqui é o db