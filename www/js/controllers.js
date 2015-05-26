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
      location: "Admiralty, Hong Kong",
      img: "https://lh3.googleusercontent.com/Q8uskRlMxPfzmDVzMYiGLGWzCBDpAKDqxgPXRo3U6GJwz4ywr95GboUi98nOQE0KmI2dxQ=w2560-h1320"},
    { title: 'Cityplaza Four, Office',
      id: 3,
      location: "Quarry Bay, Hong Kong",
      img: "https://lh3.googleusercontent.com/zsNlEoMaLwwF54j88DH5p0NlpnWcEgw84_11BAI67AVjlkUVGAWJZDFDDKk7sqJRnb--kA=w2560-h1320"},
    { title: 'Blueprint, Co-working space',
      id: 4,
      location: "Quarry Bay, Hong Kong",
      img: "https://lh3.googleusercontent.com/49Ey3qZOnS0a7UHYMpTZ_GxCj7YrEN6LZ4WbbT6JX2sh7iEDmDqDOJbvJYgIXuTDrt1PdQ=w2560-h1320"},
    { title: 'Arezzo, Residential',
      id: 5,
      location: "Admiralty, Hong Kong",
      img: "https://lh4.googleusercontent.com/oS2chXMxDCSti935HeYcTv4vONQeNzpyBWGotp5nzQhVBk1pIGxO3BS8NBNYgpoted9jjQ=w2560-h1320"},
    { title: 'Pacific Place Tower 2, Office',
      id: 6,
      location: "Admiralty, Hong Kong",
      img: "https://lh5.googleusercontent.com/HTYoT04DsSJX2BeF98fl-EWrFNP700RzjQq2Fg-CwvzWKpVevLjMVRXy2ajq3jgbwfz5FQ=w2560-h1320"},
    { title: 'Pacific Place Tower 2, Office',
      id: 7,
      location: "Admiralty, Hong Kong",
      img: "https://lh4.googleusercontent.com/xdMs-qSoA5My9annUZ6rVXHVcdzmVx3GLA1VxFol8v8p_hzAs57rAj-gUIC3LKoM0Wtqcg=w2560-h1320"}

  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
