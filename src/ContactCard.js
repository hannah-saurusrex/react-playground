import React, { useState } from 'react';

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false); // this is a react hook
    
    return (
        <div className="contact-card">
            <img 
                src={props.avatarUrl} 
                alt="profile image placeholder">
            </img>
            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={()=> setShowAge(!showAge)}>Show Age</button>
                {showAge && <p>Age: {props.age}</p>}
            </div>
        </div>
    );
};

export default ContactCard;