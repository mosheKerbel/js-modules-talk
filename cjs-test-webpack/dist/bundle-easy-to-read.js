(() => {
  var __webpack_modules__ = ({

    "./MyMath.js": ((module) => {
      function sum(a, b) {
        return a + b;
      }
      module.exports = { sum };
    })

  });

  var __webpack_module_cache__ = {};
  
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }

  const { sum } = __webpack_require__("./MyMath.js");
  console.log('4 + 9 = ', sum(4, 9));
})();
