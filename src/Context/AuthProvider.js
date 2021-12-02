import React, { createContext } from 'react';
import useWeather from '../hooks/useWeather';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useWeather();
  return (
    <AuthContext.Provider value={allContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;