const path = require('path');
const fs = require('fs');

// Capture data to look at object
const peekResponse = function(){

    fs.writeFile(path.join(__dirname, '../../peek.json'), JSON.stringify(topPostsData), err => {
      if (err) {
        console.log(err);
      } else{
        console.log('Success');
      }
    });

}

module.exports = peekResponse;