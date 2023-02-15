const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.static('os'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', [path.join(__dirname, '/os'), path.join(__dirname, '/os/win')])

app.get('/', function (req, res) {
	res.render('menu');
});

app.get('/vista', function (req, res) {
	res.render('vista');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
