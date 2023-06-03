import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { PlusIcon } from '../Icons';

export const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext)
  const showProduct = async () => {
    // context.openAside()
    // console.log('https://api.escuelajs.co/api/v1/products/' + data.id)
    fetch('https://api.escuelajs.co/api/v1/products/' + data.id)
    .then(response => response.json())
    // .then(product => console.log(product))
    .then(product => context.setProductDetails(product))
    .then(() => context.openAside())
  }
  return (
    <div
    className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    onClick={() => showProduct()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={data.image} alt="Headphones" />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => context.setCount(context.count + 1)}
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
}
