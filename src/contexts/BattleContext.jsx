import React, { createContext, useContext, useState } from 'react';
// 2. BattleContext
const BattleContext = createContext();

export const BattleProvider = ({ children }) => {
  const [battleStart, setBattleStart] = useState(false);

  return (
    <BattleContext.Provider value={{ battleStart, setBattleStart }}>
      {children}
    </BattleContext.Provider>
  );
};

export const useBattle = () => {
  const context = useContext(BattleContext);

  if (!context) {
    throw new Error("useBattle must be used within a BattleProvider");
  }

  return context;
};