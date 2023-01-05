'use strict';
const express = require('express');
const eventController = require('../controller/eventController');
const router = express.Router();

const { getEvents, getEventId, addEvent, updateEvent } = eventController;

router.get('/events', getEvents);
router.get('/event/:id', getEventId);
router.post('/event', addEvent);  
router.put('/event/:id', updateEvent)

module.exports = { 
    routes: router
}