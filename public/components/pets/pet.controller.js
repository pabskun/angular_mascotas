  (function(){
    'use strict';
    angular
      .module('myApp')
      .controller('petsController', petsController);
      petsController.$inject = ['petService'];

      function petsController(petService){ //se inyecta el service userService en el controlador para que se tenga acceso
        //controlador
        var vm = this; //binding del controlador con el html, solo en el controlador
        vm.pets = {};
        loadPets();

        function loadPets(){
          petService.getPets().then(function (response) {
            vm.pets = response.data;

          });
        }




        vm.save= function(){
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



        vm.update = function(objPet){

          vm.id = objPet._id;
          vm.firstName = objPet.name;
          vm.lastName = objPet.breed;


        }
        vm.edit = function(){


          var newPet ={
            _id: vm.id,
            name : vm.name,
            breed : vm.breed
          }

          petService.updatePets(newPet)
          .success(function(data){
            console.log(data);
            init();

            vm.name = null;
            vm.breed = null;

          })

        }
      }
       //se establece un objeto de angular normal


  })();
