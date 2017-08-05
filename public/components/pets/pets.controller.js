(function(){
  angular
    .module('myApp')
    .controller('petsController', petsController);
    function petsController(petService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var petCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        petService.getPets()
          .success(function(data){
            petCtrl.pets = data;

          });
      }
      init();

      petCtrl.save= function(){
        var newPet ={
          name : petCtrl.name,
          breed : petCtrl.breed,
        }

        petService.setPets(newPet)
        .success(function(data){
          console.log(data);
          init();
          petCtrl.name = null;
          petCtrl.breed = null;

        })

      }



      petCtrl.update = function(objPet){

        petCtrl.id = objPet._id;
        petCtrl.firstName = objPet.name;
        petCtrl.lastName = objPet.breed;


      }
      petCtrl.edit = function(){


        var newPet ={
          _id: petCtrl.id,
          name : petCtrl.name,
          breed : petCtrl.breed
        }

        petService.updatePets(newPet)
        .success(function(data){
          console.log(data);
          init();

          petCtrl.name = null;
          petCtrl.breed = null;

        })

      }
    }
     //se establece un objeto de angular normal


})();
