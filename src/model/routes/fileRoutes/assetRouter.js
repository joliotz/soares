const srcLocation = require('../../../srcLocation');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/login-02', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/login-02.png'))
});

router.get('/draw2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/draw2.png'))
});

module.exports = router;