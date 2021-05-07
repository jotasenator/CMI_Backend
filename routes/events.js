
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
        check('foto', 'el titulo no es obligatorio'),
        check('departamento', 'el titulo es obligatorio').notEmpty(),
        check('responsable', 'el titulo es obligatorio').notEmpty(),
        check('noSello', 'el titulo es obligatorio').notEmpty(),
        check('identificadorEquipo', 'el titulo es obligatorio').notEmpty(),
        check('placaMadreMarca', 'el titulo es obligatorio').notEmpty(),
        check('placaMadreModelo', 'el titulo es obligatorio').notEmpty(),
        check('placaMadreNS', 'el titulo es obligatorio').notEmpty(),
        check('placaMadreObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('discoDuroMarca', 'el titulo es obligatorio').notEmpty(),
        check('discoDuroModelo', 'el titulo es obligatorio').notEmpty(),
        check('discoDuroNS', 'el titulo es obligatorio').notEmpty(),
        check('discoDuroObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('memoriaRAMMarca', 'el titulo es obligatorio').notEmpty(),
        check('memoriaRAMModelo', 'el titulo es obligatorio').notEmpty(),
        check('memoriaRAMNS', 'el titulo es obligatorio').notEmpty(),
        check('memoriaRAMObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('microProcesadorMarca', 'el titulo es obligatorio').notEmpty(),
        check('microProcesadorModelo', 'el titulo es obligatorio').notEmpty(),
        check('microProcesadorNS', 'el titulo es obligatorio').notEmpty(),
        check('microProcesadorObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('fuenteInternaMarca', 'el titulo es obligatorio').notEmpty(),
        check('fuenteInternaModelo', 'el titulo es obligatorio').notEmpty(),
        check('fuenteInternaNS', 'el titulo es obligatorio').notEmpty(),
        check('fuenteInternaObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('lectorCDDVDMarca', 'el titulo es obligatorio').notEmpty(),
        check('lectorCDDVDModelo', 'el titulo es obligatorio').notEmpty(),
        check('lectorCDDVDNS', 'el titulo es obligatorio').notEmpty(),
        check('lectorCDDVDObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('computadoraNI', 'el titulo es obligatorio').notEmpty(),
        check('monitorMarca', 'el titulo es obligatorio').notEmpty(),
        check('monitorModelo', 'el titulo es obligatorio').notEmpty(),
        check('monitorNS', 'el titulo es obligatorio').notEmpty(),
        check('monitorObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('monitorNI', 'el titulo es obligatorio').notEmpty(),
        check('tecladoMarca', 'el titulo es obligatorio').notEmpty(),
        check('tecladoModelo', 'el titulo es obligatorio').notEmpty(),
        check('tecladoNS', 'el titulo es obligatorio').notEmpty(),
        check('tecladoObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('tecladoNI', 'el titulo es obligatorio').notEmpty(),
        check('mouseMarca', 'el titulo es obligatorio').notEmpty(),
        check('mouseModelo', 'el titulo es obligatorio').notEmpty(),
        check('mouseNS', 'el titulo es obligatorio').notEmpty(),
        check('mouseObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('mouseNI', 'el titulo es obligatorio').notEmpty(),
        check('bocinasMarca', 'el titulo es obligatorio').notEmpty(),
        check('bocinasModelo', 'el titulo es obligatorio').notEmpty(),
        check('bocinasNS', 'el titulo es obligatorio').notEmpty(),
        check('bocinasObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('bocinasNI', 'el titulo es obligatorio').notEmpty(),
        check('impresoraMarca', 'el titulo es obligatorio').notEmpty(),
        check('impresoraModelo', 'el titulo es obligatorio').notEmpty(),
        check('impresoraNS', 'el titulo es obligatorio').notEmpty(),
        check('impresoraObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('impresoraNI', 'el titulo es obligatorio').notEmpty(),
        check('upsMarca', 'el titulo es obligatorio').notEmpty(),
        check('upsModelo', 'el titulo es obligatorio').notEmpty(),
        check('upsNS', 'el titulo es obligatorio').notEmpty(),
        check('upsObservaciones', 'el titulo es obligatorio').notEmpty(),
        check('upsNI', 'el titulo es obligatorio').notEmpty(),


        fieldValidator
    ],
    crearEvento)


// actualizar evento
router.put('/:id', actualizarEvento)

//borrar evento
router.delete('/:id', eliminarEvento)

module.exports = router