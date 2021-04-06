// const mongoose=require('mongoose')
const { Schema, model } = require('mongoose')

const EventoSchema = Schema({
    departamento: {
        type: String,
        required: true
    },
    nombreUsuario: {
        type: String,
        required: true
    },
    placaMadre: {
        type: String,
        required: true
    },
    impresora: {
        type: String,

    },


})

EventoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Evento', EventoSchema)