const express=require('express')
const getAllProducts=require('../controllers/prodctControllers')

const router= express.Router()

router.route('/products').get(getAllProducts)

module.exports=router