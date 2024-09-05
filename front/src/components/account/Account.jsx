import React from 'react';
import Button from '../button/Button';

const Account = (props) => {
    return (
        <section className='account'>
            <div class="account-content-wrapper">
                <h3 class="account-title">{props.accountTitle}</h3>
                <p class="account-amount">{props.accountAmount}</p>
                <p class="account-amount-description">{props.accountAmountDescription}</p>
            </div>
            <div class="cta">
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