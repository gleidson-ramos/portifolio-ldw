import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src='../logo.svg' alt='' />

          <ul>
            <li>
              <div className='menu-item'>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </div>
            </li>
            <li>
              <div className='menu-item'>
                <NavLink activeClassName="active" to="/sobre">Sobre Nós</NavLink>
              </div>
            </li>
            <li>
              <div className='menu-item'>
                <NavLink activeClassName="active" to="/projetos">Projetos</NavLink>
              </div>
            </li>
            <li>
              <div className='menu-item'>
                <NavLink activeClassName="active" to="/habilidades">Habilidades</NavLink>
              </div>
            </li>
            <li>
              <div className='menu-item'>
                <NavLink activeClassName="active" to="/contato">Contato</NavLink>
              </div>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar
