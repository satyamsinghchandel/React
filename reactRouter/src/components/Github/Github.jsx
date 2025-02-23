import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'
function Github(){
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/satyamsinghchandel')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])
    return(
        <div className="text-center bg-gray-400 text-white p-4 text-3xl">
            Github Followers: {data.followers}
        </div>
    )
}
export default Github