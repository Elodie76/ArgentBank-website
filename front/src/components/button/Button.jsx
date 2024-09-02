import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return (
        <div>
            
            <button className={props.className}>
                <NavLink className={props.txtColor} to={'/user'}>
                    <p className={props.styleAjust}>{props.title}</p>
                </NavLink> 
            </button>
        </div>
    );
};

export default Button;