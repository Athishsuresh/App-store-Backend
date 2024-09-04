const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./Route/appRoute');
const cors=require('cors')


dotenv.config();

mongoose.connect(process.env.APPSTORE_URL).then(() => {
    console.log("Database is connected successfully");
})

const app = express();
app.use(cors({origin:"http://localhost:3001"})) //cors is a middleware
app.use(express.json());

app.use('/app', router);

app.listen(3000, () => {
    console.log("Server is connected");
    
})