# @ngInject
log = ($logProvider) ->
  $logProvider.debugEnabled true

log.$inject = ['$logProvider' ]
angular.module('sterlingConvert').config [
  '$logProvider'
  log
]