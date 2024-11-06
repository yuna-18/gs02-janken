import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModeProvider } from './contexts/ModeContext'; // 追加したContextをインポート
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModeProvider>
    <App />
  </ModeProvider>
);
