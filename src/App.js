import React from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  const contacts = [
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Jenny Han",
      email: "jenny.han@fake.com",
      age: 25,
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Paul Jones", 
      email: "paul.jones@fake.com",
      age: 35,
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Peter Pan",
      email: "peter.pan@fake.com",
      age: 100,
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Lisa Simpson",
      email: "lisa.simpson@fake.com",
      age: 11,
    },
  ];

  return (
    <div>
      {contacts.map((contact, index) => {
        return (
          <ContactCard 
            avatarUrl = {contact.avatarUrl}
            name = {contact.name} 
            email = {contact.email}
            age = {contact.age}
          />
        )
      })}
    </div>
  );
}

export default App;