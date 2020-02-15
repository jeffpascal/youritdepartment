import React from "react";

const LotsOfUsers = [...Array(1001).keys()].map(
  (item, key) =>
    (item = {
      name: `User ${key}`,
      id: key,
      count: 0
    })
);

export default LotsOfUsers;
