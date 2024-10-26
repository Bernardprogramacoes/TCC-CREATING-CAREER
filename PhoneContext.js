import React, { createContext, useState } from 'react';

export const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [phone, setPhone] = useState('Adicione o seu número de telefone');

  return (
    <PhoneContext.Provider value={{ phone, setPhone }}>
      {children}
    </PhoneContext.Provider>
  );
};
