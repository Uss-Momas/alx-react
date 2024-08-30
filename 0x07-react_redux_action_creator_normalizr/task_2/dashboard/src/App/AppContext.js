import React from "react";

export const defaultUser = { email: '', password: '', isLoggedIn: false };

export function defaultLogOut() {}

export const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});