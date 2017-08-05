// Se establecen las dependencias que Node va a utilizar
var express = require('express'),
    router = express.Router(),
    path = require('path');
// Se establece la conexion de datos con el front-end
router.get('*', function(req, res,next){
  res.sendFile(path.join(__dirname + '../public/index.html'));
})
// Exporta la conexión y la almacena dentro de express, variable que se usará dentro del server.js
module.exports = router;
