// Example 5: Immutable Update with Immer

import { useState } from 'react';

// Immer is a library that allows you to work with immutable state in a more convenient way by using "proxies."
const ImmerExample = () => {
  const [state, setState] = useState({
    user: {
      name: 'Alice',
      age: 25,
    },
    hobbies: ['Reading', 'Cycling'],
  });
  const addHobby = (newHobby) => {
    setState((currentState) => ({
      user: {
        ...currentState.user,
      },
      hobbies: [...currentState.hobbies, newHobby],
    }));
  };
  return (
    <div>
      <h1>User Hobbies</h1>
      <p>Name: {state.user.name}</p>
      <p>Age: {state.user.age}</p>
      <ul>
        {state.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <button onClick={() => addHobby('Gardening')}>Add Hobby</button>
    </div>
  );
};
export default ImmerExample;
