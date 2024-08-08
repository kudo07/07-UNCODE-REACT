import React, { useState } from 'react';

const ArraySort = () => {
  const [numbers, setNumbers] = useState([3, 1, 4, 1, 5, 9]);
  const sortNumbers = () => {
    setNumbers((prevNumbers) => [...prevNumbers].sort((a, b) => a - b));
    // if(a-b>0){ return -1}
    // else if(a-b==0) return 0
    // else return 1
    // means ascending
  };
  return (
    <div>
      <h1>Numbers</h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={sortNumbers}>Sort</button>
    </div>
  );
};

export default ArraySort;
// The sortNumbers function sorts the array immutably by first creating a shallow copy with [...], then applying the sort method. This ensures that the original array in state is not mutated.
