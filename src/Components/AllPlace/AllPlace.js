import React from 'react';
import useAuth from '../../hooks/useAuth';
import Place from '../Place/Place';

const AllPlace = () => {
  const { allPlaces } = useAuth();
  return (
    <div className="all-places">
      <div className="md:container mx-auto">
        <div className="grid gap-4 grid-cols-6">
          {
            allPlaces.map((place, index) => <Place key={index} place={place} index={index} />)
          }
        </div>
      </div>
    </div>
  );
};

export default AllPlace;