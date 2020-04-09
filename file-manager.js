const fs = require('fs');

const filePath = 'middleware/on-covid-19.log.txt';

const deleteAndCreateFileOnStart = () => {
  fs.access(filePath, (error) => {
    if (!error) {
      fs.unlink(filePath, () => {
        fs.writeFileSync(filePath, '');
      });
    }
  });
};

module.exports = deleteAndCreateFileOnStart;
