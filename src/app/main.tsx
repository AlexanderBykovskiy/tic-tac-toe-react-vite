import React from 'react';
import ReactDOM from 'react-dom/client';
import GamePage from '../pages/game-page.tsx';
import '../shared/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GamePage />
  </React.StrictMode>,
)
