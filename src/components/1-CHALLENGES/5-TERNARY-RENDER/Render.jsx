import React, { useState } from 'react';

const LactoseIntolerant = () => {
  return (
    <h1>
      <span role="img" aria-label="broccoli and strawberry">
        🥦🍓
      </span>
    </h1>
  );
};

const LactoseTolerant = () => {
  return (
    <h1>
      <span role="img" aria-label="milk and cheese">
        🥛🧀
      </span>
    </h1>
  );
};

const Render = () => {
  const [co, setCo] = useState(1);

  return <>{co === 1 ? <LactoseTolerant /> : <LactoseIntolerant />}</>;
};

export default Render;
