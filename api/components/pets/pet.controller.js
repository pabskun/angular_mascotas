var Pet = require('./pet.model.js');

module.exports.save = function(req, res){
  var newPet = new Pet({
    name: req.body.name,
    breed : req.body.breed
  });

  newPet.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la mascota' + err});
    }else{
      res.json({success:true, msg:'Se registró la mascota correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Pet.find().then(function(pets){
    res.send(pets);
  })
};
