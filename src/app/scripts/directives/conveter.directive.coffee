converterDirective = ->
  link = undefined

  link = (scope, el, attr) ->
    console.log scope, attr
    scope.eachItem = scope.$eval(attr.each)
    console.log scope.eachItem
    scope.$watch 'each', ((oldValue, newValue) ->
      if newValue != oldValue
        scope.eachItem = scope.$eval(attr.each)
      return
    ), true

  {
    restrict: 'E'
    link: link
    scope: true
    templateUrl: 'app/views/directives/converter.html'
  }

angular.module('sterlingConvert').directive 'converterDirective', converterDirective

