import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai' //shopping icon
import { Cart } from './';
import { useSateContext } from '../context/StateContext';

const Navbar = () => {
   
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>H3RMES Store</Link>
      </p>
      <button type='button' className='cart-icon' onClick="">
        <AiOutlineShopping/>
        <span className='cart-item-qty'>
        </span>
      </button>
      <Cart/>
    </div>
  )
}

export default Navbar