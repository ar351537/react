var express = require('express');
var router = express.Router();
let getNeo4jDriver = require('../neo4j/connection');


/* GET users listing. */
router.post('/add', function(req, res, next) {
  let query = 'create(n:name {name:"'+req.body.name+'"})';
  let session = getNeo4jDriver().session();
    session.run(query).then(function(result){
                  res.send("success");

      session.close();
          });
});
router.post('/delete', function(req, res, next) {
let query = 'match(n:name {name:"'+req.body.name+'"}) delete n';
  let session = getNeo4jDriver().session();
    session.run(query).then(function(result){
                  res.send("success");

      session.close();
          });});

router.post('/update', function(req, res, next) {
let query = 'match (n:name {name:"'+req.body.name+'"}) set n.name="'+req.body.id+'" ';
  let session = getNeo4jDriver().session();
    session.run(query).then(function(result){
            res.send("success");

      session.close();
          });
});
router.get('/readall', function(req, res, next) {
let query = 'match(n:name) return collect (n.name) as name';
  let session = getNeo4jDriver().session();
    session.run(query).then(function(result){
      res.send(result.records[0]);
      session.close();
          });
});
router.post('/read', function(req, res, next) {
let query = 'match(n:name {name:"'+req.body.name+'"}) return collect (n.name) as name';
  let session = getNeo4jDriver().session();
    session.run(query).then(function(result){
      res.send(result.records[0]);
      session.close();
          });
});

module.exports = router;
