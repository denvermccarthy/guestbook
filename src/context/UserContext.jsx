import { useState, createContext, useContext } from 'react';
import { signInUser, signUpUser } from '../utils/client';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null });
  const handleAuth = async (email, pass, signIn) => {
    return signIn
      ? await signInUser(email, pass)
      : await signUpUser(email, pass);
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { useUser, UserProvider };
