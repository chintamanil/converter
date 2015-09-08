### @ngInject ###
currencyCalculateService = (MY_COINS) ->
  {
    originalValue: ->
      [
        {
          '$': '1p'
          'val': 0
        }
        {
          '$': '2p'
          'val': 0
        }
        {
          '$': '50p'
          'val': 0
        }
        {
          '$': '£1'
          'val': 0
        }
        {
          '$': '£2'
          'val': 0
        }
      ]
    testValue: ->
      [
        {
          '$': '1p'
          'val': 1
        }
        {
          '$': '2p'
          'val': 2
        }
        {
          '$': '50p'
          'val': 3
        }
        {
          '$': '£1'
          'val': 4
        }
        {
          '$': '£2'
          'val': 5
        }
      ]
    actualValue: (valueIn) ->
      currency = undefined
      currencyList = undefined
      i = undefined
      resultArray = undefined
      value = undefined
      console.log MY_COINS
      currencyList = Object.keys(MY_COINS).sort()
      resultArray = []
      i = currencyList.length - 1
      valueIn = Number(valueIn)
      while i >= 0
        currency = Number(MY_COINS[currencyList[i]])
        value = Math.floor(valueIn / currency)
        console.log value, 'AA', valueIn, currency
        if value != 0
          valueIn -= currency * value
        else
          valueIn
        resultArray.push
          '$': currencyList[i]
          'val': value
        i--
      console.log resultArray
      resultArray

  }

angular.module('sterlingConvert').factory 'currencyCalculateService', currencyCalculateService
