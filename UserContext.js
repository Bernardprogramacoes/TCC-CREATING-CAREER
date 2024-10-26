import React, { createContext, useState } from 'react';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('Usuário');

  return (
    <UserContext.Provider value={{ email, setEmail, nome, setNome }}>
      {children}
    </UserContext.Provider>
  );
};
