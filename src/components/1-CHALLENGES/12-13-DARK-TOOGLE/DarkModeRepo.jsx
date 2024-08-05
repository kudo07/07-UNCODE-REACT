import { useState } from 'react';
import Children from './Children';

const DarkModeRepo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      style={{
        background: isDarkMode ? 'white' : 'black',
        color: isDarkMode ? 'black' : 'white',
      }}
    >
      <p>this is the isDark Mode</p>
      <h1>Passing to the children the state and setter function</h1>
      <Children isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default DarkModeRepo;
