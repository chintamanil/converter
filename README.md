 Convert number to  currency values of £ and 'p'


## Description
This app converts input value e.g £1.03p to number = 103 and then gives the change in terms of £1,£2,50p,2p,1p


## Stack

* AngularJS
* Bootstrap
* gulp
* yomen

## Features

- [x] Service to convert input to right amount
- [x] Service to convert amount to £1,£2,50p,2p,1p object
- [x] Directive to show the currency



## Installation

```bash
converter$ npm install
converter$ bower install
```
### Build angularjs app
install gulp and the gulp dependencies:
gulp serve will start the non minified server [js css NOT minified]
gulp serve:dist will start the minified server [js css minified]
```
`converter$ npm install`
`converter$ gulp`
`converter$ gulp serve`
```

## Testing the converter
`cd test`
open index.html 
It will run the mocha test for the service/function for checking if currency is in correct format.
This is an independent mocha run

To run mocha with Karma DO : in project directory converter
`karma start`



