webpackJsonp([15],{

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46a88b29_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NotFound_vue__ = __webpack_require__(567);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(566)
}
var normalizeComponent = __webpack_require__(210)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46a88b29_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NotFound_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/NotFound.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(140)
  hotAPI.install(__webpack_require__(44), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46a88b29", Component.options)
  } else {
    hotAPI.reload("data-v-46a88b29", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)(true);
// imports


// module
exports.push([module.i, "\nh2{\n    font-size: 25px;\n    text-align: center;\n    margin-top:220px;\n}\n", "", {"version":3,"sources":["/Users/hotread/work/learn/MyBlog_Admin/src/views/src/views/NotFound.vue"],"names":[],"mappings":";AAMA;IACA,gBAAA;IACA,mBAAA;IACA,iBAAA;CACA","file":"NotFound.vue","sourcesContent":["<template>\n    <section>\n        <h2>对不起页面走丢了404</h2>\n    </section>\n</template>\n<style>\n    h2{\n        font-size: 25px;\n        text-align: center;\n        margin-top:220px;\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(531);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("5c9f23c8", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(531, function() {
     var newContent = __webpack_require__(531);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [_c("h2", [_vm._v("对不起页面走丢了404")])])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(140)      .rerender("data-v-46a88b29", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=15.f40892196aaa2f0ff623.js.map