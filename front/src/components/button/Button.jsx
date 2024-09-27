import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return ( 
            <div >
                {/* <NavLink className={props.txtColor} >
                      {/* to={'/user'} */}
                    {/* <p className={props.styleAjust}>{props.title}</p> */}
                {/* </NavLink>  */} 
                <input 
                    className={props.className} 
                    type="submit"
                    value={props.title}
                    onClick={props.onClick}
                />
            </div>
        
    );
};

export default Button;