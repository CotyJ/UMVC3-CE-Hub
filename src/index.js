import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles/index.css';

// FIXME: no loader for ttf's
// import './assets/fonts/BADABB__.TTF';

import App from './routes/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
