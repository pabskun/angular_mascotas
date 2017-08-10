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

    vm.btnadd = true;
    vm.btnedit = false;

    vm.getUsers ={};

    vm.btnadd = true;
    vm.btnedit = false;
    loadUsers();

    function loadUsers(){
      userService.getUsers().then(function (response) {
        vm.getUsers = response.data;

      });
    }


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
    vm.showInfoUpdate = function(pobjUser){
      vm.btnadd = false;
      vm.btnedit = true;
      vm.id = pobjUser._id;
      vm.firstName = pobjUser.firstName;
      vm.lastName = pobjUser.lastName;
      vm.email = pobjUser.email;
      vm.password = pobjUser.password;
      vm.btnedit
    }
    vm.update = function(){
      var newUser ={
        _id: vm.id,
        firstName : vm.firstName,
        lastName : vm.lastName,
        email : vm.email,
        password: vm.password
      }

      userService.updateUsers(newUser).then(function (response) {
        loadUsers();
        vm.btnadd = true;
        vm.btnedit = false;
        vm.firstName = null;
        vm.lastName = null;
        vm.email = null;
        vm.password = null;

      });


    }
  }
})();
