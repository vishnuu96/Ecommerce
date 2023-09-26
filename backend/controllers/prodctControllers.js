const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')

// create product to pass into api ---Admin
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}


// read the product controller to pass into api
exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    })
}

// update product--- admin
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler('product not found',404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindandModify: false,
    })

    res.status(200).json({
        success: true,
        product
    })
}

// delete product
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler('product not found',404))
    }
    await product.deleteOne()


    res.status(200).json({
        success: true,
        message:"product deleted successfully"
    })
}


// get single product details
exports.getProductDetails=async(req,res,next)=>{
    const product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler('product not found',404))
    }
    res.status(200).json({
        success: true,
        product
    })
}


// module.exports=getAllProducts
// module.exports=createProduct