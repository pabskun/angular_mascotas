(function(){
  'use strict';
  angular
  .module('myApp')
  .controller('userController', userController);

  userController.$inject = ['userService'];
  //se inyecta el service userService en el controlador para que se tenga acceso
  function userController(userService){
    //binding del controlador con el html, solo en el controlador
    var userCtrl = this;
    userCtrl.getUsers ={};

    userCtrl.btnadd = true;
    userCtrl.btnedit = false;

    userService.getUsers().then(function (response) {
      userCtrl.getUsers = response.data;

    });

    userCtrl.save= function(form){
      var newUser ={
        idicito: userService.getId(),
        firstName : userCtrl.firstName,
        lastName : userCtrl.lastName,
        email : userCtrl.email,
        password: userCtrl.password
      }

      userService.setUsers(newUser).success(function(data){
        console.log(data);
        userCtrl.firstName = null;
        userCtrl.lastName = null;
        userCtrl.email = null;
        userCtrl.password = null;
      });

      userCtrl.delete = function(id){
        console.log(id);
        userService.deleteUsers(id)
        .success(function(data){
          init();
        })
      }

      userCtrl.firstName = null;
      userService.setId(newUser.idicito);
      console.log(newUser);
    }
  }
})();
