'use strict';
const express = require('express');
const eventController = require('../controller/eventController');
const router = express.Router();

const { getEvents, getEventId, addEvent } = eventController;

router.get('/events', getEvents);
router.get('/event/:id', getEventId);
router.post('/event', addEvent); 

module.exports = { 
    routes: router
}