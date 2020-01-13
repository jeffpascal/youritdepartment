import React, { useState, useEffect } from "react";
import "./App.css";

const App = props => {
  
  const [book, setBook] = useState("nobook");

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson)
       
      })
      .catch(err => {
        setBook("error book")
        console.log(err);
      });
  }, []);

  return <div>{book}</div>;
};

export default App;
