
# Modules

```console.log(module);```
```js
id: '.',
  path: 'C:\\Users\\jeffp\\OneDrive\\Documents\\GitHub\\youritdepartment\\nodejs-app',
  exports: {},
  parent: [Function: log],
  filename: 'C:\\Users\\jeffp\\OneDrive\\Documents\\GitHub\\youritdepartment\\nodejs-app\\app.js',
  loaded: false,
  children: [
    Module {
      id: 'C:\\Users\\jeffp\\OneDrive\\Documents\\GitHub\\youritdepartment\\nodejs-app\\logger.js',
      path: 'C:\\Users\\jeffp\\OneDrive\\Documents\\GitHub\\youritdepartment\\nodejs-app',
      exports: [Object],
      parent: [Circular],
      filename: 'C:\\Users\\jeffp\\OneDrive\\Documents\\GitHub\\youritdepartment\\nodejs-app\\logger.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    'C:\\Users\\jeffp\\OneDrive\\Documents\\GitHub\\youritdepartment\\node_modules',
    'C:\\Users\\jeffp\\OneDrive\\Documents\\GitHub\\node_modules',
    'C:\\Users\\jeffp\\OneDrive\\Documents\\node_modules',
    'C:\\Users\\jeffp\\OneDrive\\node_modules',
    'C:\\Users\\jeffp\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules
  ]
  }
```

- Everything is a module
- if you require('./anothermodule'), the children object of this module will have anothermodule

## Export module

```js
const log = (message) => {
    console.log(message);
}

module.exports.logmethis = log;
```

- to print it we use the variable we declared

```js
const logger = require('./logger')

logger.logmethis('logmethis');
```

- ```module.exports.log``` how you export a function.
- ```module.exports.log = log;``` how you export module


## Export module 2

- you can use module.exports = something
- and use it directl

```js
const log = (message) => {
    console.log(message);
}

module.exports = log;
```

- const logger; the logger declared here becomes the log function you exported
- you can use it as a function directly
  
```js
const logger = require('./logger')

logger('message');
```

## Import node modules

```const path = require('path');```

- no need to specify './' because it is an object inside node (already a module)