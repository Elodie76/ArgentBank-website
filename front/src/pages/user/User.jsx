import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';
import Account from '../../components/account/Account';




const User = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/signin');
        }
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem('authToken');
};

    return (
        <div className='page-container'>
            <Navigation 
                iconUser='fa fa-user-circle'
                userName= 'Tony Jarvis'
                SignInOut='Sign Out'
                iconInOut='fa fa-sign-out'
                onLogOut={handleSignOut}
            />
            <main className='main bg-dark'>
            <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <Button 
                        title='Edit Name' 
                        className='edit-button' 
                    />
            </div>    
            <h2 className="sr-only">Accounts</h2>


            <Account
                accountTitle='Argent Bank Checking (x8349)'
                accountAmount='$2,082.79'
                accountAmountDescription='Available Balance'
            />
            <Account
                accountTitle='Argent Bank Savings (x6712)'
                accountAmount='$10,928.42'
                accountAmountDescription='Available Balance'
            />
            <Account
                accountTitle='Argent Bank Credit Card (x8349)'
                accountAmount='$184.30'
                accountAmountDescription='Current Balance'
            />
            </main>
            <Footer />
        </div>
    );
};

export default User;