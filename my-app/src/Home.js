import React, { Suspense, useState, useEffect } from "react";

const Home = props => {
  const [users, setUsers] = useState(props.users);
  const [displayed, setDisplayed] = useState(props.users);

  console.log(users);

  useEffect(() => {}, []);

  const addItem = e => {
    let newUsers = users.concat({ name: e.target.parentElement.addUser.value });
    setUsers(newUsers);
    setDisplayed(newUsers);

    e.preventDefault();
  };

  const removeItem = item => {
    const newUsersDisplayed = displayed.filter(user => user.id !== item);
    const newUsers = users.filter(user => user.id !== item); // users remains untouched
    setDisplayed(newUsersDisplayed);
    setUsers(newUsers);
  };
  
  const addToCounter = item => {
    console.log(item);
    item.count++;


    const newUsers = users.filter(user => user.id !== item); // users remains untouched
    setUsers(newUsers);
  };

  const searchUsers = e => {
    const newUsers = users.filter(user => user.name.includes(e.target.value));
    console.log(newUsers);
    if (e.target.value !== undefined) {
      setDisplayed(newUsers);
    } else {
      setDisplayed(users);
    }
  };

  return (
    <div className="Home">
      <form className="form" id="addUserForm">
        <input
          type="text"
          className="input"
          id="addUser"
          placeholder="Add user"
        />
        <button className="button" onClick={addItem}>
          Add Item
        </button>
      </form>

      <form className="form" id="searchForm">
        <input
          type="text"
          className="input"
          id="searchUser"
          placeholder="search User"
          onChange={e => {
            searchUsers(e);
          }}
        ></input>
      </form>

      <ul>
        {displayed.map(item => {
          return (
            <li key={item.id}>
              {item.name + " " + item.count}{" "}
              <button className="button" onClick={() => removeItem(item.id)}>
                {" "}
                X{" "}
              </button>
              <button className="button" onClick={() => addToCounter(item)}>
                {" "}
                +1{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
