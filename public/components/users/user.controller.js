(function(){
  'use strict';
  angular
  .module('myApp')
  .controller('userController', userController);

  userController.$inject = ['userService'];
  //se inyecta el service userService en el controlador para que se tenga acceso
  function userController(userService){
    //binding del controlador con el html, solo en el controlador
    var vm = this;
    vm.getUsers ={};

    vm.btnadd = true;
    vm.btnedit = false;

    userService.getUsers().then(function (response) {
      vm.getUsers = response.data;

    });

    vm.save= function(form){
      var newUser ={
        firstName : vm.firstName,
        lastName : vm.lastName,
        email : vm.email,
        password: vm.password
      }

      userService.setUsers(newUser).success(function(data){
        console.log(data);
        vm.firstName = null;
        vm.lastName = null;
        vm.email = null;
        vm.password = null;
      });

      vm.delete = function(id){
        console.log(id);
        userService.deleteUsers(id)
        .success(function(data){
          init();
        })
      }

      vm.firstName = null;
      console.log(newUser);
    }
  }
})();
