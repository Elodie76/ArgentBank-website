import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav >
            <ul className='main-nav'>
               <NavLink className='main-nav-logo' to={'/'}>
                    <li>
                        <img className='main-nav-logo-image' src="../../../../designs/img/argentBankLogo.png" alt="Argent Bank Logo" />
                        <h1 className="sr-only">Argent Bank</h1>
                    </li>
                    
                </NavLink>
                <NavLink className='main-nav-item' to={'/signin'}>
                    <li>
                        <i className="fa fa-user-circle"></i>
                        <p>Sign-in</p>
                    </li>
                    
                </NavLink> 
            </ul>
                
            
        </nav>
    );
};

export default Navigation;