// const mongoose=require('mongoose')
const { Schema, model } = require('mongoose')

const EventoSchema = Schema({
    departamento: {
        type: String,
        required: true
    },
    responsable: {
        type: String,
        required: true
    },
    noSello: {
        type: String,
        required: true
    },
    identificadorEquipo: {
        type: String,
        required: true
    },
    placaMadreMarca: {
        type: String,
        required: true
    },
    placaMadreModelo: {
        type: String,
        required: true
    },
    placaMadreNS: {
        type: String,
        required: true
    },
    placaMadreObservaciones: {
        type: String,
        required: true
    },
    discoDuroMarca: {
        type: String,
        required: true
    },
    discoDuroModelo: {
        type: String,
        required: true
    },
    discoDuroNS: {
        type: String,
        required: true
    },
    discoDuroObservaciones: {
        type: String,
        required: true
    },
    memoriaRAMMarca: {
        type: String,
        required: true
    },
    memoriaRAMModelo: {
        type: String,
        required: true
    },
    memoriaRAMNS: {
        type: String,
        required: true
    },
    memoriaRAMObservaciones: {
        type: String,
        required: true
    },
    microProcesadorMarca: {
        type: String,
        required: true
    },
    microProcesadorModelo: {
        type: String,
        required: true
    },
    microProcesadorNS: {
        type: String,
        required: true
    },
    microProcesadorObservaciones: {
        type: String,
        required: true
    },
    fuenteInternaMarca: {
        type: String,
        required: true
    },
    fuenteInternaModelo: {
        type: String,
        required: true
    },
    fuenteInternaNS: {
        type: String,
        required: true
    },
    fuenteInternaObservaciones: {
        type: String,
        required: true
    },
    lectorCDDVDMarca: {
        type: String,
        required: true
    },
    lectorCDDVDModelo: {
        type: String,
        required: true
    },
    lectorCDDVDNS: {
        type: String,
        required: true
    },
    lectorCDDVDObservaciones: {
        type: String,
        required: true
    },
    computadoraNI: {
        type: String,
        required: true
    },
    monitorMarca: {
        type: String,
        required: true
    },
    monitorModelo: {
        type: String,
        required: true
    },
    monitorNS: {
        type: String,
        required: true
    },
    monitorObservaciones: {
        type: String,
        required: true
    },
    monitorNI: {
        type: String,
        required: true
    },
    tecladoMarca: {
        type: String,
        required: true
    },
    tecladoModelo: {
        type: String,
        required: true
    },
    tecladoNS: {
        type: String,
        required: true
    },
    tecladoObservaciones: {
        type: String,
        required: true
    },
    tecladoNI: {
        type: String,
        required: true
    },
    mouseMarca: {
        type: String,
        required: true
    },
    mouseModelo: {
        type: String,
        required: true
    },
    mouseNS: {
        type: String,
        required: true
    },
    mouseObservaciones: {
        type: String,
        required: true
    },
    mouseNI: {
        type: String,
        required: true
    },
    bocinasMarca: {
        type: String,
        required: true
    },
    bocinasModelo: {
        type: String,
        required: true
    },
    bocinasNS: {
        type: String,
        required: true
    },
    bocinasObservaciones: {
        type: String,
        required: true
    },
    bocinasNI: {
        type: String,
        required: true
    },
    impresoraMarca: {
        type: String,
        required: true
    },
    impresoraModelo: {
        type: String,
        required: true
    },
    impresoraNS: {
        type: String,
        required: true
    },
    impresoraObservaciones: {
        type: String,
        required: true
    },
    impresoraNI: {
        type: String,
        required: true
    },
    upsMarca: {
        type: String,
        required: true
    },
    upsModelo: {
        type: String,
        required: true
    },
    upsNS: {
        type: String,
        required: true
    },
    upsObservaciones: {
        type: String,
        required: true
    },
    upsNI: {
        type: String,
        required: true
    },



})

EventoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Evento', EventoSchema)