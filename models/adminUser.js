const { Schema, model } = require('mongoose')

const adminUserSchema = Schema({
    usuario: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true

    },


})

adminUserSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})



module.exports = model('adminUser', adminUserSchema)