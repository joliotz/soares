const srcLocation = require('../../../srcLocation');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/scripts.js',(req, res) =>{
    res.sendFile(path.join(srcLocation, './controller/scripts.js'))
});

router.get('/BundesligaLogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/Bundesliga.png'))
});

router.get('/LaLigaLogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/LaLigaLogo.png'))
});

router.get('/SerieALogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/SerieAlogo.png'))
});

router.get('/PremierLogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/premierlogo.png'))
});

router.get('/Ligue1Logo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/ligue1logo1.png'))
});

router.get('/PortugalLogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/portugalligalogo.png'))
});

router.get('/StatGuruLogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/statgurulogo.png'))
});

router.get('/StatGuruStatsLogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/statisticslogo.png'))
});

router.get('/login-02', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/login-02.png'))
});

router.get('/draw2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/draw2.png'))
});

module.exports = router;