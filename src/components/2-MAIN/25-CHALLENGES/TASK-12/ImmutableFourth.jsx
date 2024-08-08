// Immutability means that once an object is created, it cannot be changed. Instead of modifying the existing object, you create a new object with the desired changes. This concept is crucial in functional programming and helps avoid unintended side effects.
// How Immutability Works in React
// In React, to update the state, you create a new object with the updated values rather than modifying the existing state object directly. Here's how it works step-by-step:

// Initial State:
// Define the initial state using useState.

// Create a New Object for Updates:
// When you need to update the state, create a new object that includes the changes.

// Update the State:
// Use the setState function to update the state with the new object.
const ImmutableFourth = () => {
  const [data, setData] = useState({
    name: 'Dhruvkumar',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      pinCode: '12345',
    },
  });
  //   useState initializes the state with an object containing name and address.
  const changePinCode = () => {
    // Create a new address object with the updated pinCode
    const newAddress = { ...data.address, pinCode: '54321' };
    // Create a new data object with the updated address
    const newData = { ...data, address: newAddress };
    // Update the state with the new data object
    setData(newData);
  };
  //   A new address object is created using the spread operator with the updated pinCode.
  // A new data object is created using the spread operator, which includes the updated address.
  // setData updates the state with the new data object.
  const changeName = () => {
    // Create a new data object with the updated name
    const newData = { ...data, name: 'John' };
    // Update the state with the new data object
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

export default ImmutableFourth;

//Immutability means that once an object is created, it cannot be changed. Instead of modifying the existing object, you create a new object with the desired changes. This concept is crucial in functional programming and helps avoid unintended side effects.
// Importance of Immutability in React
// Efficient Re-renders: React uses a virtual DOM to efficiently update the UI. When state changes, React compares the new state with the previous state to determine what has changed. By ensuring that state is immutable, you make it easier for React to detect changes, leading to more efficient re-renders.

// Predictability: Immutable data makes the application state predictable. Since the state cannot be changed directly, you avoid bugs related to state mutations, making debugging easier.

// Debugging: Immutability simplifies debugging because you can track changes by comparing previous and current state snapshots. Tools like Redux DevTools leverage this to provide time-travel debugging.

// const newAddress = { ...data.address, pinCode: '54321' };:
// The spread operator (...data.address) copies all properties from the existing address object.
// { pinCode: '54321' } updates the pinCode property in the new address object.
// const newData = { ...data, address: newAddress };:
// The spread operator (...data) copies all properties from the existing data object.
// { address: newAddress } updates the address property in the new data object.
// setData(newData); updates the state with the new data object.
