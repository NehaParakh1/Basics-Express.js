const path= require('path');

const express= require('express');

const rootDir = require("../util/path")

const routes= express.Router();


routes.get('/success', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
 });

 module.exports = routes;