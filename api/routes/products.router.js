const express = require('express');
const ProductsService = require('../services/products.service')

const router = express.Router();
const service = new ProductsService()

router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.json({ message: "vista con solo filtro" },)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
  if (id === '999') return res.status(404).json({ message: "Not found" })
  res.status(200).json({ product: product, message: "este es otro producto" },)
})

router.post('/', (req, res) => {
  const { name, price, image } = req.body
  const newProduct = service.create({ name, price, image })
  res.status(201).json({ message: "created", product: newProduct },)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { name, price, image } = req.body
  const updateData = {}
  if (name !== '') updateData.name = name;
  if (price !== '') updateData.price = price;
  if (image !== '') updateData.image = image;
  const updatedProduct = service.update(id, updateData)

  res.json({ message: "parcially updated", product: updatedProduct },)
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { name, price, image } = req.body
  const updatedProduct = service.update(id, { name, price, image })

  res.json({ message: "all updated", product: updatedProduct })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const deletedProductId = service.delete(id)

  res.json({ message: "deleted", id: deletedProductId },)
})

module.exports = router
