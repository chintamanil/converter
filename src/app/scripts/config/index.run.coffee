# @ngInject
run = ($log) ->
  $log.debug 'runBlock end'

run.$inject = ['$log']
angular.module('sterlingConvert').run run