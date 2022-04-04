const express = require('express');
const ProductsService = require('../services/products.service')
const validatorHandler = require('../middlewares/validator.handler')
const productSchema = require('../schemas/product.schema')

const router = express.Router();
const service = new ProductsService()

/*
router.get('/filter', async (req, res, next) => {
  try {
    res.json({ message: "vista con solo filtro" },)
  } catch (error) { next(error) }
})
*/

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find()
    res.json(products)
  } catch (error) { next(error) }
})

router.get('/:id',
  validatorHandler(productSchema.get, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      validatorHandler(id)
      const product = await service.findOne(id)
      if (id === '999') return res.json({ message: "Not found" })
      res.json({ product: product, message: "este es otro producto" },)
    } catch (error) { next(error) }
  })

router.post('/',
  validatorHandler(productSchema.create, 'body'),
  async (req, res, next) => {
    try {
      const { name, price, image } = req.body
      const newProduct = await service.create({ name, price, image })
      res.status(201).json({ message: "created", product: newProduct },)

    } catch (error) { next(error) }
  })

router.patch('/:id',
  validatorHandler(productSchema.get, 'params'),
  validatorHandler(productSchema.update, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { name, price, image } = req.body
      let updateData = {}
      if (name) updateData.name = name;
      if (price) updateData.price = price;
      if (image) updateData.image = image;
      const updatedProduct = await service.update(id, req.body)
      res.json({ message: "parcially updated", product: updatedProduct },)

    } catch (error) { next(error) }
  })

router.put('/:id',
  validatorHandler(productSchema.get, 'params'),
  validatorHandler(productSchema.update, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { name, price, image } = req.body
      const updatedProduct = await service.update(id, { name, price, image })

      res.json({ message: "all updated", product: updatedProduct })

    } catch (error) { next(error) }
  })

router.delete('/:id',
  validatorHandler(productSchema.get, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const deletedProductId = await service.delete(id)

      res.json({ message: "deleted", id: deletedProductId },)

    } catch (error) { next(error) }
  })

module.exports = router
