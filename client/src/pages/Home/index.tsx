import { useState, useEffect, useContext } from 'react';
import { Card } from "../../components/Card"
import { ProductDetail } from '../../components/PoductDetail'
import { ShoppingCartContext } from '../../context';

export const Home = () => {
  const { } = useContext(ShoppingCartContext),
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?limit=10&offset=10')
      .then(response => response.json())
      .then(products => products.map(({ id, title, price, images, category }) =>
        ({ id, title, price, image: images[0], category: category.name })))
      .then(products => setItems(products));
  }, [])

  return (
    <div className='grid grid-cols-4 gap-6'>
      {items?.map((item) => <Card key={item.id} data={item} />)}
      <ProductDetail />
    </div>
  )
}
