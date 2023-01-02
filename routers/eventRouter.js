'use strict';
const express = require('express');
const eventController = require('../controller/eventController');
const router = express.Router();

const { getEvents } = eventController;

router.get('/events', getEvents);

module.exports = {
    routes: router
}