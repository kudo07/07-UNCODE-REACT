// Problem Statement
// You have an object in your React state that is frozen using Object.freeze. You want to update a nested property without mutating the original object. To maintain immutability, you need to create a deep copy of the object, make the necessary changes, and then re-freeze the new object before setting it as the new state.
import React from 'react';

const ImmutableSeventh = () => {
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
  const deepCopyAndFreeze = (obj) => {
    // Create a deep copy of the object
    const copy = JSON.parse(JSON.stringify(obj));
    // Recursively freeze the deep copy to ensure immutability
    return deepFreeze(copy);
  };
  const deepFreeze = (obj) => {
    // retrieve the property names defined on the object
    const propNames = Object.getOwnPropertyNames(obj);
    // freeze properties before freezing self
    for (let name of propNames) {
      let value = obj[name];
      if (typeof value === 'object' && value !== null) {
        obj[name] = deepFreeze(value);
      }
    }
    return Object.freeze(obj);
  };
  const changePinCode = () => {
    // create a deep copy of the data object and freeze it
    const newData = deepCopyAndFreeze(data);
    // update the pinCode in the copied data
    newData.address.pinCode = '54321';
    // set the new frozen object as the state
    setData(deepFreeze(newData));
  };
  const changeName = () => {
    // create a deep copy of the data object and freeze it
    const newData = deepCopyAndFreeze(data);
    // update the name in the copied data
    newData.name = 'John';
    // set the new frozen object as the state
    setData(deepFreeze(newData));
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

export default ImmutableSeventh;
//? this is similar with the lesser number code this is recursive
// sixth one

//The data object and its nested address object are frozen using Object.freeze, making them immutable.
// deepCopyAndFreeze: Creates a deep copy of the object using JSON.parse(JSON.stringify(obj)), then recursively freezes the copy using deepFreeze.
// deepFreeze: Recursively freezes an object and all its nested objects, ensuring that the entire structure is immutable.
// When changing the pin code or name, the following steps are taken:
// Deep Copy: The data object is deeply copied and frozen using deepCopyAndFreeze.
// Update: The relevant property (e.g., pinCode or name) is updated on the copied object.
// Re-freeze: The updated object is re-frozen using deepFreeze to ensure it remains immutable.
// Set State: The newly frozen object is set as the new state, ensuring immutability is preserved.
// Why This Matters
// Immutability: The original data object remains unchanged, preserving immutability.
// Efficient React Re-renders: By setting a new frozen object as the state, React can efficiently detect changes and trigger necessary re-renders.
// Deep Freeze: Ensures that the entire object structure, including nested objects, is immutable, preventing accidental mutations.
// This approach ensures that your state remains fully immutable while allowing for state updates in a controlled and predictable manner.
