import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mike Janks",
      image:
        "https://www.cleveland.com/resizer/zKqVOuz7Vxscc_2Adj0qc2_T3lc=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/I5IYVJ4H5RCYDF7SZF2BDUGOOI.jpeg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
