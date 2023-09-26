const express=require('express')
const{getAllProducts, updateProduct, deleteProduct, getProductDetails}=require('../controllers/prodctControllers')
const{createProduct}=require('../controllers/prodctControllers')

const router= express.Router()
// read product route
router.route("/products").get(getAllProducts)
// cretae product route
router.route("/product/new").post(createProduct)
// update product route
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)


module.exports=router