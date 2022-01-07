import React, { createContext, useContext, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const clientUser = getUser();
  const [user, setUser] = useState(
    clientUser ? { id: clientUser.id, email: clientUser.email } : {}
  );

  return (
    <UserContext.Provider value={(user, setUser)}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      'custom hook useUser must be used within a UserContext Provider'
    );
  }

  return context;
};

export { UserContext, UserProvider, useUser };
