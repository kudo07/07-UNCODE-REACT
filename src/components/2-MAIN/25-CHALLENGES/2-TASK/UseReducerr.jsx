import React, { useReducer } from 'react';
//useReducer is another hook that can help manage complex state logic while keeping state updates immutable.
const initialState = ['Apple', 'Banana', 'Orange'];

const itemsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
};
const UseReducerr = () => {
  const [items, dispatch] = useReducer(itemsReducer, initialState);
  const addItem = (newItem) => {
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };
  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key="index">{item}</li>
        ))}
      </ul>
      <button onClick={() => addItem('graphes')}>Add Graphes</button>
    </div>
  );
};

export default UseReducerr;
// Functional Updates: In the useState example, using a functional update (prevItems => [...prevItems, newItem]) ensures the state is not directly mutated. Instead, a new array is created with the new item added.

// Reducer Pattern: The useReducer example demonstrates a reducer pattern, which is beneficial for more complex state logic. It uses actions and a reducer function to manage state updates.

// Immutable Operations: In both examples, operations like spreading (...prevItems) ensure that the original state is not modified.
// Using immutable state management techniques can lead to more predictable and bug-free code, especially when dealing with nested or complex state objects.
