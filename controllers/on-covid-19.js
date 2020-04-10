const fs = require("fs");

const filePath = "middleware/on-covid-19.log.txt";

const EasyXml = require("easyxml");

const serializer = new EasyXml({
  singularize: true,
  rootElement: "response",
  dateFormat: "ISO",
  manifest: true,
});

// const dataInput = {
//   region: {
//     name: "Africa",
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71,
//   },
//   periodType: "days",
//   timeToElapse: 58,
//   reportedCases: 674,
//   population: 66622705,
//   totalHospitalBeds: 1380614,
// };

// const dataInput = JSON.parse(dataInputs);

const estimator = require("../estimator");

exports.getEstimationData = (req, res) => {
  const  data  = req.body;
  let estimatorData;

  estimatorData = estimator(data);

  res.status(200).json({ success: true, estimatorData });
};

exports.getEstimationDataInJson = (req, res) => {
  const  data  = req.body;
  let estimatorData;

  estimatorData = estimator(data);

  res.status(200).json({ success: true, estimatorData });
};

exports.getEstimationDataInXml = (req, res) => {
  res.set("Content-Type", "text/xml");

  const  data  = req.body;
  let estimatorData;

  estimatorData = estimator(data);

  res.status(200).send(serializer.render({ success: true, estimatorData }));
};

exports.getLogData = (req, res) => {
  res.set("Content-Type", "text/text");

  const logData = fs.readFileSync(filePath, "utf8");

  res.status(200).send({ success: true, logData });
};
