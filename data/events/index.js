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

module.exports = {
    getEvents
}