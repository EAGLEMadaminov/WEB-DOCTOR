import React, { useContext, useState } from "react";
import App from "./_app";

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [formInfo, setFormInfo] = useState("");
  return (
    <AppContext.Provider value={{ formInfo, setFormInfo }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
