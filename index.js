const express = require('express');
const app = express();
const navbarRoutes = require('./routes/navbarRoute');
const collectionRoute = require('./routes/collectionRoute');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	return res.render('pages/home');
});

app.use('/', navbarRoutes);
app.use('/collection', collectionRoute);

app.use((req, res) => {
	return res.redirect('/');
});

app.listen(3000, () => {
	console.log('app started at 3000');
});
