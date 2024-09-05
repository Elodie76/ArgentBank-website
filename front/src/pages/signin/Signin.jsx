import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';

const Signin = () => {
    return (
        <div className='page-container'>
            <Navigation
                SignInOut='Sign In'
                icon='fa fa-user-circle'
            />
            <main className="main bg-dark">
                <section className='sign-in-content'>
                    <i className='fa fa-user-circle sign-in-icon'></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className='input-wrapper'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' id='username' />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' />
                        </div>
                        <div className='input-remember'>
                            <input type='checkbox' id='remember-me' />
                            <label htmlFor='remember-me'>Remember me</label>
                        </div>
                        <Button title='Sign In' className='sign-in-button' txtColor='btn-txt-color' styleAjust='p' />
                    </form>
                </section>    
            </main>
            <Footer />
        </div>
    );
};

export default Signin;