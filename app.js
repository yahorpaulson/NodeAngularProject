const express = require('express')
const authRoutes = require('./routes/auth')
const app = express();

//concat
app.use('/api/auth', authRoutes)



module.exports = app;