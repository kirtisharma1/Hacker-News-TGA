import React from "react";

export const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ data, children }) => (
  <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
);
