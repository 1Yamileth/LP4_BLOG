import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Buttonlogin';
import { useAuth0 } from '@auth0/auth0-react';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    /* Actualizar el estado "click" cuando el valor de "isAuthenticated" cambie */
    setClick(false); // Cerrar el menú cuando se produce el cambio de autenticación
  }, [isAuthenticated]);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <span>El Baúl De Los Recuerdos</span>
            <i className='fa-solid fa-pen-fancy'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {/* Icono de tres rayas */}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
  
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle nav-links'
                href='#'//RUTA DEL LA LISTA DE BLOG
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                onClick={() => setDropdown(!dropdown)}
              >
                Blogs
              </a>
              {dropdown && (
                <ul className='  dropdown-menu'>
                  <li>
                    <Link to='/create' onClick={closeMobileMenu}>
                      Crear Blog
                    </Link>
                  </li>
                  <li>
                    <Link to='/edit' onClick={closeMobileMenu}>
                     Editar Blog
                    </Link>
                  </li>
                  <li>
                    <Link to='/recordList' onClick={closeMobileMenu}>
                     Lista De Blogs
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className='nav-item'>
              <Link
                to='/categoria'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Categoria
              </Link>
            </li>
            {isAuthenticated && (
              <li className='nav-item'>
                <Link
                  to='/create'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Crear Blog
                </Link>
              </li>
            )}
          </ul>
        </div>
     
  

        {isAuthenticated ? (
          <div className='navbar-container'>
            <div className='user-info'>
              <div className='user-avatar-container'>
                <img className='user-avatar' src={user.picture} alt={user.name} />
              </div>
              <span className='user-name'>{user.name}</span>
            </div>
            <div className='navbar-container'>
              <Button buttonStyle='btn--outline' onClick={() => logout()}>
                LOG OUT
              </Button>
            </div>
          </div>
        ) : (
          <div className='navbar-container'>
            {button && (
              <Button buttonStyle='btn--outline' onClick={() => loginWithRedirect()}>
                Iniciar sesión
              </Button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;




/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Buttonlogin';
import { useAuth0 } from '@auth0/auth0-react';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    /* Actualizar el estado "click" cuando el valor de "isAuthenticated" cambie 
    setClick(false); // Cerrar el menú cuando se produce el cambio de autenticación
  }, [isAuthenticated]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <span>El Baúl De Los Recuerdos</span>
            <i className='fa-solid fa-pen-fancy'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {/* Icono de tres rayas /}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/biografia' className='nav-links' onClick={closeMobileMenu}>
                Biografia
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/categorias' className='nav-links' onClick={closeMobileMenu}>
                Categorias A Encontrar
              </Link>
            </li>
            {button && !isAuthenticated ? (
              <li className='nav-item'>
                <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            ) : null}
          </ul>
        </div>

        {isAuthenticated ? (
          <div className='navbar-container'>
            <div className='user-info'>
              <div className='user-avatar-container'>
                <img className='user-avatar' src={user.picture} alt={user.name} />
              </div>
              <span className='user-name'>{user.name}</span>
            </div>
            <div className='navbar-container'>
              <Button buttonStyle='btn--outline' onClick={() => logout()}>
                LOG OUT
              </Button>
            </div>
          </div>
        ) : (
          <div className='navbar-container'>
            {button && (
              <Button buttonStyle='btn--outline' onClick={() => loginWithRedirect()}>
                Iniciar sesión
              </Button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar; */