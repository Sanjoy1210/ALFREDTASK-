import { useState } from 'react';

const useWeather = () => {
  const [allPlaces, setAllPlaces] = useState([]);

  const addPlaces = (place, temp) => {
    const newPlace = { name: place, temp: temp, id: allPlaces.length + 1 };
    const previousPlaces = [...allPlaces, newPlace];
    console.log(previousPlaces);
    setAllPlaces(previousPlaces);
  }
  return {
    allPlaces,
    addPlaces,
    setAllPlaces
  }
};

export default useWeather;