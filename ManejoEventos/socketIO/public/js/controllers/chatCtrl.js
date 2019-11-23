angular.module('chatCtrl', []).controller('chatController', function($scope,$routeParams) {

	$scope.usuario = $routeParams.valor;	

 	var socket = io.connect();

	 socket.emit('new user',$scope.usuario, function(data) {
                       if(data) {
                          console.log(" " + $scope.usuario +" acaba de ingresar a  la sala de chat");
                       } else {
                           console.log( " " + $scope.usuario + " acaba de retirarse del chat");
                       }
                   });


});