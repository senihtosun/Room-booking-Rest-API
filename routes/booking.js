const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')


// Sends all json data
router.get('/', async (req, res) => {
    
    try {
        const booking = await Booking.find()
        res.json(booking)
    } catch(err) {
        res.status(500).json({message: err.message})
    }

})


// Getting a specific booking with its id
router.get('/:id', bookingMiddleware, (req, res) => {
    res.json(res.booking)
})


// Creating a new booking
router.post('/', async (req, res) => {
    
    const booking = new Booking({
        name: req.body.name,
        bookingDate: req.body.bookingDate,
        roomNumber: req.body.roomNumber
    })

    try {
        const newBooking = await booking.save()
        // send back the newly created
        res.status(201).json(newBooking)
    } catch(err){
        res.status(500).json({ message: err.message })
    }

})

// Updating
router.patch('/:id', bookingMiddleware, async (req, res) => {
    if(req.body.name != null){
        res.booking.name = req.body.name
    }

    if(req.body.bookingDate != null){
        res.booking.bookingDate = req.body.bookingDate
    }

    if(req.body.roomNumber != null){
        res.booking.roomNumber = req.body.roomNumber
    }

    try {
        const updatedBooking = await res.booking.save()
        res.json(updatedBooking)
    } catch(err){
        res.status(500).json({ message: err.message })
    }
})

// Deleting
router.delete('/:id', bookingMiddleware, async (req, res) => {

    try {
        await res.booking.remove()
        res.json({ message: '[+] Booking successfully deleted'})
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})



async function bookingMiddleware(req, res, next){
    let booking
    
    try {
        booking = await Booking.findById(req.params.id)
        if(booking == null){
            return res.status(404).json({ message: 'Cannot find the booking'})
        }

    } catch(err){
        return res.status(500).json({ message: err.message })
    }

    res.booking = booking
    next()

}

module.exports = router
