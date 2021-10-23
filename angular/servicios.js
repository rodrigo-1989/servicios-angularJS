let appS = angular.module('promesaApp.servicios',[]);

appS.factory('Personas',['$http','$q','$rootScope', ( $http, $q, $rootScope)=>{

    let self = {
        "cargando":false,
        "mensaje":"",
        "data":[]
    };

    self.cargarData = ()=>{
        self.cargando = true;

        let q = $q.defer();

        $http({
            method:'GET',
            url:'http://localhost:8001/listar'
        })
            .then(function success( respuesta ) {
                
                q.resolve( respuesta.data );

            },
            function error ( response ){
                console.log(':(')
                q.reject('Error al cargar la data',);
            });

            return q.promise;
        };

        $rootScope.promise = self.cargarData();
        $rootScope.promise.then( 
            function( data ){
                
                self.cargando = false;
                self.mensaje = 'Informacion Cargada correctamente';
                self.data = data ;
        },
            function( error ){
                self.cargando = false;
                self.mensaje = 'Error ala cargar data';
                console.error( error )
        });

    return self;
}])