import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Fifth = () => {
    const [file,setFile]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            setFile(response.data)
        })
        .catch(error => {
            console.log("error", error)
        })
    })
  return (
    <>
      <h1>Api Integrate Fifth example</h1>
      <div>
        <ul id='file'>
            {file.map((item,index)=>(
                <li key={index.id}>{item.name}</li>
            ))}
        </ul>
      </div>
    </>
  )
}
export default Fifth
