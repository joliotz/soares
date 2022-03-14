const srcLocation = require('../../../srcLocation');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/scripts.js',(req, res) =>{
    res.sendFile(path.join(srcLocation, './controller/scripts.js'))
});

router.get('/imagemInicial', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pagina_inicial.png'))
});

router.get('/login-02', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/login-02.png'))
});

router.get('/draw2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/draw2.png'))
});

router.get('/palmeiras', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/palmeiras.jpg'))
});

router.get('/parapente', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/parapente.jpg'))
});

router.get('/passeiobike', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/passeio_bike.jpg'))
});

router.get('/passeiocavalo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/passeio_cavalo.jpg'))
});

router.get('/pastorGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria1.jpg'))
});

router.get('/pastorGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria2.jpg'))
});

router.get('/pastorGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria3.jpg'))
});

router.get('/pastorGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria4.jpg'))
});

router.get('/pastorGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria5.jpg'))
});

router.get('/pastorGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria6.jpg'))
});

router.get('/pastorGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria7.jpg'))
});

router.get('/pastorGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria8.jpg'))
});

router.get('/pastorGaleria9', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pastor_galeria9.jpg'))
});

router.get('/perolaGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria1.jpg'))
});

router.get('/perolaGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria2.jpg'))
});

router.get('/perolaGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria3.jpg'))
});

router.get('/perolaGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria4.jpg'))
});

router.get('/perolaGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria5.jpg'))
});

router.get('/perolaGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria6.jpg'))
});

router.get('/perolaGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria7.jpg'))
});

router.get('/perolaGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola_galeria8.jpg'))
});

router.get('/perola', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/perola.jpg'))
});

router.get('/pocosMosteiros', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/pocos_mosteiros.jpg'))
});

router.get('/praiaFogo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/praia_fogo.jpg'))
});

router.get('/quintaGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria1.jpg'))
});

router.get('/quintaGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria2.jpg'))
});

router.get('/quintaGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria3.jpg'))
});

router.get('/quintaGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria4.jpg'))
});

router.get('/quintaGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria5.jpg'))
});

router.get('/quintaGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria6.jpg'))
});

router.get('/quintaGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria7.jpg'))
});

router.get('/quintaGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta_galeria8.jpg'))
});

router.get('/quinta', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quinta.jpg'))
});

router.get('/quintaPastor', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/quintapastor.jpg'))
});

router.get('/registo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/registo.png'))
});

router.get('/skybarGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria1.jpg'))
});

router.get('/skybarGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria2.jpg'))
});

router.get('/skybarGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria3.jpg'))
});

router.get('/skybarGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria4.jpg'))
});

router.get('/skybarGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria5.jpg'))
});

router.get('/skybarGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria6.jpg'))
});

router.get('/skybarGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria7.jpg'))
});

router.get('/skybarGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar_galeria8.jpg'))
});

router.get('/skybar', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/skybar.jpg'))
});

router.get('/soares', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/soares.png'))
});

router.get('/surf', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/surf.jpg'))
});

router.get('/teatroMicalense', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/teatro_micalense.jpg'))
});

router.get('/termoGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria1.jpg'))
});

router.get('/termoGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria2.jpg'))
});

router.get('/termoGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria3.jpg'))
});

router.get('/termoGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria4.jpg'))
});

router.get('/termoGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria5.jpg'))
});

router.get('/termoGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria6.jpg'))
});

router.get('/termoGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria7.jpg'))
});

router.get('/termoGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo_galeria8.jpg'))
});

router.get('/termo', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/termo.jpg'))
});

router.get('/terraNostra', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/Terra Nostra 1   43.jpg'))
});

router.get('/thomasGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria1.jpg'))
});

router.get('/thomasGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria2.jpg'))
});

router.get('/thomasGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria3.jpg'))
});

router.get('/thomasGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria4.jpg'))
});

router.get('/thomasGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria5.jpg'))
});

router.get('/thomasGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria6.jpg'))
});

router.get('/thomasGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria7.jpg'))
});

router.get('/thomasGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas_galeria8.jpg'))
});

router.get('/thomas', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/thomas.jpg'))
});

router.get('/trilhos', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/trilhos.jpg'))
});

router.get('/valeGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria1.jpg'))
});

router.get('/valeGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria2.jpg'))
});

router.get('/valeGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria3.jpg'))
});

router.get('/valeGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria4.jpg'))
});

router.get('/valeGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria5.jpg'))
});

router.get('/valeGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria6.jpg'))
});

router.get('/valeGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria7.jpg'))
});

router.get('/valeGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vale_galeria8.jpg'))
});

router.get('/vipGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria1.jpg'))
});

router.get('/vipGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria2.jpg'))
});

router.get('/vipGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria3.jpg'))
});

router.get('/vipGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria4.jpg'))
});

router.get('/vipGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria5.jpg'))
});

router.get('/vipGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria6.jpg'))
});

router.get('/vipGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria7.jpg'))
});

router.get('/vipGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip_galeria8.jpg'))
});

router.get('/vip', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vip.jpg'))
});

router.get('/vivendaGaleria1', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria1.jpg'))
});

router.get('/vivendaGaleria2', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria2.jpg'))
});

router.get('/vivendaGaleria3', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria3.jpg'))
});

router.get('/vivendaGaleria4', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria4.jpg'))
});

router.get('/vivendaGaleria5', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria5.jpg'))
});

router.get('/vivendaGaleria6', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria6.jpg'))
});

router.get('/vivendaGaleria7', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria7.jpg'))
});

router.get('/vivendaGaleria8', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria8.jpg'))
});

router.get('/vivendaGaleria9', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda_galeria9.jpg'))
});

router.get('/vivenda', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/vivenda.jpg'))
});

router.get('/wakeboard', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/wakeboard.jpg'))
});


module.exports = router;