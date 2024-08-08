import React from 'react';

const ImmutableSixth = () => {
  const [data, setData] = useState(
    Object.freeze({
      name: 'Dhruvkumar',
      address: Object.freeze({
        street: '123 Main St',
        city: 'Anytown',
        pinCode: '12345',
      }),
    })
  );
  const deepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
  const changePinCode = () => {
    // create the deep copy of the data object
    const newData = deepCopy(data);
    // update the pinCOde in the copied data
    newData.address.pinCode = '54321';
    // freeze the new data object to maintain immutability
    setData(
      Object.freeze({
        ...newData,
        address: Object.freeze(newData.address),
      })
    );
  };

  const changeName = () => {
    // create the deep copy of the dat object
    const newData = deepCode(data);
    // update the name in the copied data
    newData.name = 'John';
    // freeze the new data object to maintain immutability
    setData(
      Object.freeze({
        ...newData,
        address: Object.freeze(newData.address),
      })
    );
  };
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h2>
        Address: {data.address.street}, {data.address.city},{' '}
        {data.address.pinCode}
      </h2>
      <button onClick={changePinCode}>Change Pin Code</button>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default ImmutableSixth;
// In the scenario where you use Object.freeze on the initial state and then perform deep copying to create a new object for state updates, the original frozen object will not be mutated. Instead, the deep copy will ensure that you are working with a new, separate object, preserving the immutability of the original state.

// However, if you don't perform a deep copy and attempt to directly modify a nested property of the frozen object, then the nested property would remain immutable due to Object.freeze. To clarify, Object.freeze only affects the object it's directly applied to and does not make a deep freeze by default. Therefore, if the nested object is not frozen, changes to it won't affect the top-level frozen object directly, but the goal here is to prevent any form of mutation and maintain immutability by creating new objects for updates.
// The initial state and nested address are frozen to prevent direct modifications.
// A deep copy of the frozen state object is made.
// The new deep-copied object is modified.
// The modified object is then re-frozen before updating the state to maintain immutability.
// By creating a deep copy and then re-freezing the new state object before updating the state, you ensure that:

// The original frozen state object remains unchanged (immutable).
// The new state updates are done on a new object, preserving the immutability principle in React state management.
// This ensures that your application maintains immutability even with nested objects and updates.
// react renders when the state changes to make the state chane we make the functional approach to create the shallow copy of the original one and then modifying which simply means that the origianl one also mutating but it directly rather to mutatate throught the
// functional approachwhcih cause less bug and predicatable what happens in an ideal situation
// Immutability in React state management is crucial because it allows React to efficiently determine when to re-render components. When an object's state is updated in React, React performs a shallow comparison between the previous and the new state. If the new state is the same as the previous state, React does not trigger a re-render. Therefore, ensuring immutability guarantees that updates are correctly identified and the component re-renders appropriately.
// How Immutability Works with React
// Shallow Copy and Immutability:

// A shallow copy creates a new object with the same top-level properties as the original object. However, nested objects are still references to the same objects.
// For example, using the spread operator ({ ...data }) creates a new object for the top-level properties but does not deeply copy nested objects.
// Deep Copy for Nested Objects:

// A deep copy creates a new object and all nested objects, ensuring no references to the original object's nested properties.
// This is necessary to maintain immutability when dealing with nested objects.
// Object.freeze for Immutability:

// Object.freeze makes an object immutable by preventing any modifications to it.
// However, it only works at the top level unless applied recursively to nested objects.
// Why Deep Copy and Re-freezing is Necessary
// Triggering Re-renders:
// Direct modifications to nested objects won’t trigger React re-renders unless a new state object is created and set. This is why setData(Object.freeze({ ...data })) is used after modifying pinCode
// The initial state and the nested address object are frozen, preventing direct modifications.
// we used the freeze for direct modification happes and react doest not re renders in the nested object modification so for re render we make the spread opearator or deep copy for msaing the change and cause the re-renders
// This function creates a deep copy of an object, ensuring all levels are copied
// A deep copy of the state object is made using deepCopy(data).
// The necessary changes are made to the new, copied object.
// The new object is frozen using Object.freeze to maintain immutability.
// The state is updated with the new, frozen object.
// Summary
// Immutability ensures React can efficiently detect changes and trigger re-renders.
// Shallow copies are insufficient for nested objects, so deep copies are necessary.
// Object.freeze helps prevent accidental modifications to state objects.
// State updates should create new objects rather than modifying existing ones.
