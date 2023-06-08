import React, { useContext, useState } from "react";

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [konModal, setKonModal] = useState(false);
  const [formInfo, setFormInfo] = useState({});
  const [token, setToken] = useState("");
  return (
    <Appcontext.Provider
      value={{
        showModal,
        setShowModal,
        konModal,
        setKonModal,
        formInfo,
        setFormInfo,
        token,
        setToken,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};
export { Appcontext, AppProvider };
