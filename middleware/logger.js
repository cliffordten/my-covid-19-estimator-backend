/* eslint-disable no-console */
const fs = require('fs');

const start = new Date();

const logger = (req, res, next) => {
  const data = `${req.method}\t\t${req.url}\t\t${res.statusCode}\t\t${
    new Date() - start
  } ms`;

  fs.appendFile('middleware/on-covid-19.log.txt', `${data}\n`, () => {});
  next();
};

module.exports = logger;
