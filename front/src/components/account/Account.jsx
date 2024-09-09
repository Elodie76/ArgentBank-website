import React from 'react';
import Button from '../button/Button';



const Account = (props) => {
    return (
        <section className='account'>
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.accountTitle}</h3>
                <p className="account-amount">{props.accountAmount}</p>
                <p className="account-amount-description">{props.accountAmountDescription}</p>
            </div>
            <div className="cta">
                <Button 
                    title='View transactions' 
                    className='transaction-button' 
                    txtColor='btn-txt-color' 
                    styleAjust='p' />
            </div>
        </section>
    );
};

export default Account;