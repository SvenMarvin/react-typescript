import React, { useState } from "react";

export const LoginContextContainer: React.FC = props => {
<<<<<<< HEAD
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const logIn = () => {
    setIsAuth(true);
  };
  return (
    <LoginContext.Provider value={{ isAuth, logIn }}>
=======
  const [isAuth, setIsAuth] = useState<[boolean, string]>([false, '']);

  const logIn = (user: string) => {
    setIsAuth([true, user]);
  };

  const logOut = () => {
    setIsAuth([false, '']);
  };


  return (
    <LoginContext.Provider value={{ isAuth, logIn, logOut }}>
>>>>>>> release/0.0.2
      {props.children}
    </LoginContext.Provider>
  );
};

export type AuthContextType = {
<<<<<<< HEAD
  isAuth: boolean;
  logIn: () => void;
=======
  isAuth: [boolean, string];
  logIn: (user: any) => any;
  logOut: () => void;
>>>>>>> release/0.0.2
};

export const LoginContext = React.createContext({} as AuthContextType);