import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };
  const handleMinus = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };
  return (
    <div>
      <button onClick={handlePlus}>+</button>
      {count}
      <button onClick={handleMinus}>-</button>
    </div>
  );
};

export default Counter;
