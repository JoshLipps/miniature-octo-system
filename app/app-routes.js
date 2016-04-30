export default function appRoutes($stateProvider, $urlRouterProvider) {
  'ngInject';

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
}
