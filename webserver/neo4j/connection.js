let neo4j = require('neo4j-driver').v1;
module.exports = function() {

let driver = neo4j.driver("bolt://localhost", neo4j.auth.basic('neo4j', 'arul'));
    return driver;
};