import navbarTemplate from './navbar.html';

export default angular.module('app.components.navbar', [])
  .component('navbar', {
    templateUrl: navbarTemplate,
    // controller: NavbarController
    // bindings: { navbar: '=' }
  })
  .name;

// function NavbarController(){
//   'ngInject';
//   let vm = this;
//
// }
