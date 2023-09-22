import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CharacterDetails from './CharacterPage';
import CharacterSelector from './CharacterSelector';

import './styles/index.css';

// Bootstrap object
const bootstrapCSS = './styles/bootstrapCSS.js';

// Background image
const backgroundImage = require('../assets/umvcBackground.jpg'); // Import the image

const App = () => {
  console.log('App is working');

  return (
    <div
      // Background Image
      className="background-image"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <CharacterSelector />
          </div>
          <div className="col-lg-9 col-md-12">
            <CharacterDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
