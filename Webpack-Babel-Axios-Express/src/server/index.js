const path = require('path');
const dotenvPath = path.join(__dirname, '../../.env');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: dotenvPath });
const express = require('express');
const cors = require('cors');
const app = express();


// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../../dist'))); // CONNECTS TO SRC!!!


// Capture response json and save to file for testing
const peekResponse = require('./peekResponse');



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`⭐ Server is running on port ${PORT} ⭐\n`);
});
