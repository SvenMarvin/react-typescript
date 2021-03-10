import React, { useState } from "react";

export const LoginContextContainer: React.FC = props => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const logIn = () => {
    setIsAuth(true);
  };
  return (
    <LoginContext.Provider value={{ isAuth, logIn }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export type AuthContextType = {
  isAuth: boolean;
  logIn: () => void;
};

export const LoginContext = React.createContext({} as AuthContextType);