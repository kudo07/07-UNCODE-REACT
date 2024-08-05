import React, { useEffect, useState } from 'react';
// using state
const TaskOne = () => {
  const [items, setItems] = useState(['apple', 'banana', 'orange']);
  const addItem = (newItem) => {
    // use the functional state update to avoid mutating or change the original array
    setItems((prevItems) => [...prevItems, newItem]);
    // setItems([...items, newItem]);
    // both have ends result are same just re render the every setItem for the functional way not the direct way
  };
  useEffect(() => {
    console.log('pshu');
  }, []);
  return (
    <div>
      <h1>Items</h1>
      {items.join(',')}
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        {/* remove the curly braces and implement rounded one */}
      </ul>
      <button onClick={() => addItem('Graphes')}>Add Graphes</button>
    </div>
  );
};

export default TaskOne;
// In React, maintaining immutable state is a common best practice. It helps prevent bugs and makes components easier to reason about. Here's a simple example of managing immutable state using functional state updates with useState and useReducer.
