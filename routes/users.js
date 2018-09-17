var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //modificacion adicional para el ejemplo de frontend con react
  res.json([{
    id: 1,
    username: "jbarea01"  
  },{
    id: 2,
    username: "otrouser02"
  }])
});

router.get('/test', function(req, res){
  //alerta = alert('Has accedido a la parte de test!!!!');
  console.log('este es el texto de alerta...');
  res.send('<h1>Acceso a parte de Test!</h1>');
});

module.exports = router;
