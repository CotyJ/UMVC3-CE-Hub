const path = require('path');
const dotenvPath = path.join(__dirname, '../../.env');
const dotenv = require('dotenv');
dotenv.config({ path: dotenvPath });
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`⭐ Server is running on port ${PORT} ⭐\n`);
});
