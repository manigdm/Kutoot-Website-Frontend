// context/authContext.js or authContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import auth from '@/utils/auth'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const token = auth()?.access_token;
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setAuthChecked(true); // Now auth check is complete
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, authChecked }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);