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
      img: "lib/properties/OIE-bg.jpg"},
    { title: 'Pacific Place Tower 2, Office',
      id: 2,
      location: "Admiralty, Hong Kong",
      img: "lib/properties/PP-Tower2-bg.jpg"},
    { title: 'Cityplaza Four, Office',
      id: 3,
      location: "Quarry Bay, Hong Kong",
      img: "lib/properties/CP-Tower4-bg.jpg"},
    { title: 'Blueprint, Co-working space',
      id: 4,
      location: "Quarry Bay, Hong Kong",
      img: "lib/properties/blueprint-bg.jpg"},
    { title: 'Arezzo, Residential',
      id: 5,
      location: "Admiralty, Hong Kong",
      img: "lib/properties/Arezzo-residential-bg.jpg"},
    { title: 'Pacific Place Tower 1, Office',
      id: 6,
      location: "Admiralty, Hong Kong",
      img: "lib/properties/PP-Tower1-bg.jpg"},
    { title: 'Upper House, Hotel',
      id: 7,
      location: "Admiralty, Hong Kong",
      img: "lib/properties/UpperHouse-hotel-bg.jpg"}

  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SearchCtrl', function($scope) {
  console.log("here")
})
