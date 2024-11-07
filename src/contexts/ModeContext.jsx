import React, { createContext, useContext, useState } from 'react';
// 1. ModeContext
const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(''); // modeの初期値を空文字に設定

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);

  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }

  return context;
};

// 1. GameContext
const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState(false); // modeの初期値を空文字に設定

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(ModeContext);

  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }

  return context;
};