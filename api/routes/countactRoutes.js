const express= require('express')
const router =express.Router()


router.get('/',(req,res,next)=>{
    res. status(200).json({
        masege:"hello i am"
    })
})

router.post('/',(req,res,next)=>{
    const name=req.body.name
    const email=req.body.email
   
    res. status(200).json({
        masege:"hey ,this is my frist data post of datadash",
        name,
        email
    })
})

module.exports= router