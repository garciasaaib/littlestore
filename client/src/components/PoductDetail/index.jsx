import { useContext } from 'react'
import { XMarkIcon } from '../Icons'
import './styles.css'
import { ShoppingCartContext } from '../../context'

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  const product = context.productDetails
  console.log(product)
  return (
    <aside
      className={`${context.isAsideOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-white border border-black rounded right-0 bottom-0`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Details</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={context.closeAside}
        />
      </div>
      <div>
        <figure>
        <img src={product.images[0]} alt={product.title} />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl'>${product.price}</span>
          <span className='font-medium text-md'>{product.title}</span>
          <span className='font-light text-sm'>{product.description}</span>
          </p>
      </div>
    </aside>
  )
}
