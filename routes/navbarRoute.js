const express = require('express');
const router = express.Router();

router.get('/znear-you', (req, res) => {
	return res.render('pages/zudioNear');
});

router.get('/zworld', (req, res) => {
	return res.render('pages/zworld');
});

router.get('/zstories', (req, res) => {
	return res.render('pages/zstories');
});

router.get('/zgiftcard', (req, res) => {
	return res.render('pages/zgiftcard');
});

module.exports = router;
