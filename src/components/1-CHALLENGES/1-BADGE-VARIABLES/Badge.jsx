import React from 'react';

const Badge = () => {
  const name = 'Tyler McGinnis';
  const handle = 'tylermcginnis';
  const img = 'https://avatars0.githubusercontent.com/u/2933430';
  return (
    <div>
      <p>Today is {new Date().toLocaleDateString()}</p>;
      <div>
        <img src="{name}" alt="bage" />
        <div>
          <h4>{name}</h4>
          <p>@{handle}</p>
        </div>
      </div>
    </div>
  );
};

export default Badge;
