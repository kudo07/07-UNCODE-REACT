import React, { createContext, useReducer } from 'react';
const initialState = {
  user: {
    name: 'Jane',
    email: 'abc@gmail.com',
  },
};
export const UserContext = createContext();
// provide the object to the children components which the value attribute in whcih has object in values which later pass to the children
const userReducer = (state, action) => {
  // state: current state of the component
  // action: an object with type property that specifies the type of action being performed, adn an optional ' payload' property that contains additional data needed for the state updates

  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
      {/* the children are the userComponent */}
    </UserContext.Provider>
  );
};

export default UserProvider;
