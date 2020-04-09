const express = require('express');

const {
  getEstimationData,
  getEstimationDataInJson,
  getEstimationDataInXml,
  getLogData
} = require('../controllers/on-covid-19');

const router = express.Router();

router.route('/').post(getEstimationData);

router.route('/json').post(getEstimationDataInJson);

router.route('/xml').post(getEstimationDataInXml);

router.route('/log').get(getLogData);

module.exports = router;
