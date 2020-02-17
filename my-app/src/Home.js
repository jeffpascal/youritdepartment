import React, { Suspense, useState, useEffect, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const styleHigh = {
  margin: "10px"
};
const styleInline = {
  margin: "10px",
  display: "inline-block"
};

const Home = props => {
  const [users, setUsers] = useState(props.users);
  const [displayed, setDisplayed] = useState(props.users);
  const [style, setStyle] = useState(styleInline);

  let displayString;

  const removeItem = item => {
    const afterDeletedUserDisplayed = displayed.filter(user => {
      return !(user === item);
    });

    const afterDeletedUser = users.filter(user => {
      return !(user === item);
    });

    setUsers(afterDeletedUser);
    setDisplayed(afterDeletedUserDisplayed);
  };

  const addToCounter = item => {
    const newUsers = users.map(user => {
      if (user === item) {
        return user;
      } else {
        user.count++;
        return user;
      }
    });
    setUsers(newUsers);
  };

  //requires a re-render for each time you type TOFIX
  const searchUsers = e => {
    displayString = e.target.value;
    setTimeout(() => {
      if (displayString) {
        let newUsers = users.filter(user => user.name.includes(displayString));
        setDisplayed(newUsers);
      } else {
        setDisplayed(users);
      }
    }, 400);
  };

  const CustomButton = () => {
    return (
      <button
        style={{ width: "50", fontSize: "2rem", margin: "20px" }}
        type="button"
        className="btn btn-danger"
      ></button>
    );
  };

  return (
    <div className="home">
      <CustomButton></CustomButton>

      <button
        style={{ width: "50", fontSize: "2rem", margin: "20px" }}
        type="button"
        className="btn btn-danger"
        onClick={() => setStyle(styleInline)}
      >
        ToggleInline
      </button>

      <form className="form-inline" id="searchForm">
        <input
          type="text"
          className="form-control form-control-sm ml-3 w-75"
          id="searchUser"
          placeholder="Search"
          onChange={e => {
            searchUsers(e);
          }}
        ></input>
      </form>

      <ul className="users">
        {displayed.map(item => {
          return (
            <li key={item.id} style={style}>
              <button
                style={{ width: "150px", fontSize: "2rem" }}
                className="btn btn-primary"
                onClick={() => addToCounter(item)}
              >
                {item.name}
                <span
                  style={{ float: "right" }}
                  className="w-100 badge badge-light"
                >
                  {item.count}
                </span>
              </button>

              <button
                style={{ fontSize: "2rem" }}
                className="btn btn-secondary"
                onClick={() => removeItem(item)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
