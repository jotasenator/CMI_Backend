
// Event routes

const express = require('express')
const router = express.Router()
const { check } = require('express-validator')


const { getAdmin, crearAdmin, eliminarAdmin } = require('../controllers/adminUser')


// obtener eventos
router.get('/', getAdmin)

// crear nuevo evento
router.post('/',
    [
        check('usuario', 'el titulo es obligatorio').notEmpty(),
        check('password', 'el titulo es obligatorio').notEmpty(),




    ],
    crearAdmin)

//borrar evento
router.delete('/:id', eliminarAdmin)


module.exports = router