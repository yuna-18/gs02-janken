import React from 'react';
import ReactDOM from 'react-dom/client';
import {ModeProvider, GameProvider} from './contexts/ModeContext'; // 追加したContextをインポート
import {BattleProvider} from './contexts/BattleContext'; // 追加したContextをインポート
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModeProvider>
    <GameProvider>
      <BattleProvider>
        <App />
      </BattleProvider>
    </GameProvider>
  </ModeProvider>
);
