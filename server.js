require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('[+] Database connected'))

app.use(express.json())

const bookingRouter = require('./routes/booking')
app.use('/booking', bookingRouter)

const host = '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host, () => {
    console.log('[+] Server started')	
})




