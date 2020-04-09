/* eslint-disable no-console */
const express = require('express');
const dotenv = require('dotenv');
const fileManager = require('./file-manager');

fileManager();

const onCovid19 = require('./routes/on-covid-19');
const logger = require('./middleware/logger');

dotenv.config({ path: 'config/config.env' });

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/v1/on-covid-19', onCovid19);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port  ${PORT}`));
