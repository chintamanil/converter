### @ngInject ###
footerNav = ->
  footerController = undefined

  footerController = ->
    vm = undefined
    vm = this

  {
    restrict: 'E'
    templateUrl: 'app/views/directives/footer.html'
    controller: footerController
    controllerAs: 'vm'
    bindToController: true
  }

angular.module('sterlingConvert').directive 'footerNav', footerNav

