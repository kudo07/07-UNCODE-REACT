import React, { useContext } from 'react';
import { UserContext } from './UserProvider';

const UserComponent = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div>
      <h1>User INformation</h1>
      <p>Name:{state.user.name}</p>
      <p>Email:{state.user.email}</p>
      <button
        onClick={() => dispatch({ type: 'UPDATE_NAME', payload: 'jOHN' })}
      >
        Change Name to John
      </button>
    </div>
  );
};

export default UserComponent;
