import React from 'react';

const Children = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div>
      Children
      <p>this is children</p>
      <br />
      <br />
      <button
        style={{
          background: isDarkMode ? 'white' : 'black',
          color: isDarkMode ? 'black' : 'white',
        }}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle the state of dark or white
        {isDarkMode ? 'white' : 'black'}
      </button>
    </div>
  );
};

export default Children;
