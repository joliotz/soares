const srcLocation = require('../../../srcLocation');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/scripts.js',(req, res) =>{
    res.sendFile(path.join(srcLocation, './controller/scripts.js'))
});

// Rotas de CSS

router.get('/index.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/index.css'))
})

router.get('/style.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/style.css'))
})

router.get('/aboutus.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/aboutus.css'))
})

router.get('/login.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/login.css'))
})

router.get('/loginsignup.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/loginsignup.css'))
})
router.get('/news.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/news.css'))
})

router.get('/footer.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/footer.css'))
})

router.get('/navbar.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/nav.css'))
})

module.exports = router;