// importing
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./database/db');

// Making express app
const app = express();

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// json middleware (to accept json data)
app.use(express.json());



// user routes
app.use('/api/user', require('./routes/userRoutes'))
// our actual routes
// http://localhost:5000/api/user/create
// http://localhost:5000/api/user/login

// CREATE A ROUTE FOR PRODUCTS


// defining port
const PORT = process.env.PORT;
// run the server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})