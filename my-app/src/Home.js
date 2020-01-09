import React, { Suspense, useState, useEffect } from 'react';
import logo from './logo.png';
import CTX from './store'





let clickNumber = 0;
const Home = (props) => {

  const store = React.useContext(CTX);
  
  console.log(store);
  
  const [message, setMessage] = useState("hello World");
  const [clickedHooks, setClickedHooks] = useState(store.clicked);
  const changeState = (clickNumber) => {
    setMessage("Changed" + clickNumber);
  }

  useEffect(() => {
    clickNumber= store.clicked | 0;
    console.log('page loaded');
  } , [])

  const clicked = () => {
    clickNumber++;
    changeState(clickNumber);
    store.clicked = clickNumber;

  }

  return (
    <div className="Home">
        <p>{props.text}</p>
        <p>{clickedHooks}</p>
        <p>{message}</p>
        <Suspense fallback={<div>Loading</div>}></Suspense>
        <button onClick={() => clicked()}>changeState + {store.clicked}</button>
    </div>  
  )
}

export default Home;