const express = require('express')
const router = express.Router()

// @desc Home/Page
// @route GET/
router.get('/',(req,res) =>{
    res.send('hello')

})

module.exports = router