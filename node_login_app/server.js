const express = require('express');
const path = require('path');
const session = require('express-session');
const { v4: uuidV4 } = require('uuid');
const router = require('./router');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// load static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use('assets', express.static(path.join(__dirname, 'public/assets')));

// user
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: uuidV4(), resave: false, saveUninitialized: true }));
app.use('/route', router);

// home router
app.get('/', (req, res) => {
	res.render('base', { title: 'Login system' });
});

app.listen(port, () => console.log(`Listening on server ${port}`));
