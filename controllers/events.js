const Evento = require('../models/Evento')

const { response } = require('express')



const getEvento = async (req, res = response) => {

    const eventos = await Evento.find()


    return res.json({
        ok: true,
        eventos
    })

}

const crearEvento = async (req, res = response) => {

    const evento = new Evento(req.body)

    try {

        evento.user = req.uid

        const eventoGuardado = await evento.save()

        return res.json({
            ok: true,
            eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el admin'
        })

    }


}

const actualizarEvento = async (req, res = response) => {

    const eventoId = req.params.id

    try {

        const evento = await Evento.findById(eventoId)

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        const nuevoEvento = {
            ...req.body
        }

        await Evento.findByIdAndUpdate(eventoId, nuevoEvento)

        res.json({
            ok: true,
            eventoId,
            evento,
            nuevoEvento


        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })

    }


}


const eliminarEvento = async (req, res = response) => {
    const eventoId = req.params.id

    try {

        const evento = await Evento.findById(eventoId)

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        await Evento.findByIdAndDelete(eventoId)


        res.json({
            ok: true,
            msg: 'evento borrado',
            evento

        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })

    }



}



module.exports = {
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento,


}