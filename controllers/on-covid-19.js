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
  res.set({ 'Content-Type': 'application/json' });
  
  const  dataR  = req.body;
  let estimatorDataR;

  estimatorDataR = estimator(dataR);
  const data = estimatorDataR;

  res.status(200).json( data );
};

exports.getEstimationDataInJson = (req, res) => {
  res.set({ 'Content-Type': 'application/json' });

  const  dataR  = req.body;
  let estimatorDataR;

  estimatorDataR = estimator(dataR);
  const data = estimatorDataR;

  res.status(200).json( data );
};

exports.getEstimationDataInXml = (req, res) => {
  res.set({ 'Content-Type': 'application/xml; charset=utf-8' });

  const  dataR  = req.body;
  let estimatorDataR;

  estimatorDataR = estimator(dataR);
  const data = estimatorDataR;

  res.status(200).send(serializer.render( data ));
};

exports.getLogData = (req, res) => {
  res.set('Content-Type', 'text/plain');

  const logData = fs.readFileSync(filePath, "utf8");

  res.status(200).send( logData);
};
  