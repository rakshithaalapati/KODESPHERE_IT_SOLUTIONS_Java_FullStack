import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [inventory, setInventory] = useState([
    { group: "A+", units: 20 },
    { group: "B+", units: 15 },
    { group: "O+", units: 10 }
  ]);

  const [requests, setRequests] = useState([]);

  return (
    <AppContext.Provider value={{
      inventory,
      setInventory,
      requests,
      setRequests
    }}>
      {children}
    </AppContext.Provider>
  );
};