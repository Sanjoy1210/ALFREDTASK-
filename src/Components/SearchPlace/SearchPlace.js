import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const SearchPlace = () => {
  const [weatherDetails, setWeatherDetails] = useState({});
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const { addPlaces } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    setCity(e.target.city.value);
    setState(e.target.state.value);
    setCountry(e.target.country.value);
  }

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=metric&appid=42a8101301ff2148eb8fa79d1de88521`)
      .then(res => res.json())
      .then(data => setWeatherDetails(data));
  }, [city, state, country])


  return (
    <>
      <div className="serach-place">
        <div className="md:container md:mx-auto">
          <h2 className="text-center my-8">Search Your City Weather</h2>
          <form onSubmit={handleSubmit}>
            <input className="w-2/4 block mb-3.5 mx-auto border" type="text" placeholder="City Name" name="city" />
            <input className="w-2/4 block mb-3.5 mx-auto border" type="text" placeholder="State Name" name="state" />
            <input className="w-2/4 block mb-3.5 mx-auto border" type="text" placeholder="Country Code" name="country" />
            <button className="border mx-auto block" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="search-place-result w-1/4 mx-auto text-center mt-8">
        <div className="weather-detail">
          <h3>{weatherDetails?.name}</h3>
          <h4>{weatherDetails?.main?.temp}° C</h4>
          <button onClick={() => addPlaces(weatherDetails?.name, weatherDetails?.main?.temp)} className="my-5 border text-white p-3 bg-pink-500" type="button">Add place</button>
        </div>
      </div>
    </>
  );
};

export default SearchPlace;