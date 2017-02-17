var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('profile', { title: 'Profile',profile:'Nuruzaaman khan s profile' });
});

module.exports = router;
