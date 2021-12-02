import React from 'react';
import { Link } from 'react-router-dom';

const Place = ({ place }) => {
  const { name, temp, id } = place;
  return (
    <div className="single-place border">
      <h2>{name}</h2>
      <h3>{temp}° C</h3>
      <Link to={`/editplace/${id}`}>
        <button className="mt-3 border text-white p-2 bg-pink-500" type="button">Edit place</button>
      </Link>
    </div>
  );
};

export default Place;