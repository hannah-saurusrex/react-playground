import React from 'react';

const ContactCard = () => {
    return (
        <div className="contact-card">
            <img 
                src="https://via.placeholder.com/150" 
                alt="profile image placeholder">
            </img>
            <div className="user-details">
                <p>Name: Jenny Han</p>
                <p>Email: jenny.han@fake.com</p>
                <p>Age: 25</p>
            </div>
        </div>
    )
}

export default ContactCard;