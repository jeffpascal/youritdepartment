import React from "react";

const LotsOfUsers = [...Array(100).keys()].map(
  (item, key) =>
    (item = {
      name: `User ${key}`,
      id: key,
      count: 0
    })
);

export default LotsOfUsers;
