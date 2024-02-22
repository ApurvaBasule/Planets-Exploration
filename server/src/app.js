const express = require('express');
//const cors = require('cors');
const path = require('path');
const { planetsRouter, } = require('./routes/planets/planets.router');
const { launchesRouter } = require('./routes/launches/launch.router');

const app = express();

//   app.use(cors({
//       origin:'http://localhost:3000', //coz server/express is serving client by node & not nodemon on one port.
//   }))

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/planets',planetsRouter);
app.use('/launches',launchesRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;