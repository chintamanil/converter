angular.module "sterlingConvert"
  .directive 'converterNav', ->
    link = (scope, el, attr) ->
      console.log scope, attr
      scope.eachItem = scope.$eval(attr.each)
      console.log scope.eachItem
      scope.$watch 'each', ((oldValue, newValue) ->
        if newValue != oldValue
          console.log oldValue, newValue
          scope.eachItem = scope.$eval(attr.each)
        return
      ), true
    {
    restrict: 'E'
    link: link
    templateUrl: 'app/views/directives/converter.html'
#    scope:
#      coinvalue: '@', each: '=', update:'&'
#    replace: true
#    controller: 'converterCtrl'
#    controllerAs: 'conv'
#    bindToController: true
    }

#  .controller 'converterCtrl', ($scope) ->
#    conv = this
#    conv.coinvalue = $scope.coinvalue
#    conv.each = $scope.each
#    console.log $scope.each, $scope.coinvalue
#    return




