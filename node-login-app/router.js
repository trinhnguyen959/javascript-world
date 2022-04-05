var express = require('express');
var router = express.Router();

const credential = {
	email: 'trinhnguyen959@gmail.com',
	password: '123',
};

//login
router.post('/login', (req, res) => {
	if (
		req.body.email === credential.email &&
		req.body.password === credential.password
	) {
		req.session.user = req.body.email;
		// res.redirect('/dashboard');
		res.end('Welcome!');
	} else {
		res.end('Invalid email or password.');
	}
});

module.exports = router;
