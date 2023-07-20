const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
console.log(err.stack.red)
let error = {...err};
if(err.name === 'CastError') {
    message = `Bootcamp not found with id of ${err.value}`
    error = new ErrorResponse(message,404);
}

res.status(error.statusCode || 500).json({
    success : false,
    message : error.message || 'Internal Server Error'
})
}

module.exports = errorHandler;