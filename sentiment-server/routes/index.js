var express = require('express');
const portfolioController = require('../controllers/portfolio')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portfolio', portfolioController.getPortfolio)

router.post('/portfolio', portfolioController.add_to_portfolio)

router.delete('/portfolio', portfolioController.remove_from_portfolio)

module.exports = router;
