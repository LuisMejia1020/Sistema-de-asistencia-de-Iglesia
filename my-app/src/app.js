var express = require ('express')
var jwt = require('jsonwebtoken')
var keys = require('./settings/keys')

var app = express()

app.set('key', keys.key)
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//formato basico de rutas
app.get('/', function(req, res ){
    res.send('Hola humano, sos super inteligente')
})

app.post('/login', (req,res)=>{
    if(req.body.usuario == 'admin' && req.body.pass == '12345'){
        const payload = {
            check:true
        }
        const token = jwt.sign(payload, app.get('key'),{
            expiresIn: '7d'
        })
    
        res.json({
            message:'autenticacion exitosa',
            token: token
        })
    }else{
        res.json({
            message: 'usuario y/o password son incorrectos, intente de nuevo'
        })
    }
})

//middleware
const verificacion = express.Router()

verificacion.use((req, res, next) =>{
    let token = req.headers['x-access-token'] || req.headers['authorization']
    //console.log(token)
    if(!token){
        res.status(401).send({
            error: "es necesario un token de autenticacion "
        })
        return
    }

    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length )
        console.log(token)
    }
    if(token){
        jwt.verify(token, app.get('key'), (error, decoded) => {
            if(error){
                return res.json({
                    message:" no papa "
                })
            }else{
                req.decoded = decoded 
                next();
            }
        })
    }

})

app.get('/info', verificacion, (req, res) =>{
    res.json('informacion entregada')
})

app.get('/contacto', function(req,res){
    res.send("seccion de contactos ")
})

app.listen(3000, function(){
    console.log("estas conectado")
})