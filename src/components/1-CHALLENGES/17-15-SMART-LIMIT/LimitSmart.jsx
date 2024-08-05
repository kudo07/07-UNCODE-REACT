import React, { useState } from 'react';

const LimitSmart = () => {
  const [input, setInput] = useState('');
  const remaining = 20 - input.length;
  const limitExceed = remaining < 0;
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  // c
  const handleSubmit = (e) => {
    e.preventDefault();
    if (limitExceed) {
      alert('The input exceeds the character limit. Please shorten your text.');
    } else {
      setInput('');
      alert('Thanks for your submission');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span style={{ color: limitExceed ? 'red' : 'black' }}>
          Characters remaining:{remaining}
        </span>
      </div>
      <input
        type="text"
        placeholder="enter some text"
        id="limited-text-input"
        value={input}
        onChange={handleInput}
      />
      <button>Submit</button>
    </form>
  );
};

export default LimitSmart;
