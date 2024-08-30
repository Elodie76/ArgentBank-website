import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';

const Signin = () => {
    return (
        <div>
            <Navigation />
            <h1>Sign-in</h1>
            <Button title='Sign in' className='sign-in-button' />
            <Footer />
        </div>
    );
};

export default Signin;