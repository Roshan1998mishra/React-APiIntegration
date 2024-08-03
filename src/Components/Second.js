import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Second = () => {
    const [count,setCount]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            setCount(response.data);
        })
        .catch(error => {
            console.log("error",error);
        });
    },[]);
    
  return (
    <>
     <h1>Api Integrate 2nd Example</h1>
      <div id='mydata'>
          <ul id='count'>
           {count.map((item,index)=>(
            <li key={index.id}>{item.name}</li>
           ))}
          </ul>
      </div>
    </>
  )
}

export default Second
