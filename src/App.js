import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
      setResults(data.results)
    });
  }, []); // adding an empty array to hold the data.
  
  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard 
            key = {index}
            avatarUrl = {result.picture.large}
            name = {result.name.first}
            email = {result.email}
            age = {result.dob.age}
          />
        )
      })}
    </div>
  );
}

export default App;