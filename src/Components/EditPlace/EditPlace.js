import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const EditPlace = () => {
  const { index } = useParams();
  const { allPlaces } = useAuth();



  return (
    <div className="edit-place">
      <input placeholder="enter city name" />
    </div>
  );
};

export default EditPlace;