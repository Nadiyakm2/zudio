const express = require('express');
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	return res.render('pages/home');
});
app.get('/znear-you', (req, res) => {
	return res.render('pages/zudioNear');
});
router.get('/men', (req, res) => {
	res.render('pages/men');
});

router.get('/women', (req, res) => {
	res.render('pages/women');
});
app.use('/', router);

app.listen(3000, () => {
	console.log('app started at 3000');
});
