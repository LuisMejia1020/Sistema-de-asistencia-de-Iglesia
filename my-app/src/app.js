var mysql = require ('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'Registro_Asistencia',
    user:'aplicacionAsistencia',
    password:'Ultralord164'
})

connection.connect(function(error){
    if(error){
        throw error
    }else{
        console.log('conexion exitosa')
    }

})
//mostramos datos
connection.query('SELECT * FROM Usuario', function(error,results,fields){
    if(error){
        throw error;      
    }

    results.forEach(result => {
        console.log(result);
    });
})

//insertar datos en la base de datos
/*connection.query('INSERT INTO Usuario(Username, pass, access_level, email, telefono, direccion) VALUES ("Xaka", "12234", "ADMINISTRADOR", "elfornicador123@gmail.com", "+504 99976573", "Residencial el Sauce, las acacias #11, bloque 1")', function(error, results) {
    if(error) throw error
    console.log('Usuario agregado', results)
})*/

//actualizar datos en la base de datos
/*connection.query('UPDATE Usuario SET Username = "SteveRodgers", access_level = "NORMAL" WHERE idUser=10', function(error, results){
    if(error) throw error
    console.log('Registro actualizado', results)

})*/

//eliminar datos en la base de datos
connection.query('DELETE FROM Asistencia WHERE idAsistencia=5', function(error, results){
    if(error) throw error
    console.log('Registro eliminado', results)
})


connection.end()