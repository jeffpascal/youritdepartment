import React, { Suspense, useState } from 'react';
import logo from './logo.png';

const Home = (props) => {

  const [message, setMessage] = useState("hello World");
 
  const changeState = () => {
    setMessage("Changed");
  }

  return (
    <div className="Home">
        <p>{props.text}</p>
        <p>{message}</p>
        <Suspense fallback={<div>Loading</div>}></Suspense>
        <button onClick={changeState}>changeState</button>
    </div>  
  )
}

export default Home;