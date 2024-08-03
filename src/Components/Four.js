import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Four = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(respnse =>{
            setData(respnse.data)
        })
        .catch(error => {
            console.log("error", error)
        })
    },[])
  return (
    <>
    <h1>Fouth example api Integrate</h1>
      <div>
         <ul id='data'>
          {data.map((item,index)=>(
            <li key={index.id}>{item.name}</li>
          ))}
         </ul>
      </div>
    </>
  )
}

export default Four
