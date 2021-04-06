const express = require('express')
require('dotenv').config()
const { dbConnection } = require('./database/config')
const cors = require('cors')


//Crear el servidor de express
const app = express()

//Base de Datos
dbConnection()

//CORS
app.use(cors())

//Directorio publico

app.use(express.static('public'))



// Lectura y parseo del body
app.use(express.json());


//Rutas

app.use('/api/', require('./routes/events'))
app.use('/user/', require('./routes/adminUser'))


//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})