var express = require('express');
var readyMadeShoppingChoices = require('../testing/data/readyMadeShoppingChoices.ts');
var { getUsersBasketItems, postUsersBasketItems } = require('../Utils/Database');

var router = express.Router();

router.get('/', function(req, res, next) {
    let status = 'OK';
    let data = JSON.stringify({ 
        status: status
    });
    res.send(data);
});

router.get('/readyMadeShoppingChoices', function(req, res, next) {
    const status = 'OK';
    const data = JSON.stringify({ 
        status: status, 
        readyMadeShoppingChoices: readyMadeShoppingChoices
    });
    res.send(data);
});

router.get('/usersBasketItems/:id', function(req, res, next) {
    const id = req.params.id;
    const basketItems = getUsersBasketItems(id);
    const status = 'OK';
    const data = JSON.stringify({ 
        status: status, 
        list: basketItems
    });
    res.send(data);
});

router.post('/usersBasketItems/:id', function(req, res, next) {
    const id = req.params.id;
    const list = req.body.list;
    const status = 'OK';
    const data = JSON.stringify({ 
        status: status
    });
    postUsersBasketItems(id, list);
    res.send(data);
});

module.exports = router;