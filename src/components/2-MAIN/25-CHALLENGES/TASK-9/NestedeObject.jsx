// Example 3: Updating a Deeply Nested Object in State
// When dealing with deeply nested objects, updating state immutably requires careful handling to ensure all levels of the object are correctly updated without direct mutation
import React, { useState } from 'react';

const NestedeObject = () => {
  const [state, setState] = useState({
    user: {
      name: 'Alice',
      contact: {
        email: 'abc@gmail.com',
        address: {
          street: '123 main st',
          city: 'Wondarland',
        },
      },
    },
  });
  const updateCity = (newCity) => {
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        contact: {
          ...prevState.user.contact,
          address: {
            ...prevState.user.contact.newCity,
            city: newCity,
          },
        },
      },
    }));
  };
  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {state.user.name}</p>
      <p>Email: {state.user.contact.email}</p>
      <p>City: {state.user.contact.address.city}</p>
      <button onClick={() => updateCity('New Wondarland')}>update</button>
    </div>
  );
};

export default NestedeObject;
