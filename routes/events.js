
// Event routes

const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { crearEvento, getEvento, actualizarEvento, eliminarEvento, } = require('../controllers/events')

const { fieldValidator } = require('../middlewares/fieldValidator')


// obtener eventos
router.get('/', getEvento)

// crear nuevo evento
router.post('/',
    [
        check('departamento', 'el titulo es obligatorio').notEmpty(),
        check('nombreUsuario', 'el titulo es obligatorio').notEmpty(),
        check('placaMadre', 'el titulo es obligatorio').notEmpty(),
        check('impresora', 'el titulo es obligatorio').notEmpty(),


        fieldValidator
    ],
    crearEvento)


// actualizar evento
router.put('/:id', actualizarEvento)

//borrar evento
router.delete('/:id', eliminarEvento)

module.exports = router