const express = require('express');
const { requireSignIn } = require('../middleware/authMidleware');
const { createProductController, getProductController, getSingleProductController, productImageController, deleteProductController, updateProductController, getUserProductsController } = require('../controllers/productController');
const formidable = require("express-formidable");

const router = express.Router();

// Route to create a product
router.post('/create-product', requireSignIn, formidable(), createProductController);

// Route to get all products excluding the logged-in user's products
router.get('/get-products', getProductController);

router.get('/user-products',requireSignIn, getUserProductsController);

router.get('/get-product/:slug', getSingleProductController);
router.get('/product-image/:id', productImageController);

// Route to delete a product (user can only delete their own products)
router.delete('/delete-product/:id', requireSignIn, deleteProductController);

// Route to update a product (user can only update their own products)
router.put('/update-product/:id', requireSignIn, formidable(), updateProductController);


module.exports = router;
