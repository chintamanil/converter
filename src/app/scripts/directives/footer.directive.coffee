angular.module "sterlingConvert"
  .directive 'footerNav', ->

    footerController = () ->
      vm = this

    directive =
      restrict: 'E'
      templateUrl: 'app/views/directives/footer.html'
      controller: footerController
      controllerAs: 'vm'
      bindToController: true
