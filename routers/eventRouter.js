'use strict';
const express = require('express');
const eventController = require('../controller/eventController');
const router = express.Router();

const { getEvents, getEventId } = eventController;

router.get('/events', getEvents);
router.get('/event/:id', getEventId);

module.exports = {
    routes: router
}