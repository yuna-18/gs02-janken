import React, { createContext, useContext, useState } from 'react';

// Contextを作成
const ModeContext = React.createContext({
  mode: "", // デフォルトのmodeを設定
  setMode: () => {}
});


// コンテキストプロバイダ
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('');

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

// Contextを使用するカスタムフック
export const useMode = () => useContext(ModeContext);