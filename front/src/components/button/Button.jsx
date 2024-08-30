import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return (
        <div>
            
            <button className='{props.className}'>
                <NavLink to={'/user'}>
                    <p>{props.title}</p>
                </NavLink> 
            </button>
        </div>
    );
};

export default Button;