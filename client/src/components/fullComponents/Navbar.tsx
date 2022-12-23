import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartType, useShoppingCartContext } from '../../contexts/ShoppingCartContext';
import IconLinks from '../smallComponents/IconLinks'
import Breadcrumb from './Breadcrumb';
import SideMenu from './SideMenu';

const Navbar: React.FC = () => {

  const {shoppingCart, favouriteList} = useShoppingCartContext() as ShoppingCartType

  let shoppingCartAmount = shoppingCart.length
  useEffect(() => {
    shoppingCartAmount = shoppingCart.length
  }, [shoppingCart])

  let favouriteListAmount = favouriteList.length
  useEffect(() => {
    favouriteListAmount = favouriteList.length
  }, [favouriteList])

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  } 
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const toggleShoppingCart = () => {
    setShowShoppingCart(!showShoppingCart);
  } 







  return (
    <div id='navbar' className='top-navbar '>
      <div className='_container _navbar'>
        
        <h1 className='logo'>Fixxo.</h1>
        
        <section className={`navbar-menu ${showMenu ? "display" : ""}`} >
          <NavLink className='navbar-link' to='/' end>Home</NavLink>
          <NavLink className='navbar-link' to='/Categories' end>Categories</NavLink>
          <NavLink className='navbar-link' to='/Products' end>Products</NavLink>
          <NavLink className='navbar-link' to='/contact' end>Contacts</NavLink>
          <NavLink className='navbar-link' to='/admin' >Admin</NavLink>
          <button>Signin</button>
        </section>

        <section className='navbar-icons'>
          <IconLinks hideMobile = {false} link = "/serch"  icon = "fa-regular fa-magnifying-glass" />
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-arrows-repeat" />
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-heart" number={favouriteListAmount} />
          <IconLinks hideMobile = {false} link = "/shoppingcart" icon = "fa-regular fa-bag-shopping" click={toggleShoppingCart} number={shoppingCartAmount} />
          
          
          <button className={`mobile-menu ${showMenu ? "mobile-menu-open" : ""}`} onClick={toggleMenu}></button>
        </section>
      </div>
      <SideMenu show={showShoppingCart} onClick={() => setShowShoppingCart(false)}/>
    </div>
  )
}

export default Navbar