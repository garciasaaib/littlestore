import { useContext } from 'react'
import { ShoppingCartContext } from '../../context';
import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon } from '../Icons'
export const Navbar = () => {
  // styles logical
  let activeStyle ="underline underline-offset-2"
  let activeFun = ({isActive})=> isActive ? activeStyle : undefined
  
  // context
  const context = useContext(ShoppingCartContext)
  return (
    <nav className='flex justify-between items-center w-full py-5 px-8 text-sm font-light'>
      <ul className='flex justify-between items-center gap-3'>
        <li className='font-semibold text-lg'><NavLink to='/'>Shopi</NavLink></li>
        <li><NavLink className={activeFun} to='/' >All</NavLink></li>
        <li><NavLink className={activeFun} to='/clothes'>Clothes</NavLink></li>
        <li><NavLink className={activeFun} to='/electronics'>Electronics</NavLink></li>
        <li><NavLink className={activeFun} to='/fornitures'>Fornitures</NavLink></li>
        <li><NavLink className={activeFun} to='/other'>Other</NavLink></li>
      </ul>

      <ul className='flex justify-between items-center gap-3'>
        <li className='text-black/60'>garciasaaib@gmail.com</li>
        <li><NavLink className={activeFun} to='/my-orders'>My Orders</NavLink></li>
        <li><NavLink className={activeFun} to='/my-account'>My Account</NavLink></li>
        <li><NavLink className={activeFun} to='/signin'>Sign In</NavLink></li>
        <li className='flex gap-1'><ShoppingCartIcon className="h-6 w-6"/> {context.cartProducts.length}</li>
      </ul>
    </nav>
  )
}
