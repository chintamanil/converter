angular.module "sterlingConvert"
  .directive 'acmeNavbar', ->

#    NavbarController = () ->
#      vm = this

    directive =
      restrict: 'E'
      templateUrl: 'app/views/directives/navbar.html'
      scope: creationDate: '='
#      controller: NavbarController
#      controllerAs: 'vm'
#      bindToController: true
