import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../actions/user.action';

const FormEditSurname = () => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);

    const [userName, setUserName] = useState(userData.userName || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    
        dispatch(updateProfile( userName ));
    };
    return (
        <div className="edit-profile-container">
            <h2>Edit user info</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="edit-input">
                            <label htmlFor="username">User name:</label>
                            <input
                                type="text"
                                id="username"
                                value={userName || ''}
                                // defaultValue={userData.username || ''}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text"
                                id="firstname" 
                                defaultValue={userData.firstName || ''}
                                disabled={true}
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text"
                                id="lastname" 
                                defaultValue={userData.lastName || ''}
                                disabled={true}
                            />
                        </div>
                        <div className="buttons">
                            <button className="edit-username-button" type='submit' >Save</button>
                            <button className="edit-username-button" type='button' onClick={() => setDisplay(!display)}>Cancel</button>
                        </div>
                        
                    </form>
        </div>
    );
};

export default FormEditSurname;