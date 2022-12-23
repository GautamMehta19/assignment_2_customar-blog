const cardModel = require('../models/cardModel');
const valid = require('../validation/valid')

const createCard = async function (req, res) {
    try {
        let data = req.body;
        const { cardNumber, cardType, customerName, status, vision, customerID } = data

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ 
                status: false, 
                message: "Data is required" 
            })
        }

        if (!valid.isValid(cardNumber)) {
            return res.status(400).send({ 
                status: false, 
                message: "Enter cardNumber" 
            })
        }
        let ckeck = await cardModel.find({ status: "ACTIVE" }).count();
        let result = parseInt(cardNumber) + ckeck

        if (!valid.isValid(cardType)) {
            return res.status(400).send({ 
                status: false, 
                message: "Enter cardType" 
            })
        }

        if (cardType != "REGULAR" && cardType != "SPECIAL") {
            return res.status(400).send({ 
                status: false, 
                message: "cardType can only be REGULAR or SPECIAL " 
            })
        }

        if (!valid.nameValidationRegex(customerName)) {
            return res.status(400).send({ 
                status: false, 
                message: "Enter customerName" 
            })
        }

        if (status) {
            if (!valid.isValid(status)) {
                return res.status(400).send({ 
                    status: false, 
                    message: "Enter status" 
                })
            }
        }

        if (!valid.isValid(vision)) {
            return res.status(400).send({ 
                status: false, 
                message: "Enter vision" 
            })
        }

        if (!valid.isValid(customerID)) {
            return res.status(400).send({ 
                status: false, 
                message: "Enter customerID" 
            })
        }

        if (!valid.isValidObjectId(customerID)) {
            return res.status(400).send({ 
                status: false, 
                message: "Enter Valid customerID" 
            })
        }

        await cardModel.create(data);
        let assign = await cardModel.findOneAndUpdate({ customerID: customerID }, { cardNumber: result }, { new: true })
        return res.status(201).send({ msg: assign });
    }
    catch (error) {
        return res.status(500).send({ 
            status: false, 
            message: error.message 
        })
    }
}


const getCard = async function (req, res) {
    try {
        let result = await cardModel.find({ status: "ACTIVE" }).populate("customerID")
        return res.status(200).send(result);
    } 
    catch (error) {
        return res.status(500).send({ 
            status: false, 
            message: error.message 
        })
    }
}

module.exports = {createCard , getCard}