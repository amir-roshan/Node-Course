const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => { // it is at the homepage by default 
    res.send("<h1>Hello from Express!</h1>");
});

module.exports = router;
