let appC = angular.module('promesaApp.controladores', []);

app.controller('personasCtrl', ['$scope','Personas','$http', ( $scope, Personas,$http )=>{
$scope.file = [];
$scope.respuesta = [];


const subirImagen= event => {
  console.log(event.target.files);
  let data = new FormData();

  data.append('fileInput', event.target.files[0]);
  
  $http({
    method:'POST',
    url:'http://localhost:8001/excel/cargarAlumnos',
    data:data,
    headers:{'Content-Type':undefined}
}) .then(function success( resp ) {
                
   $scope.respuesta = resp.data;

},
function error ( response ){
  console.log('Error ',response)
});

};




document.querySelector('#subir_archivo').addEventListener('change', event => {
    subirImagen(event);
});
}]);
