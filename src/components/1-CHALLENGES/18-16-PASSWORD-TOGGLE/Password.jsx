import { useState } from 'react';

const Password = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValueVisible, setIsInputValueVisible] = useState(false);
  const thresholdMet = inputValue.length >= 8;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleToggleVisibility = () => {
    setIsInputValueVisible(!isInputValueVisible);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (thresholdMet) {
      alert('Password submitted');
    } else {
      alert('You need a longer password');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Password:::</label>
        <span style={{ color: thresholdMet ? 'green' : 'red' }}>
          {inputValue.length}
        </span>
        <input
          type={isInputValueVisible ? 'text' : 'password'}
          placeholder="enter a password"
          id="limited-text-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" onClick={handleToggleVisibility}>
          {isInputValueVisible ? '🙊' : '🙈'}
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Password;
