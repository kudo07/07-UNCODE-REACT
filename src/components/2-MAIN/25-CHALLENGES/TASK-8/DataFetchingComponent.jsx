import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const result = await response.json();
        console.log(result);

        setData((prevData) => [...prevData, ...result]);
      } catch (error) {
        console.log('error fetching data', error);
      }
    };
    fetchData();
  }, []);
  //   to run onl{item};y once
  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.slice(0, 20).map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;

// Fetching Data: The fetchData function fetches data from an API and updates the state using setData.
// Immutability with Spread Operator: The setData call uses the spread operator (...prevData, ...result) to add the new data to the existing state without mutating it directly.
