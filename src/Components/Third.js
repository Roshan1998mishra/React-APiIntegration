import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Third = () => {
    const [count,setCount]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            setCount(response.data)
        })
        .catch(error => {
            console.log("error",error);
        })
    },[])

  return (
    <>
    <h1>Api Integrate 3rd Example</h1>
    <div>
    <ul id='count'>
        {count.map((item,index)=>(
            <li key={index.id}>{item.name}</li>
        ))}
    </ul>
    </div>
    </>
  )
}

export default Third
