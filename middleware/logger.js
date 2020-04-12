/* eslint-disable no-console */
const fs = require('fs');

const start = new Date();

const logger = (req, res, next) => {
  // const str = (req.url).toString();
  // const seconds = (new Date() - start) / 100;

  // const data = `${Date.now()}\t\t${str.substr(8)}\t\tdone in ${
  //   seconds.toFixed(2)
  // } seconds`;

  const str = Math.trunc(new Date() - start)

  const data = `${req.method}\t\t${req.url}\t\t${res.statusCode}\t\t${str}ms`;


  fs.appendFile('middleware/on-covid-19.log.txt', `${data}\n`, () => {});
  next();
};

module.exports = logger;
