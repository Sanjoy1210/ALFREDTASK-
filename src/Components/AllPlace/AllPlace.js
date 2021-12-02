import React from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Place from '../Place/Place';

const AllPlace = () => {
  const { allPlaces, setAllPlaces } = useAuth();
  const navigate = useNavigate();

  const resetAllPlaces = () => {
    setAllPlaces([]);
    navigate('/dashboard');
  }

  return (
    <div className="all-places">
      <div className="md:container mx-auto">
        <div className="grid gap-4 grid-cols-6">
          {
            allPlaces.map((place, index) => <Place key={index} place={place} index={index} />)
          }
        </div>
        <button className="border text-white p-2 bg-pink-500" onClick={resetAllPlaces}>Reset</button>
      </div>
    </div>
  );
};

export default AllPlace;