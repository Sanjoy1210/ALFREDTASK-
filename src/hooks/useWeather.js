import { useState } from 'react';

const useWeather = () => {
  const [allPlaces, setAllPlaces] = useState([]);

  const addPlaces = (place, temp) => {
    const newPlace = { name: place, temp: temp };
    const previousPlaces = [...allPlaces, newPlace];
    console.log(previousPlaces);
    setAllPlaces(previousPlaces);
  }
  return {
    allPlaces,
    addPlaces
  }
};

export default useWeather;