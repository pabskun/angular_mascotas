var express = require('express');
var router = express.Router();
var petController = require('./pet.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_pet')
  .post(function(req,res){
    petController.save(req,res);

  });
router.route('/get_all_pets')
  .get(function(req,res){
    petController.findAll(req,res);
  });

module.exports = router;
