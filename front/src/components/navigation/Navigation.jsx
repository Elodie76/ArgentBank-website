import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';




const Navigation = (props) => {
    const userData = useSelector((state) => state.user.userData);
    return (
        <nav >
            <ul className='main-nav'>
               <NavLink className='main-nav-logo' to={'/'}>
                    <li>
                        <img className='main-nav-logo-image' src="../../../../designs/img/argentBankLogo.png" alt="Argent Bank Logo" />
                        <h1 className="sr-only">Argent Bank</h1>
                    </li>
                    
                </NavLink>
                <div className='menu-links'>
                    <NavLink className='main-nav-item '  to={'/user'}>
                        <li className={props.display}>
                            <i className={props.iconUser}></i>
                            <p>{userData.username}</p>
                        </li>
                        
                    </NavLink> 
                    <NavLink 
                        className='main-nav-item' 
                        to={'/signin'}
                        onClick={props.onLogOut}
                    >
                        <li>
                            <i className={props.iconInOut}></i>
                            <p>{props.SignInOut}</p>
                        </li>
                        
                    </NavLink> 
                </div>
                
            </ul>
                
            
        </nav>
    );
};

export default Navigation;