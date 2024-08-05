import React from 'react';
const USER_DATA = {
  name: 'Ben Adam',
  img: 'https://avatars.githubusercontent.com/u/6645985',
  handle: 'benadam11',
};
// If a prop has a nested object, there are a few ways to access those properties.
//  The most common is using JavaScript's "dot notation".
function Badge({ style, user, addFriend, children }) {
  return (
    <div style={style}>
      <img src={user.img} alt={user.name} />
      <div>
        <h4>{user.name}</h4>
        <p>@{user.handle}</p>
        <button onClick={addFriend}>add</button>
        {/* onClick={handleClick()} this is wrong invocation */}
        {children}
      </div>
    </div>
  );
}
const ObjectProp = () => {
  return (
    <div>
      {' '}
      {/* .passing the object and button means function prop */}
      {/* <Badge
        user={USER_DATA}
        style={{
          width: 300,
          margin: '0 auto',
          border: '1px solid var(--beige-10)',
          borderRadius: 8,
          backgroundColor: 'black',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center',
        }}
        addFriend={() => alert('hey! wanna ad')}
      /> */}
      {/* passing the children prop */}
      <Badge
        user={USER_DATA}
        style={{
          width: 300,
          margin: '0 auto',
          border: '1px solid var(--beige-10)',
          borderRadius: 8,
          backgroundColor: 'black',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center',
        }}
        // function prop
        // Remember that when you pass a function as props,
        //  you want to pass a reference to the function, not an invocation of the function.
        addFriend={() => alert('hey! wanna ad')}
      >
        <p>hello from second time Badge</p>
      </Badge>
    </div>
  );
};

export default ObjectProp;
