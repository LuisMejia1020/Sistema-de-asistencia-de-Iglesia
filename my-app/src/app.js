var express = require ('express')

var app = express()


//formato basico de rutas
app.get('/', function(req, res ){
    res.send('Hola humano, sos super inteligente')
})

app.get('/contacto', function(req,res){
    res.send("seccion de contactos ")
})

app.listen(3000, function(){
    console.log("estas conectado")
})