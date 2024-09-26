import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import FormEditSurname from '../../components/edit-profile/formEditSurname';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';
import Account from '../../components/account/Account';
import { useDispatch, useSelector } from 
'react-redux';
import { userProfile } from '../../actions/user.action';
import { loginSuccess } from '../../actions/auth.action';


const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const storedToken = localStorage.getItem('token');
    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.user.userData);

   
    
    useEffect(() => {
        if (!storedToken && !token) {
            navigate('/signin');
        } else if (storedToken && !token) {
            dispatch(loginSuccess(storedToken));    
        }else {
            const userData = async () => {
                try {
                    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json(); 

                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstName: data.body.firstName,
                            lastName: data.body.lastName,
                            userName: data.body.userName
                        }
                        
                        dispatch(userProfile(userData));
                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        }
    }, [dispatch, token, navigate]);
            
        

    const handleSignOut = () => {
        localStorage.removeItem('userData');
        dispatch(logout());

};

    return (
        <div className='page-container'>
            <Navigation 
                iconUser='fa fa-user-circle'
                userName= 'pseudo'
                SignInOut='Sign Out'
                iconInOut='fa fa-sign-out'
                onLogOut={handleSignOut}
            />
            <main className='main bg-dark'>
            <div className="header">
                    <h1>Welcome back<br />{userData.firstName} {userData.lastName} !</h1>
                    <Button 
                        title='Edit Name' 
                        className='edit-button' 
                    />
            </div>    
            <FormEditSurname />
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