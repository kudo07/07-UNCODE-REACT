import React, { useState } from 'react';

// Shallow Copy Immutability
// Shallow Copy Immutability means that only the top-level properties of an object are immutable, while the nested objects or arrays are still mutable. In other words, the immutability does not extend recursively into nested structures.
const ImmutableNested = () => {
  const [data, setData] = useState(
    Object.freeze({
      name: 'Abc',
      address: Object.freeze({
        street: '123  main st',
        city: 'anytown',
        pincode: '123445',
      }),
    })
  );
  const changePinCode = () => {
    // this will not work address is frozen
    // This will not work because address is frozen. Direct changes to address.pinCode are not allowed.
    data.address.pincode = '654321';
  };
  // A new object is created with the updated name and frozen again. This updates the state with a new top-level object.
  const changeName = () => {
    // create  a new object with the updated name
    const newData = Object.freeze({ ...data, name: 'John' });
    setData(newData);
    // to trigger the re render we make the new object
  };
  // To update a nested property:
  // A new address object is created with the updated pinCode and frozen.
  // A new data object is created with the updated address and frozen.
  // The state is then updated with this new data object.
  const updatedAddress = () => {
    // to update a nested object, you must create new objects for all levels
    const newAddress = Object.freeze({ ...data.address, pincode: '54321' });
    const newData = Object.freeze({ ...data, address: newAddress });
    setData(newData);
  };
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h2>
        Address: {data.address.street}, {data.address.city},{' '}
        {data.address.pincode}
      </h2>
      <button onClick={changePinCode}>Change Pin Code (will not work)</button>
      <button onClick={changeName}>Change Name</button>
      <button onClick={updatedAddress}>Update Address</button>
    </div>
  );
};

export default ImmutableNested;

// const [data, setData] = useState(Object.freeze({
//   name: 'Dhruvkumar',
//   address: Object.freeze({
//     street: '123 Main St',
//     city: 'Anytown',
//     pinCode: '12345'
//   })
// }));
// Object.freeze is applied to both the top-level data object and the nested address object, making both of them immutable at their respective levels.
// Top-Level Immutability: Using Object.freeze on the data object ensures that its top-level properties cannot be changed.
// Nested Objects: Nested objects are not automatically frozen. If they are not explicitly frozen, their properties can be changed.
// Updates: To update a nested object’s property in an immutable fashion, you need to create new objects for each level and apply Object.freeze to each of them.
// these side effects will cause re render ans these immutable we nneeed to make a new object for change to ticj the re render
