var express = require('express');
var router = express.Router();
const user = require('../models/user');


/* GET users listing. */
router.post('/add', function(req, res, next) {
  var userobj = new user({name:req.body.name, id: req.body.id });

//save model to MongoDB
userobj.save(function (err,out) {
  if (err) {
    return err;
  }
  else {
res.json(out);
  }
});
});
 
 router.post('/delete', function(req, res, next) {
  var name=req.body.name;
  user.remove({name:name}, function(err, out) {
    if(err) {
      res.status(500).send('Error in retriving saved bookmarks');
    }
    else{
      res.json(out);
    }
  });
});


router.post('/update', function(req, res, next) {
    var name=req.body.name;
    var id=req.body.id;

user.update({name:name}, { $set: { id:id }} , {multi:true},function(err, out){
  if(err) {
      res.status(500).send('Error in retriving saved bookmarks');
    }
    else{
      res.json(out);
    }
  });
});
router.get('/readall', function(req, res, next) {
  user.find({}, function(err, out) {
    if(err) {
      res.status(500).send('Error in retriving saved bookmarks');
    }
    else{
      res.json(out);
    }
  });
});

router.post('/read', function(req, res, next) {
  var name=req.body.name;
  user.find({name:name}, function(err, out) {
    if(err) {
      res.status(500).send('Error in retriving saved bookmarks');
    }
    else{
      res.json(out);
    }
  });
});

module.exports = router;
