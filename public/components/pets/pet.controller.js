  (function(){
    'use strict';
    angular
      .module('myApp')
      .controller('petsController', petsController);
      petsController.$inject = ['petService'];
      
      function petsController(petService){ //se inyecta el service userService en el controlador para que se tenga acceso
        //controlador
        var petCtrl = this; //binding del controlador con el html, solo en el controlador
        petCtrl.pets = {};
        loadPets();

        function loadPets(){
          petService.getPets().then(function (response) {
            petCtrl.pets = response.data;

          });
        }




        petCtrl.save= function(){
          var newPet ={
            name : petCtrl.name,
            breed : petCtrl.breed,
          }

        petService.setPets(newPet).then(function (response) {
          petCtrl.name = null;
          petCtrl.breed = null;
          loadPets();
        });



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
