import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const EditPlace = () => {
  const { index } = useParams();
  const { allPlaces } = useAuth();

  const updatePlace = e => {
    e.preventDefault();
    const name = e.target.city.value;
    const place = allPlaces[index - 1];
    place.name = name;
  }

  return (
    <div className="edit-place">
      <form onSubmit={updatePlace}>
        <input placeholder="enter city name" name="city" />
        <input type="submit" value="Update" />
      </form>

    </div>
  );
};

export default EditPlace;