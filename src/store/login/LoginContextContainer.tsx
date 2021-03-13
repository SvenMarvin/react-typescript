import React, { useState } from "react";

export const LoginContextContainer: React.FC = props => {
  const [isAuth, setIsAuth] = useState<[boolean, string]>([false, '']);

  const logIn = (user: string) => {
    setIsAuth([true, user]);
  };

  const logOut = () => {
    setIsAuth([false, '']);
  };


  return (
    <LoginContext.Provider value={{ isAuth, logIn, logOut }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export type AuthContextType = {
  isAuth: [boolean, string];
  logIn: (user: any) => any;
  logOut: () => void;
};

export const LoginContext = React.createContext({} as AuthContextType);