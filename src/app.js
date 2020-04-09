require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const { NODE_ENV } = require('./config');
const morganOption = (process.env.NODE_ENV === 'production')
  ? 'tiny'
  : 'common';


// set up middleware
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());


// custom services
const FilmsService = require('./services/films-service');
const PeopleService = require('./services/people-service');
const PlanetsService = require('./services/planets-service');
const SpeciesService = require('./services/species-service');
const TransportService = require('./services/transport-service');


// set up routes
const routes = [
  { url: '/films', service: FilmsService },
  { url: '/people', service: PeopleService },
  { url: '/planets', service: PlanetsService },
  { url: '/species', service: SpeciesService },
  { url: '/starships', service: new TransportService('starships') },
  { url: '/vehicles', service: new TransportService('vehicles') },
];

// add routes to app
routes.forEach(({url, service}) => {
  
  // endpoint to get all data in a category
  app.get(`${url}`, (req, res, next) => {
    const db = req.app.get('db');

    const { q, p } = req.query;
    let query, page;
    query = q ? `%${q}%` : null;
    page = p && Number.isInteger(parseInt(p)) ? parseInt(p) : 1;

    service.getAllItems(db, query)
      .then(data => {

        // pagination & enveloping
        const offset = (page - 1) * 10;
        const output = data.slice(offset, offset + 10);

        const envelope = {
          count: data.length,
          results: output,
          next: !!(data.length - offset > 10),
          prev: !!(page > 1)
        };

        return res
          .status(200)
          .json(envelope);
      })
      .catch(next); 

  });

});

// list endpoints by default
app.get('/', (req, res) => {
  return res
    .status(200)
    .json({
      endpoints: routes.map(route => route.url)
    });
});

// error handling
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res) => {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'Server error' } };
  } else {
    response = { message: error.message, error };
  }

  return res
    .status(500)
    .json(response);
};

app.use(errorHandler);

// the bottom line, literally
module.exports = app;