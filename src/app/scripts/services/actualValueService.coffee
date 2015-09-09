### @ngInject ###
ValueService = ->

  @parseValue = (inputValue) ->
    midValue = undefined
    if inputValue.length == 0
      return false
    if inputValue.length == 1 and !inputValue.match(/[0-9]+/g)
      return false
    if inputValue.match(/[a-oq-zA-Z]+/g)
      return false
    if inputValue[0] == '£' and inputValue[inputValue.length - 1] != 'p'
      return String(Number(inputValue.substr(1)).toFixed(2) * 100)
    if inputValue[0] == '£' and inputValue[inputValue.length - 1] == 'p'
      return (Number(inputValue.substr(1, inputValue.length - 2)) * 100).toFixed(0)

    if inputValue[0] == '0' and inputValue.match(/[.]+/g)
      if inputValue.split('.')[0].split(0).join('').length == 0
        console.log inputValue, 'here'
        return false
      else
        midValue = inputValue.split('.')
        return Number(midValue[0].split(0).join('')) * 100 + Number(midValue[1].split('p').join(''))

    if inputValue[inputValue.length - 1] == 'p' and inputValue[0] != '£' and inputValue.match(/[.]+/g) == null
      return Number(inputValue.substr(0, inputValue.length - 1) ).toFixed(0)

    if inputValue[inputValue.length - 1] == 'p' and inputValue.match(/[.]+/g) !=null
      return Number(inputValue.substr(0, inputValue.length - 1)*100).toFixed(0)

    if inputValue[inputValue.length - 1] != 'p' and inputValue[0] != '£' and inputValue.match(/[.]+/g)
      false
    else
      inputValue

  return


angular.module('sterlingConvert').service 'ValueService', ValueService