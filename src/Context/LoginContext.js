import React, { createContext, useState } from "react";
export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
