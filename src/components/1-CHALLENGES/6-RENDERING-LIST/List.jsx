const List = () => {
  const friends = [
    { id: 893, name: 'Lynn' },
    { id: 871, name: 'Alex' },
    { id: 982, name: 'Ben' },
    { id: 61, name: 'Mikenzi' },
  ];
  const arr = ['a', 'b', 'c'];
  // The Array.map method in JavaScript has a callback that receives 3 arguments, the current element in the list, the index, and a reference to the original array. If you don't have a
  // unique key available in your data, using the index as the key works – assuming you're not mutating the array.
  return (
    <>
      <ul>
        {friends.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
