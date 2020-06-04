import React, { useState } from 'react';

const ContactCard = () => {
    const [showAge, setShowAge] = useState(false); // this is a react hook
    
    return (
        <div className="contact-card">
            <img 
                src="https://via.placeholder.com/150" 
                alt="profile image placeholder">
            </img>
            <div className="user-details">
                <p>Name: Jenny Han</p>
                <p>Email: jenny.han@fake.com</p>
                <button onClick={()=> setShowAge(!showAge)}>Show Age</button>
                {showAge && <p>Age: 25</p>}
            </div>
        </div>
    )
}

export default ContactCard;