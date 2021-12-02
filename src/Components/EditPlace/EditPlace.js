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
      <div className="md:container mx-auto mt-8">
        <form onSubmit={updatePlace}>
          <input className="p-2 border" placeholder="enter city name" name="city" />
          <input className="border text-white p-2 bg-pink-500" type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default EditPlace;