import React, { useEffect, useState } from 'react'

const HomePage = () => {

    const [data, setData] = useState([]);
    const url = "http://localhost:4000/base/get"
    const getAllData = async ()=> {
        try{
            const getData = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const res = await getData.json();
            setData(res);
        }
        catch(err){
            console.log(err);   
        }
    }
    console.log(data)

    useEffect(()=> {getAllData()},[]);
  return (
    <h1>Home Page</h1>
  )
}

export default HomePage