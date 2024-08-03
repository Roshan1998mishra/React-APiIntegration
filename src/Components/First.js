import React, { useEffect, useState } from 'react';
import axios from 'axios';

const First = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <>
      <h1>API Integrate with Axios</h1>
      <div>
      <ul id='data'>
        {data.map((item, index) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      </div>
      
    </>
  );
}
export default First;

