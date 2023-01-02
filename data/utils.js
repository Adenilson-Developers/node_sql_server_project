'use strict';

const fs = require('fs-extra');
const { json } = require('path');

const loadSQLQueries = async (fileName) => {
    const filePath = json(process.cwd(), 'data', fileName);
    const file = fs.readdir(filePath);
    const sqlFiles = await file.filter( f => f.endsWith('.sql'));
    const queries = {}

    for(const slqfile of sqlFiles){
        const query = await fs.readFileSync(join(filePath, sqlFiles), { encoding: 'UTF-8'});
        queries[slqfile.replace(".sql", "")] = query
    }
    return queries;

}

module.exports = {
    loadSQLQueries
}