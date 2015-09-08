ValueService = ->

  @parseValue = (inputValue) ->
    if inputValue.length == 0
      return false

    if inputValue.length == 1 and !inputValue.match(/[0-9]+/g)
      return false

    if inputValue.match(/[a-oq-zA-Z]+/g)
      return false

    if inputValue[0] == '£' and inputValue[inputValue.length - 1] != 'p'
      return Number(inputValue.substr(1)).toFixed(2) * 100

    if inputValue[0] == '£' and inputValue[inputValue.length - 1] == 'p'
      return Number(inputValue.substr(1, inputValue.length - 2)).toFixed(2) * 100

    if inputValue[inputValue.length - 1] == 'p' and inputValue[0] != '£' and !inputValue.match(/[.]+/g)
      return Number(inputValue.substr(0, inputValue.length - 1)).toFixed(0)

    if inputValue[inputValue.length - 1] != 'p' and inputValue[0] != '£' and inputValue.match(/[.]+/g)
      false

    else
      return inputValue

  return

angular.module('sterlingConvert').service 'ValueService', ValueService