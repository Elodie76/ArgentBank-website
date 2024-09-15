import React, { useRef, } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/auth.action';



const Signin = () => {
    // hook pour récupérer les données des inputs du formulaire de connection
    const form = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const error = useSelector((state) => state.auth.error); // Récupère l'erreur depuis Redux
    //  console.log("Error from Redux", error);
 
    const handleForm = async (e) => {
        e.preventDefault();

        const postData = {
            email: form.current[0].value,
            password: form.current[1].value,
        };
        dispatch(loginUser(postData)).then(() => {
            navigate('/user'); // Redirige uniquement si tout est ok
        });
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
                    <form ref={form} onSubmit={e => handleForm(e)}>
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
                        {/* {error && <p className='error-message'>{error}</p>} */}
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