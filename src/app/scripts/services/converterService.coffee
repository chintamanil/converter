angular.module('sterlingConvert')
.factory 'utils', (MY_COINS) ->
  {
    actualValue: (coinValue) ->
      console.log MY_COINS
      return [{"$":"1p", "val":1},{"$":"2p", "val":2},{"$":"50p", "val":3},{"$":"£1", "val":4},{"$":"£2", "val":5}]


  }