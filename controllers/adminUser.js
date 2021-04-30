
const adminUser = require('../models/adminUser')

const { response } = require('express')

const bcrypt = require('bcryptjs')



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

        //encriptar contraseña
        const salt = bcrypt.genSaltSync()
        admins.password = bcrypt.hashSync(admins.password, salt)



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

const eliminarAdmin = async (req, res = response) => {
    const adminId = req.params.id

    try {

        const admin = await adminUser.findById(adminId)

        if (!admin) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        await adminUser.findByIdAndDelete(adminId)


        res.json({
            ok: true,
            msg: 'admin borrado',
            admin

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
    getAdmin,
    crearAdmin,
    eliminarAdmin,
}