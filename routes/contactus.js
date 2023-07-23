const path= require('path');

const express = require('express');

const rootDir=require('../util/path');

const router= express.Router();

router.get('/contactus', (req, res, next)=>{
    console.log("abc")
    res.send('<h2>404</h2>')
   res.sendFile(path.join(rootDir, 'views', 'contactus.html')) 
   
});

router.post('/contactus', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/success');
})

module.exports = router;