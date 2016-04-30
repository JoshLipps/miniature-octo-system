import homeTemplate from './home.html';

export default angular.module('app.components.home', [])
  .component('home', {
    templateUrl: homeTemplate,
    controller: HomeController
    // bindings: { home: '=' }
  })
  .name;

function HomeController(){
  'ngInject';
  let vm = this;

  vm.welcome = 'Hello World';
}
