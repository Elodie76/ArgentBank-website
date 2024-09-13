import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';

// REDUX




const Signin = () => {
    // hook pour récupérer les données des inputs du formulaire de connection
    const form = useRef();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

 
    const handleForm = async (e) => {
        e.preventDefault();

        const postData = {
            email: form.current[0].value,
            password: form.current[1].value,
        };

        try {
            const response = await Axios.post('http://localhost:3001/api/v1/user/login', postData);
            console.log(response);
            localStorage.setItem('authToken', response.data.token);
            setErrorMessage('');
            navigate('/user');
        } catch (error) {
            setErrorMessage('Connexion échouée. Veuillez vérifier vos identifiants.');
            console.log('Login failed',error);
        }
    };
    
    return (
        <div className='page-container'>
            <Navigation
                SignInOut='Sign In'
                iconInOut='fa fa-user-circle'
            />
            <main className="main bg-dark">
                <section className='sign-in-content'>
                    <i className='fa fa-user-circle sign-in-icon'></i>
                    <h1>Sign In</h1>
                    <form ref={form} onSubmit={handleForm}>
                        <div className='input-wrapper'>
                            <label htmlFor='mail'>User email</label>
                            <input 
                                type='email' 
                                name='email'
                                id='mail' />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='password'>Password</label>
                            <input 
                                type='password'
                                name='password'
                                id='password' />
                        </div>

                        <div className='input-remember'>
                            <input type='checkbox' id='remember-me' />
                            <label htmlFor='remember-me'>Remember me</label>
                        </div>
                        {errorMessage && <p className='error-message'>{errorMessage}</p>}
                        <Button 
                        type='submit'
                        title='Sign In' className='sign-in-button' />
                    </form>
                </section>    
            </main>
            <Footer />
        </div>
    );
};

export default Signin;