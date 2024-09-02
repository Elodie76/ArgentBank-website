import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';

const User = () => {
    return (
        <div>
            <Navigation />
            <main className='main bg-dark'>
                <h1>User</h1>    
                <h2 class="sr-only">Accounts</h2>
            </main>
            <Footer />
        </div>
    );
};

export default User;