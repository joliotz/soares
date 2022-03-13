const srcLocation = require('../../srcLocation');

const path = require('path');
const express = require('express');

const router = express.Router();

const userAuthentication = require("../userAuthentication");

router.use('/files', require('./fileRouter'));

router.use('/api', require('./apiRouter'));



router.get('/',(req, res) =>{
    res.sendFile(path.join(srcLocation, './view/html/home.html'));
}); 

router.get('/aboutus', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/aboutus.html'));
});

router.get('/sessao', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/login.html'));
});

router.get('/news', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/news.html'));
});

router.get('/register', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/register.html'));
});

module.exports = router