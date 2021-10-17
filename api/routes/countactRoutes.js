const express= require('express')
const router =express.Router()


router.get('/',(req,res,next)=>{
    res. status(200).json({
        masege:"hello i am"
    })
})

module.exports= router