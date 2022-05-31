'use strict';
const faker = require('faker')

async function createProducts() {
  const products = []
  for (let i = 0; i < 3; i++) {
    const product = {
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
      isBlocked: faker.datatype.boolean()
    };
    products.push(product)
  }
  return products
}

module.exports = {
  async up(queryInterface) {
    const products = await createProducts()

    console.log(products)
    await queryInterface.bulkInsert('Products', products , {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
