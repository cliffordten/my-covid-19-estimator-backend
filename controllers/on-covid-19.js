const fs = require('fs');

const filePath = 'middleware/on-covid-19.log.txt';

const EasyXml = require('easyxml');

const serializer = new EasyXml({
  singularize: true,
  rootElement: 'response',
  dateFormat: 'ISO',
  manifest: true
});

const estimator = require('../estimator');

exports.getEstimationData = (req, res) => {
  const data = req.body;
  const estimatorData = estimator(data);

  if (!data) {
    res
      .status(200)
      .json({ success: false, msg: 'Input data required for this request' });
  }
  res.status(200).json({ success: true, estimatorData });
};

exports.getEstimationDataInJson = (req, res) => {
  const data = req.body;
  const estimatorData = estimator(data);

  if (!data) {
    res
      .status(200)
      .json({ success: false, msg: 'Input data required for this request' });
  }
  res.status(200).json({ success: true, estimatorData });
};

exports.getEstimationDataInXml = (req, res) => {
  const data = req.body;
  const estimatorData = estimator(data);

  res.set('Content-Type', 'text/xml');

  if (!data) {
    res.status(200).send(
      serializer.render({
        success: false,
        msg: 'Input data required for this request'
      })
    );
  }

  res.status(200).send(serializer.render({ success: true, estimatorData }));
};

exports.getLogData = (req, res) => {
  res.set('Content-Type', 'text/text');

  const logData = fs.readFileSync(filePath, 'utf8');

  res.status(200).send({ success: true, logData });
};
