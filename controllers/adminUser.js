
const adminUser = require('../models/adminUser')

const { response } = require('express')

const getAdmin = async (req, res = response) => {

    const admin = await adminUser.find()


    return res.json({
        ok: true,
        admin
    })


}

const crearAdmin = async (req, res = response) => {

    const admins = new adminUser(req.body)

    try {

        admins.user = req.uid

        const adminGuardado = await admins.save()

        return res.json({
            ok: true,
            adminGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el admin'
        })

    }


}

module.exports = {
    getAdmin,
    crearAdmin


}