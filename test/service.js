
  function ValueService() {
    this.parseValue = function (inputValue) {
      var midValue;
      if (inputValue.length === 0) {
        return false;
      }
      if (inputValue.length === 1 && !inputValue.match(/[0-9]+/g)) {
        return false;
      }
      if (inputValue.match(/[a-oq-zA-Z]+/g)) {
        return false;
      }
      if (inputValue[0] === '£' && inputValue[inputValue.length - 1] !== 'p') {
        return Number(inputValue.substr(1)).toFixed(2) * 100;
      }
      if (inputValue[0] === '£' && inputValue[inputValue.length - 1] === 'p') {
        return Number(inputValue.substr(1, inputValue.length - 2)).toFixed(2) * 100;
      }
      if (inputValue[inputValue.length - 1] === 'p' && inputValue[0] !== '£' && !inputValue.match(/[.]+/g)) {
        return Number(inputValue.substr(0, inputValue.length - 1)).toFixed(0);
      }
      if (inputValue[inputValue.length - 1] === 'p' && inputValue[0] === '0' && inputValue.match(/[.]+/g)) {
        if (inputValue.split('.')[0].split(0).join('').length === 0) {
          return false;
        } else {
          midValue = inputValue.split('.');
          return Number(midValue[0].split(0).join('')) * 100 + Number(midValue[1].split('p').join('')).toFixed(0);
        }
      }
      if (inputValue[inputValue.length - 1] === 'p' && inputValue[0] === '£' && inputValue.match(/[.p]+/g)) {
        return Number(inputValue.split('.'))[0].toFixed(0);
      }
      if (inputValue[inputValue.length - 1] !== 'p' && inputValue[0] !== '£' && inputValue.match(/[.]+/g)) {
        return false;
      } else {
        return inputValue;
      }
    };
  };

