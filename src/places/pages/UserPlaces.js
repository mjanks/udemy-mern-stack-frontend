import React from "react";
import { useParams, userParams } from "react-router-dom";

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
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "Well known skyscraper the world over!",
    imageUrl:
      "https://www.urbansplatter.com/wp-content/uploads/2014/07/73-686x1024.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  // useParams gives access to the dynamic segments that react router
  // is aware of, the userId in this case.
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
