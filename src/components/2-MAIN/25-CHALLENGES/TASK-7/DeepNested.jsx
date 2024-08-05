import React, { useState } from 'react';

const DeepNested = () => {
  const [state, setState] = useState({
    user: {
      profile: {
        name: 'Chris',
        preferences: {
          theme: 'dark',
          notification: true,
        },
      },
    },
  });
  const updateTheme = (newTheme) => {
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        profile: {
          ...prevState.user.profile,
          preferences: {
            ...prevState.user.profile.preferences,
            theme: newTheme,
            ...prevState.notification,
          },
        },
      },
    }));
  };
  return (
    <div>
      <h1>User Prefernces</h1>
      <p>Theme:{state.user.profile.preferences.theme}</p>
      <button onClick={() => updateTheme('light')}>Change theme</button>
    </div>
  );
};
// Spreading State: The outermost object is spread first to ensure that other parts of the state remain unchanged.
// Updating Nested Properties: The nested properties (user, profile, preferences) are also spread to update the specific property (theme) while keeping other properties intact
export default DeepNested;
