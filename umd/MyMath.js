(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD - Register as an anonymous module
      define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS - Export as a Node.js module
      module.exports = factory();
    } else {
      // Browser globals - Define MyMath library as a global variable
      root.MyMath = factory();
    }
  }(typeof self !== 'undefined' ? self : this, function() {
  
    function sum(a, b) {
      return a + b;
    }
  
    function sub(a, b) {
      return a - b;
    }
  
    function multiply(a, b) {
      return a * b;
    }
  
    function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }
  
    return {
      sum,
      sub,
      multiply,
      divide
    };
  
  }));
  