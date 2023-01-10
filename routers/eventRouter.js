'use strict';
const express = require('express');
const eventController = require('../controller/eventController');
const router = express.Router();

const { getEvents, getEventId, addEvent, updateEvent, deleteEvent } = eventController;

router.get('/events', getEvents);
router.get('/event/:id', getEventId);
router.post('/event', addEvent);  
router.put('/event/:id', updateEvent)
router.delete('/event/:id', deleteEvent)

module.exports = { 
    routes: router
}