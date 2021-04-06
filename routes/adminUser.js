
// Event routes

const express = require('express')
const router = express.Router()
const { check } = require('express-validator')


const { getAdmin, crearAdmin } = require('../controllers/adminUser')




// obtener eventos
router.get('/', getAdmin)

// crear nuevo evento
router.post('/',
    [
        check('usuario', 'el titulo es obligatorio').notEmpty(),
        check('password', 'el titulo es obligatorio').notEmpty(),




    ],
    crearAdmin)


module.exports = router