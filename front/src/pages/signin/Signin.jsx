import React, {  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';
import { isValidEmail, isValidPassword } from '../../components/Utils';

// REDUX
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailed } from '../../actions/auth.action';



function Signin() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        const storedRememberMe = localStorage.getItem("rememberMe") === "true";
        if (storedRememberMe) {
            setEmail(storedEmail || "");
            setPassword(storedPassword || "");
            setRememberMe(storedRememberMe);
        }
    }, []);

    // Mettre à jour les valeurs dans le localStorage lorsque le rememberMe change
    const handleRememberMeChange = (e) => {
    const isChecked = e.target.checked;
    setRememberMe(isChecked);

    if (!isChecked) {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      setEmail('');
      setPassword('');
    }
  };

    const handleForm = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {

            setErrorMessage("Invalid email adress");
            return;
        }
        if (!isValidPassword(password)) {
            setErrorMessage("Invalid password");
            return;
        }


        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
                dispatch(loginSuccess(token));
                if (rememberMe) {
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                    localStorage.setItem("rememberMe", true);
                } else {
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                    localStorage.removeItem("rememberMe");
                }
               navigate('/user');
            } else {
                setErrorMessage("Incorrect email/password");
                dispatch(loginFailed(error));
            }
        } catch (error) {
            console.error(error);
        }
    }
    
        
    
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
                    <form onSubmit={e => handleForm(e)}>
                        <div className='input-wrapper'>
                            <label htmlFor='mail'>User email</label>
                            <input 
                                type='email' 
                                name='email'
                                id='mail' 
                                value={email}
                                
                                onChange={(event) => setEmail(event.target.value)}
                                
                            />
                                
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='password'>Password</label>
                            <input 
                                type='password'
                                name='password'
                                id='password'
                                value={password}
                                
                                onChange={(event) => setPassword(event.target.value)}
                             />
                                
                        </div>

                        <div className='input-remember'>
                            <input 
                                type='checkbox' 
                                id='remember-me'
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                            />
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