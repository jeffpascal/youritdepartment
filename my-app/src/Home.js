import React, { Suspense, useState, useEffect } from "react";

const Home = props => {
  const [users, setUsers] = useState(props.users);

  console.log(users);

  useEffect(() => {}, []);

  const addItem = e => {
    users.push(e);
    console.log(e);
    e.preventDefault();
  };

  const removeItem = item => {
    users.forEach(user => {
      if (user.id === item) {
        user.name = null;
      }
    });
    users.push({name:"da", id:101})
    console.log(users);
    setUsers(users);
    
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

      <ul>
        {users.map(item => {
          return (
            <>
              <li key={item.id}>{item.name + " " + item.count}</li>
              <button className="button" onClick={() => removeItem(item.id)}>
                X
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
