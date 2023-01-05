'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
 
const getEvents = async () => {
    try{ 
        let pool = await sql.connect(config.sql);
        let sqlQueries = await utils.loadSQLQueries('events');
        let list = await pool.request().query(sqlQueries.eventList);
        return list.recordset;
    } catch(error){
        return error.message;
    } 
} 

const getEventId = async (eventId) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const oneEvent = await pool.request()
                             .input('eventId', sql.Int, eventId)
                             .query(sqlQueries.eventById)
        return oneEvent.recordset;
    }catch(error){
        return error.message;
    }
}

const createEvent = async (eventData) => {
    try{

        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const insertEvent = pool.request()
                               .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                               .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
                               .input('startDate', sql.Date, eventData.startDate)
                               .input('endDate', sql.Date, eventData.endDate)
                               .input('evenue', sql.NVarChar(200), eventData.evenue)
                               .input('maxMembers', sql.NVarChar, eventData.maxMembers)
                               .query(sqlQueries.createEvent)
        return insertEvent.recordset;
    }catch(error){
        return error.message;
    }
}

const updateEvent = async (eventId, eventData) => {
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSQLQueries('events')
        const update = pool.request()
                           .input('eventId',sql.Int, eventId)
                           .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                           .input('eventDescription', sql.NVarChar(1000), eventData.eventDescription)
                           .input('startDate', sql.Date, eventData.startDate)
                           .input('endDate', sql.Date, eventData.endDate)
                           .input('evenue', sql.NVarChar(200), eventData.evenue)
                           .input('maxMembers', sql.NVarChar, eventData.maxMembers)
                           .query(sqlQueries.updateEvent)
        return update.recordset;
    }catch(error){error.message}
}

module.exports = {
    getEvents,
    getEventId,
    createEvent
}