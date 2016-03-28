var myApp = angular.module('myApp',['ui.bootstrap','ngRoute'])
                    .config(
                        function($routeProvider) {
                          $routeProvider
                            .when('/home', {
                              templateUrl:'partials/home.html',
                              controller: 'HomePageCtrl'
                            })
                            .when('/aboutUs', {
                              templateUrl: 'partials/aboutUs.html',
                              controller: 'AboutUsCtrl'
                            })
                            .when('/services', {
                              templateUrl: 'partials/services.html',
                              controller: 'ServicesCtrl'
                            })
                            .when('/samples', {
                              templateUrl: 'partials/samples.html',
                              controller: 'SamplesCtrl'
                            })
                            .when('/contactUs', {
                              templateUrl: 'partials/contactUs.html',
                              controller: 'ContactUsCtrl'
                            })
                            .otherwise({
                              redirectTo: '/home'
                            });
                           //$locationProvider.html5Mode(true);
                        });
myApp.controller('HomePageCtrl', function ($scope) {
  $scope.home = "This is home page";
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'img/sustainable.jpg',
      name: 'Sustainable'
    },
    {
      image: 'img/timely.jpg',
      name: 'Timely'
    },
    {
      image: 'img/affordable.jpg',
      name: 'Affordable'
    },
    {
      image: 'img/reliable.jpg',
      name: 'Reliable'
    }
]
});
myApp.controller('AboutUsCtrl', function ($scope) {
  $scope.message= "This is about us page";
});
myApp.controller('ServicesCtrl', function ($scope) {
  $scope.service= "This is services page";
});
myApp.controller('SamplesCtrl', function ($scope) {
  $scope.samples = "This is samples page";
});
myApp.controller('ContactUsCtrl', function ($scope) {
  $scope.contact = "This is contact us page";
});