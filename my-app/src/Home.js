import React, { Suspense, useState, useEffect, useRef } from "react";

const Home = props => {
  const [users, setUsers] = useState(props.users);
  const [displayed, setDisplayed] = useState(props.users);

  let displayString;
  const countRef = useRef(displayString);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const modifyUserStateAndDisplay = wantedState => {
    console.log("modifyUserStateAndDisplay Called");
    setUsers(wantedState);
    setDisplayed(wantedState);
  };

  const addItem = e => {
    console.log("addItem Called");
    let newUsers = users.concat({ name: e.target.parentElement.addUser.value });
    modifyUserStateAndDisplay(newUsers);

    e.preventDefault();
  };

  const removeItem = item => {
    console.log("removeItem Called");
    const afterDeletedUser = displayed.filter(user => {
      return !(user === item);
    });
    modifyUserStateAndDisplay(afterDeletedUser);
  };

  const addToCounter = item => {
    console.log("addToCounter Called");
    item.count++;

    const newUsers = users.filter(user => user.id !== item); // users remains untouched
    setUsers(newUsers);
  };

  //requires a re-render for each time you type TOFIX
  const searchUsers = e => {
    displayString = e.target.value;
    const timer = setTimeout(() => {
      console.log(countRef);
      if (displayString) {
        let newUsers = users.filter(user => user.name.includes(displayString));
        setDisplayed(newUsers);
      } else {
        setDisplayed(users);
      }
      clearTimeout();
    }, 1000);

    console.log("searchUsers Called");
    //if what i'm seaching is nothing (empty search bar), we show the users
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
              {item.name + " " + item.count}
              <button className="button" onClick={() => removeItem(item)}>
                X
              </button>
              <button className="button" onClick={() => addToCounter(item)}>
                +1
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
