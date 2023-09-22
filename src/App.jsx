import React from "react";



// Bootstrap object
const bootstrapCSS = './styles/bootstrapCSS.js';

// Background image
const backgroundImage = require('../assets/umvcBackground.jpg'); // Import the image


const App = () => {
  console.log("App is working");

  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100vh' , padding: '0px', margin: '0px'}}>
      App is working still
    </div>
  );
};

export default App;
