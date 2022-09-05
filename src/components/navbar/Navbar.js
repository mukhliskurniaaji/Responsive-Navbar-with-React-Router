import React, { useState } from 'react'
import { MenuList } from './MenuList';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const[clicked, setClicked] = useState(false);

  const menuList = MenuList.map((listMenu, index) => {
    return (
      <li key={index}>
        <NavLink exact to={listMenu.url} activeClassName="active">
          {listMenu.title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <nav>
      <div className='logo'>
        VPN<font>Lab</font>
      </div>
      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'menu-list' : "menu-list close"}>
        {menuList}
      </ul>
    </nav>
  )
}

export default Navbar;