import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  isPublisher: boolean; // Add isPublisher state
  setPublisher: (value: boolean) => void; // Function to set isPublisher
}

const defaultAuthContext: AuthContextType = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  isPublisher: false, // Default to false
  setPublisher: () => {}, // Default empty function
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPublisher, setIsPublisher] = useState(false); // State for publisher status


  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const setPublisher = (value: boolean) => {
    setIsPublisher(value);
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isPublisher, setPublisher }}>
      {children}
    </AuthContext.Provider>
  );
};
