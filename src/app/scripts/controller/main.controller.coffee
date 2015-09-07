angular.module "sterlingConvert"
  .controller "MainController", ($scope,utils) ->
    vm = $scope
    vm.value = 366
    vm.currentValue = 12
    vm.each=[{"$":"1p", "val":0},{"$":"2p", "val":0},{"$":"50p", "val":0},{"$":"£1", "val":0},{"$":"£2", "val":0}]
    vm.convertMe=(valueIn)->
      vm.each = utils.actualValue(valueIn)
      vm.currentValue = vm.value
