

const express = require('express');

const contactController= require('../controllers/contacts')


const router= express.Router();

router.get('/contactus', contactController.getContact );

router.post('/contactus', contactController.postContact );

module.exports = router;