require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const morganBody = require('morgan-body');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const { getDate, getMonth, getYear } = require('date-fns');

// SERVE STATIC FILE
// app.use(express.static(path.join(__dirname, 'build')));

// APPLY CORS
app.use(cors());

// MORGAN BODY
morganBody(app);

// BODY-PARSE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// SERVER LOG
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms'
    ].join(' ');
  })
);

app.get('/historical_value', async (req, res) => {
  const { period, startDate, endDate } = req.query;

  const resolution = period === '1W' ? 1800 : 300;

  const response = await axios.get(
    `https://poloniex.com/public?command=returnChartData&currencyPair=USDT_BTC&start=${startDate}&end=${endDate}&period=${resolution}`
  );

  return res.status(200).send(response.data);
});

// SERVE FRONT-END
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(3030, async () => {
  console.log('Api Server is listening at port 3030');
});
