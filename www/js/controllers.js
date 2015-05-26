angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'One Island East, Office',
      id: 1,
      location: "Taikoo, Hong Kong",
      img: "https://lh4.googleusercontent.com/KFtGkcTsfzFPg12PPZn-ffq1ke0eAkVrPyTQxQuz1Kmg9Gxxfo63KgkuLEMnICOBcp4Fpg=w2560-h1320"},
    { title: 'Pacific Place Tower 2, Office',
      id: 2,
      location: "Admiralty, Hong Kong"},
    { title: 'Cityplaza Four, Office',
      id: 3,
      location: "Quarry Bay, Hong Kong"}
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
