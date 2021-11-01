const router = require('express').Router();
const ProductService = require('../services/product-service');
const db = require('../utils/database');
const ErrorMessage = require('../commons/error-message');

router.get('/', async (req, res) => {
    const productService = new ProductService(db);
    productService.getAll()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(error => res.status(500).json(
            new ErrorMessage(false, 'There was an error, please try again!')
        ));
});

router.get('/:id', (req, res) => {
    const productService = new ProductService(db);
    productService.getById(+req.params.id)
        .then(product => {
            res.status(200).json(product);
        })
        .catch(error => res.status(500).json(
            new ErrorMessage(false, 'There was an error, please try again!')
        ));
});

module.exports = router;