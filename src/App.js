import React from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  return (
    <div>
      <ContactCard 
        avatarUrl="https://via.placeholder.com/150"
        name="Jenny Han" 
        email="jenny.han@fake.com"
        age = {25} />
      <ContactCard 
        avatarUrl="https://via.placeholder.com/150"
        name="Paul Jones" 
        email="paul.jones@fake.com"
        age = {35} />
      <ContactCard 
        avatarUrl="https://via.placeholder.com/150"
        name="Peter Pan" 
        email="peter.pan@fake.com"
        age = {44} />
    </div>
  );
}

export default App;