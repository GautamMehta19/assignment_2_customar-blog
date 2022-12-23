const mongoose = require("mongoose")

const isValid = function (value) {
    if (typeof (value) == "undefined" || typeof (value) == null) {
        return false
    }
    if (typeof (value) == "string" && (value).trim().length == 0) {
        return false
    }
    return true
}
const isValidObjectId = function (value) {
    return mongoose.Types.ObjectId.isValid(value)

}
const nameValidationRegex = function (value) {
    return /^[a-zA-Z -._\s]*$/.test(value)
}

const emailValidationRegex = function (value) {
    return /^\S+@\S+\.\S+$/.test(value)
}

const phoneValidationRegex = function (value) {
    return /^[6789]\w{9}$/.test(value)
}

const dateofb = function(value){
    return /^\d{2}\/\d{2}\/\d{4}$/.test(value)

}


module.exports = {isValid, nameValidationRegex, isValidObjectId, emailValidationRegex, phoneValidationRegex, dateofb }