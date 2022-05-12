const express = require('express')
// const {  } = require('./rescipes-middleware')
// const { } = require('./recipes-model.js')

const router = express.Router()
router.get('/', (req, res, next) => {
     res.json({message: "Success"})
    //  .catch(next)
  
})

router.use((err, req, res, next) => { 
  res.status(err.status || 500).json({
    sageAdvice: 'Finding the real error is 90% of the bug fix',
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
