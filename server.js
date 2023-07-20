const express = require('express');
const dotenv = require('dotenv');
const bootcamp = require("./routes/bootcamp")
const morgan = require('morgan');
const connectDB = require('./config/db')
const colors = require('colors');
const errorHandler = require("./middleware/error");
dotenv.config({path : './config/config.env'});

connectDB();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
if(process.env.NODE_ENV === 'development') {
    app .use(morgan('dev'))
}
app.use("/api/v1/bootcamps",bootcamp);
app.use(errorHandler);
app.listen(PORT,()=> {
    console.log(`server running on port ${PORT}`.blue.bold)
});