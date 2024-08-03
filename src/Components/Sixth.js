import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Sixth = () => {
    const [count, setCount] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                setCount(response.data);
            })
            .catch(error => {
                console.log("error", error);
            });
    }, []);

    return (
        <>
            <h1>Sixth API Integrate example</h1> 
            <div >
                <div id='count' style={{width:'100px'}}>
                    {count.map((item, index) => (
                        <div key={index}>
                            <img src={item.url} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sixth;
