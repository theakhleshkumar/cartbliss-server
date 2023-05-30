const indexController = (req, res, next) => {
	res.render('index', {
		title: 'Express App',
		message: 'Congratulations 💐, Express App is working properly 👍',
	});
};

module.exports = indexController;
