'use strict';

const express = require('express');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(config.port, () =>  console.log('Server is running on http://localhost:' + config.port));
