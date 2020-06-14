const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    // Data Format: yyyy/mm/dd
    bookingDate: {
        type: Date,
        required: true
    },

    roomNumber: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: 'Room number has to be an integer'
        }
    },

    dateCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Booking', bookingSchema)

