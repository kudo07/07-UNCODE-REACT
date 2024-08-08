// f the nested address object is not frozen, then you can change its properties directly even if the top-level data object is frozen. This is because Object.freeze only prevents modifications to the properties at the level it is applied to, not to the properties of nested objects unless those nested objects are also explicitly frozen.

// Here's the modified code where the address object is not frozen, allowing the changePinCode function to work:
import React from 'react';

const ImmutableNestedTwo = () => {
  const [data, setData] = useState(
    Object.freeze({
      name: 'Dhruvkumar',
      //   The address object is no longer frozen. Only the top-level data object is frozen.
      address: {
        street: '123 Main St',
        city: 'Anytown',
        pinCode: '12345',
      },
    })
  );
  // as the address is not frozen so the nested pin can be changes directly
  // address is not frozen
  //   Since address is not frozen, you can directly modify its properties.
  // However, to maintain immutability, a new address object is created with the updated pinCode.
  // A new data object is created with the new address, and this new data object is frozen before updating the state.

  const changePinCode = () => {
    const newData = { ...data, address: { ...data.address, pin: '7654321' } };
    setData(Object.freeze(newData));
  };
  // A new object is created with the updated name and frozen again. This updates the state with a new top-level object.
  const changeName = () => {
    // create  a new object with the updated name
    const newData = Object.freeze({ ...data, name: 'John' });
    setData(newData);
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

export default ImmutableNestedTwo;
// Triggering Re-renders: Direct modifications to nested objects won’t trigger React re-renders unless a new state object is created and set. This is why setData(Object.freeze({ ...data })) is used after modifying pinCode
