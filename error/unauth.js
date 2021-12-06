const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class unauthError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.StatusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = unauthError;