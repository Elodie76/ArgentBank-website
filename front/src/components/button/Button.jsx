import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return ( 
            <button className={props.className}>
                <NavLink className={props.txtColor} to={'/user'}>
                    <p className={props.styleAjust}>{props.title}</p>
                </NavLink> 
            </button>
        
    );
};

export default Button;