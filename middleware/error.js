const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
console.log(err)
let error = {...err};
error.message = err.message;
if(err.name === 'CastError') {
    message = `Bootcamp not found with id of ${err.value}`
    error = new ErrorResponse(message,404);
}

// mongoose duplicate error

if(err.code === 11000) {
    message = `Duplicate field value entered`
    error = new ErrorResponse(message,400);
}

if(err.name === 'ValidationError') {
    message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message,400);
}

res.status(error.statusCode || 500).json({
    success : false,
    message : error.message || 'Internal Server Error'
})
}

module.exports = errorHandler;