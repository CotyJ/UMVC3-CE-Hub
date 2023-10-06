import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// Assets so far
import CharacterDetails from './routes/CharacterDetails';
import CharacterSidebar from './routes/CharacterSidebar';
import ErrorPage from './ErrorPage';
import './styles/index.css';

import App from './routes/App';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
