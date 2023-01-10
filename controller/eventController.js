'use strict';

const eventData = require('../data/events');

const getEvents = async (req, res, next) => {
    try{
        const events = await eventData.getEvents();
        res.send(events);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getEventId = async (req, res, next) => {
    try{
        const eventId = req.params.id;
        const oneEvent = await eventData.getEventId(eventId);
        res.send(oneEvent);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const addEvent = async (req, res, next) => {
    try{
        let data = req.body;
        const created = await eventData.createEvent(data);
        res.send(created);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const updateEvent = async (req, res, next) => {
    try{
        const eventId = req.params.id;
        const data = req.body;
        const updated = await eventData.updateEvent(eventId, data);
        res.send(updated);
    }catch(error){
        res.status(400).send(error.message)
    }
}

const deleteEvet = async (req, res, next) => {
    try{
        const eventId = req.params.id;
        const deletedId = await eventData.deleteEvent(eventId);
        res.send(deletedId)
    }catch(error){
        res.status(400).send(error.message)
    }
}

module.exports = {
    getEvents,
    getEventId,
    addEvent,
    updateEvent,
    deleteEvet
}