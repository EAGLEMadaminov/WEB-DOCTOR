import React, { useContext, useState, useEffect, useRef } from "react";
import { registerLocale } from "react-datepicker";

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [konModal, setKonModal] = useState(false);
  const [formInfo, setFormInfo] = useState({});
  const [show, setShow] = useState(false);
  const [registerInfo, setRegisterInfo] = useState("");

  return (
    <Appcontext.Provider
      value={{
        showModal,
        setShowModal,
        konModal,
        setKonModal,
        formInfo,
        setFormInfo,
        registerInfo,
        setRegisterInfo,
        show,
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
