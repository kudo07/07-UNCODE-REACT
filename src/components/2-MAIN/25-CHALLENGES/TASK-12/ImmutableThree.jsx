import React from 'react';

const ImmutableThree = () => {
  const [data, setData] = useState({
    name: 'Dhruvkumar',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      pinCode: '12345',
    },
  });
  //   Instead of directly modifying the address object, a new address object is created using the spread operator with the updated pinCode.
  // A new data object is then created with the updated address.
  // The state is updated with this new data object using setData.
  const changePinCode = () => {
    // create a new address object with the updated pinCode
    const newAddress = { ...data.address, pinCode: '54321' };
    // create a new data object with the updated address
    const newData = { ...data, address: newAddress };
    // update the state with the new data object
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

export default ImmutableThree;
// Immutability Without Object.freeze: By creating new objects for updates rather than modifying existing ones directly, we maintain immutability without using Object.freeze.
// State Updates in React: This approach ensures that React can properly detect state changes and trigger re-renders.
// Simpler and More Efficient: Avoiding Object.freeze simplifies the code and improves performance by reducing unnecessary operations.
