const express = require('express');
const router = express.Router();

router.get('/women', (req, res) => {
	return res.render('pages/women');
});

router.get('/men', (req, res) => {
	return res.render('pages/men');
});

router.get('/footwear', (req, res) => {
	return res.render('pages/footwear');
});

router.get('/ethnic', (req, res) => {
	return res.render('pages/ethnic');
});

module.exports = router;
