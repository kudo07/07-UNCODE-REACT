// Example 1: Managing a Nested State Object
// When dealing with nested state objects, it's crucial to update the state immutably, avoiding direct mutation.
import React, { useState } from 'react';

const NestedExample = () => {
  const [user, setUser] = useState({
    name: 'John',
    address: {
      city: 'New York',
      state: 'NY',
    },
  });
  const updateCity = (newCity) => {
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        city: newCity,
      },
    }));
  };
  return (
    <div>
      <h1>User Information</h1>
      <p>{user.name}</p>
      <p>city:{user.address.city}</p>
      <p>state:{user.address.state}</p>
      <button onClick={() => updateCity('los angels')}>Move to La</button>
    </div>
  );
};

export default NestedExample;
