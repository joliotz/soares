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

router.get('/historia', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/historia.html'));
});

router.get('/ananas', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/ananas.html'));
});

router.get('/anteroQuental', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/anteroQuental.html'));
});

router.get('/antonioBorges', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/antonioBorges.html'));
});

router.get('/auditorio', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/auditorio.html'));
});

router.get('/centros-interpretacao', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/centroInterpretacao.html'));
});

router.get('/caldeira', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/caldeira.html'));
});

router.get('/expolab', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/expolab.html'));
});

router.get('/pocosMosteiros', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/pocosMosteiros.html'));
});

router.get('/praiaAguaDalto', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/praiaAguaDalto.html'));
});

router.get('/praiaDoFogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/praiaDoFogo.html'));
});

router.get('/teatro', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/teatro.html'));
});

router.get('/terraNostra', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/terraNostra.html'));
});

//////////////////////Jardins e ParqueS/////////////////////////////////////

router.get('/jardins-parques', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/jardins&parques/jardinsParques.html'));
});

//////////////////////Museus e Centros/////////////////////////////////////

router.get('/museus-centros', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/museusCentros/museusCentros.html'));
});

//////////////////////Visita e Explora/////////////////////////////////////

router.get('/visitaExplora', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/visitaExplora/visitaExplora.html'));
});

//////////////////////Zonas Balneares/////////////////////////////////////

router.get('/zonasBalneares', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/zonasBal/zonasBalneares.html'));
});

router.get('/visitaExplora-2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/visitaExplora/visitaExplora2.html'));
});

router.get('/fabricaCha', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/CentrosI/fabricaDeCha.html'));
});

router.get('/sessao', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/login.html'));
});

router.get('/register', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/register.html'));
});

module.exports = router