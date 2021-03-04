const express = require('express');
const router = express.Router();

const {signIn} = require('../controller/user/siginin');
const { getuser } = require('../controller/user/getuser');

router.post('/user/signin', signIn);

router.get('/user/account', getuser)

router.get('/user/rental', (req, res) => {
    res.status(200).json({
        message:'Status OK',
        rentals: ['house 1', 'house 2']
    })
})

module.exports = router;