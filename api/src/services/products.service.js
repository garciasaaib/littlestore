const faker = require('faker')
const boom = require('@hapi/boom')
const { User } = require('../database/models/index')
// const getConnection = require('../libs/postgres')

class ProductsService {
  constructor() {
    this.products = []
    this.generate()
  }
  generate() {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean()
      })
    }
  }
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }
  async find() {
    const users = await User.findAll()
    // const rta = await client.query("SELECT * FROM tasks")
    // const products = this.products
    // if(!products.length) throw boom.notFound('Product not found')
    return users
  }
  async findOne(id) {
    const product = this.products.find(item => item.id === id)
    if (!product) throw boom.notFound('Product not found')
    if (!product.isBlocked) throw boom.conflict('Product is blocked')
    return product
  }
  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) throw boom.notFound('Product not found')
    const newProduct = Object.assign(this.products[index], changes)
    this.products[index] = newProduct
    return this.products[index]
  }
  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) throw boom.notFound('Product not found')
    await this.products.splice(index, 1)
    return id

  }
}

module.exports = ProductsService;
