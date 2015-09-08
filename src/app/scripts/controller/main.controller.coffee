MainController = ($scope, currencyCalculateService, ValueService) ->
  vm = undefined
  vm = $scope
  vm.value = 366
  vm.currentValue = 12
  vm.each = currencyCalculateService.originalValue()

  vm.convertMe = (valueIn) ->
    vm.currentValue = ValueService.parseValue(valueIn.toString())
    vm.each = currencyCalculateService.actualValue(vm.currentValue)
    console.log vm.currentValue

angular.module('sterlingConvert').controller 'MainController', MainController
