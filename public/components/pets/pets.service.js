(function(){
  angular
  .module('myApp')
  .service('petService', petService);

  function petService($http){
    var pets = [{
      name: 'Athos',
      breed:'Cat'
    }];
    var publicAPI = {
      setPets : _setPets,
      getPets : _getPets,
      updatePets : _updatePets

    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setPets(pPet){
      //users.push(pUser);
      return $http.post('http://localhost:8000/api/pets',pPet)

    }

    function _getPets(){
      var lista = $http.get('http://localhost:8000/api/pets')
      return lista;
    }


    function _updatePets(pPet){
      console.log(pPet);
      return $http.put('http://localhost:8000/api/pets',pPet);
    }



  }

})();
