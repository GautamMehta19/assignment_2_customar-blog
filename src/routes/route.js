const express = require('express');
const router = express.Router();
const customerController = require('../controllers/costumerController');
const cardController = require('../controllers/cardController');

router.post('/customer', customerController.createCustomer);
router.get('/getdata', customerController.getdata);
router.delete('/customer/:customerID', customerController.deleteCust);


router.post('/card', cardController.createCard)
router.get('/getcard', cardController.getCard)

module.exports = router;