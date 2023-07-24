const path= require('path');

const express= require('express');

const contactController=require('../controllers/contacts')


const routes= express.Router();


routes.get('/success', contactController.getSuccess);

 module.exports = routes;