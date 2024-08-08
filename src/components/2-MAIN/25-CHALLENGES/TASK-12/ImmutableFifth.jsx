// When using the spread operator to create a new object, only the top-level properties are shallowly copied. If an object has nested objects, the nested objects will still refer to the same memory location as those in the original object. This means that changes to the nested objects in the new state can affect the original state.
// To achieve deep immutability, you need to ensure that all levels of nested objects are copied. Here’s how to handle this situation:
// Immutability with Object.freeze: Object.freeze prevents modifications to the object. Any attempt to modify the frozen object will fail, ensuring that the object remains unchanged.
// Deep Copying for State Updates: Deep copying creates a new object that is not frozen, allowing modifications. This new object is then used to update the state, preserving the immutability of the original object.
// A deep copy of the frozen object is made.
// The new object (which is not frozen) is modified.
// The state is updated with this new object.import React from 'react';
// Immutability in Practice
// Original Object Remains Unchanged:
// The original data object and its nested address object remain unchanged due to Object.freeze.

// State Updates with New Objects:
// Each state update involves creating a new, modified object (deep copy), which React uses to re-render the component. This ensures that the original state is immutable and that updates are handled correctly.
const ImmutableFifth = () => {
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
  const chargePinCode = () => {
    const newData = deepCopy(data);
    newData.address.pinCode = '54321';
    setData(newData);
  };
  const changeName = () => {
    const newData = deepCopy(data);
    newData.name = 'John';
    setData(newData);
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
};
export default ImmutableFifth;
// the deep copy doesnt refer to the orginal one
// The concept of immutability is maintained because:

// Original State: The original state (data object) remains frozen and unchanged.
// New State: Updates are applied to a new, deep-copied object, which is then used to update the state.
