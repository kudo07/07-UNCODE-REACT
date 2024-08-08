import React, { useState } from 'react';
// To achieve the same immutability behavior without using the Immutable.js library, you can use JavaScript's Object.freeze to create shallowly immutable objects. Here's an example of how to do it with React and the useState hook:
// Immutable.js is a library that provides persistent immutable data structures, making it easier to work with immutable data.

const ImmutableSort = () => {
  const [data, setData] = useState(Object.freeze({ count: 0 }));
  //   The initial state is set with an object { count: 0 }.
  // Object.freeze makes this object immutable, meaning its properties cannot be changed or added.
  const increment = () => {
    // create new object witht he updateCoun value
    const newData = Object.freeze({ ...data, count: data.count + 1 });
    // In this example, Object.freeze is used to ensure that the data object is immutable. Each time the incrementCount function is called, a new frozen object is created with the updated count value, and setData updates the state with this new object. This approach maintains immutability without requiring the Immutable.js library.
    setData(newData);
    //     When incrementCount is called:
    // A new object is created using the spread operator { ...data, count: data.count + 1 }.
    // The spread operator creates a shallow copy of data. This new object has the same properties as data, but in a new object reference.
    // The count property is updated by incrementing its current value (data.count + 1).
    // Object.freeze is then applied to this new object, making it immutable.
    // setData(newData) updates the state with this new frozen object.
  };
  return (
    <div>
      <h1>Count: {data.count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ImmutableSort;
// Shallow Copy:

// When you use the spread operator { ...data }, it creates a new object with copies of the properties of data.
// This is a shallow copy because it only copies the top-level properties. If data had nested objects or arrays, the references to those nested objects or arrays would still point to the same memory locations as in the original data object.
// Immutability:

// Object.freeze makes the top-level properties of the object immutable.
// If the object has nested structures, Object.freeze does not affect those nested structures; they remain mutable unless they are also explicitly frozen.
// State Updates in React:

// In React, immutability is important because it helps with the predictability of state updates and the ability to easily detect changes for re-rendering.
// By creating a new object every time the state changes, React can determine that a change has occurred and trigger a re-render.

// Example of Shallow vs. Deep Copy:
// Shallow Copy:

// javascript
// Copy code
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { ...obj1 };
// obj2.b.c = 3;
// console.log(obj1.b.c); // 3 (because obj2.b is still the same reference as obj1.b)
// Deep Copy:

// javascript
// Copy code
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.b.c = 3;
// console.log(obj1.b.c); // 2 (because obj2.b is a different object than obj1.b)
// Using Object.freeze with shallow copies ensures that the state updates are immutable at the top level, promoting better practices in React state management.
