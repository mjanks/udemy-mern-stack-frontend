import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Michael Janks",
      image:
        "https://www.toledoblade.com/image/2012/09/18/Cedar-Point-coaster.JPG",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
