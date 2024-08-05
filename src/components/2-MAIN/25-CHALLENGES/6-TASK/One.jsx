import React from 'react';
import UserProvider from './UserProvider';
import UserComponent from './UserComponent';

const One = () => {
  return (
    <UserProvider>
      <UserComponent />
    </UserProvider>
  );
};

export default One;
