import React, { useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      style={{
        background: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'dark',
        width: '100vw',
      }}
    >
      <p>helo</p>
      <div></div>
      <button
        style={{
          background: isDarkMode ? 'white' : 'black',
          color: isDarkMode ? 'black' : 'white',
        }}
        onClick={handleClick}
      >
        {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
      </button>
    </div>
  );
};

export default DarkMode;
