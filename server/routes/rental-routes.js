const express = require('express');
const router = express.Router();

router.get('/rental', (req, res) => {
    res.status(200).json({
        message: "Status OK",
        users: ["Room 1", "Room 2"]
    })
})


module.exports = router;