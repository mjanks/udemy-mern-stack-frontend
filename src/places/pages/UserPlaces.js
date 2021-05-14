import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "Well known skyscraper the world over!",
    imageUrl:
      "https://www.urbansplatter.com/wp-content/uploads/2014/07/73-686x1024.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484402,
      lng: -73.9943977,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "Well known skyscraper the world over!",
    imageUrl:
      "https://www.urbansplatter.com/wp-content/uploads/2014/07/73-686x1024.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484402,
      lng: -73.9943977,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
