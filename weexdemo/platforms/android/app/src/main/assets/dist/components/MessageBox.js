// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/src/components/MessageBox.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-26dee718"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "750",
    "zIndex": 99999
  },
  "messagebox": {
    "width": "558",
    "marginTop": "400",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10",
    "boxShadow": "0px 0px 10px black"
  },
  "titlebar": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#1E90FF",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10"
  },
  "title": {
    "flex": 1,
    "color": "#FFFFFF",
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16"
  },
  "closebutton": {
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16"
  },
  "close": {
    "color": "#FFFFFF"
  },
  "message": {
    "textAlign": "center",
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ['title', 'message'],
  data: function data() {
    return {
      visible: false
    };
  },
  methods: {
    show: function show(message) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';

      this.visible = true;
      this.title = title;
      this.message = message;
    },
    diss: function diss() {
      this.visible = false;
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["messagebox"]
  }, [_c('div', {
    staticClass: ["titlebar"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: ["closebutton"],
    on: {
      "click": _vm.diss
    }
  }, [_c('text', {
    staticClass: ["close"]
  }, [_vm._v("⊗")])])]), _c('div', {
    staticClass: ["contentview"]
  }, [_c('text', {
    staticClass: ["message"]
  }, [_vm._v(_vm._s(_vm.message))])])])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MessageBox = __webpack_require__(2);

var _MessageBox2 = _interopRequireDefault(_MessageBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_MessageBox2.default.el = '#root';
new Vue(_MessageBox2.default);

/***/ })
/******/ ]);