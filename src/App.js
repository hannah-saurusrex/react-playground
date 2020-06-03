import React from 'react';

const App = () => {
  const title = "Hello world this is dynamic";
  return (
    <div>
      <h1>{title}</h1>
      <h2 onClick={() => alert("you clicked the message")}>
        React project, contact list, coming soon!</h2>
    </div>
  )
}

export default App;