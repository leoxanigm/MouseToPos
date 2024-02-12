/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scaffolding.js":
/*!************************!*\
  !*** ./scaffolding.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scaffolding)
/* harmony export */ });
function scaffolding() {
  var body = document.querySelector('body');
  var colsContainer = document.createElement('div');
  colsContainer.className = 'col-container';
  for (var i = 0; i < 7; i++) {
    var col = document.createElement('div');
    if (i === 0) {
      col.className = 'col col-first';
    } else {
      col.className = 'col';
      col.textContent = 'col' + i;
    }
    colsContainer.appendChild(col);
  }
  body.appendChild(colsContainer);
  var rowsContainer = document.createElement('div');
  rowsContainer.className = 'row-container';
  for (var _i = 0; _i < 24; _i++) {
    var row = document.createElement('div');
    row.className = 'row';
    var rowLabel = document.createElement('div');
    rowLabel.className = 'row-label';
    rowLabel.textContent = 'row' + _i;
    var rowContent = document.createElement('div');
    rowContent.className = 'row-content';
    row.appendChild(rowLabel);
    row.appendChild(rowContent);
    rowsContainer.appendChild(row);
  }
  body.appendChild(rowsContainer);
}

/***/ }),

/***/ "../lib/index.css":
/*!************************!*\
  !*** ../lib/index.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../lib/index.ts":
/*!***********************!*\
  !*** ../lib/index.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "../lib/index.css");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MouseToPos_instances, _MouseToPos_targetEls, _MouseToPos_events, _MouseToPos_rows, _MouseToPos_cols, _MouseToPos_eventMap, _MouseToPos_init;

class MouseToPos {
    constructor(options) {
        var _a, _b;
        _MouseToPos_instances.add(this);
        _MouseToPos_targetEls.set(this, void 0);
        _MouseToPos_events.set(this, void 0);
        _MouseToPos_rows.set(this, void 0);
        _MouseToPos_cols.set(this, void 0);
        _MouseToPos_eventMap.set(this, {
            hover: 'mousemove',
            click: 'mousedown'
        });
        this.hoverHandler = (e) => {
            console.log('hover');
        };
        this.clickHandler = (e) => {
            console.log('click');
        };
        __classPrivateFieldSet(this, _MouseToPos_targetEls, options.targetEls, "f");
        __classPrivateFieldSet(this, _MouseToPos_events, options.events, "f");
        __classPrivateFieldSet(this, _MouseToPos_rows, ((_a = options.subdivision) === null || _a === void 0 ? void 0 : _a.rows) || 1, "f");
        __classPrivateFieldSet(this, _MouseToPos_cols, ((_b = options.subdivision) === null || _b === void 0 ? void 0 : _b.rows) || 1, "f");
        __classPrivateFieldGet(this, _MouseToPos_instances, "m", _MouseToPos_init).call(this);
    }
}
_MouseToPos_targetEls = new WeakMap(), _MouseToPos_events = new WeakMap(), _MouseToPos_rows = new WeakMap(), _MouseToPos_cols = new WeakMap(), _MouseToPos_eventMap = new WeakMap(), _MouseToPos_instances = new WeakSet(), _MouseToPos_init = function _MouseToPos_init() {
    if (typeof __classPrivateFieldGet(this, _MouseToPos_events, "f") === 'undefined' || !Array.isArray(__classPrivateFieldGet(this, _MouseToPos_events, "f"))) {
        throw new TypeError('You must provide an event list with at least one event.');
    }
    if (typeof __classPrivateFieldGet(this, _MouseToPos_targetEls, "f") === 'undefined' ||
        !Array.isArray(__classPrivateFieldGet(this, _MouseToPos_events, "f"))) {
        throw new TypeError('You must provide an element list with at least one element.');
    }
    __classPrivateFieldGet(this, _MouseToPos_events, "f").forEach((event) => {
        const mouseEvent = __classPrivateFieldGet(this, _MouseToPos_eventMap, "f")[event];
        __classPrivateFieldGet(this, _MouseToPos_targetEls, "f").forEach(element => {
            element.addEventListener(mouseEvent, e => {
                this[`${event}Handler`](e);
            });
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MouseToPos);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "../lib/index.ts");
/* harmony import */ var _scaffolding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scaffolding */ "./scaffolding.js");

// Init scaffolding

(0,_scaffolding__WEBPACK_IMPORTED_MODULE_1__["default"])();
const rows = document.querySelectorAll('.row-content');
const mouseToPos = new _lib__WEBPACK_IMPORTED_MODULE_0__["default"]({ targetEls: rows, events: ['hover', 'click'] });

})();

/******/ })()
;
//# sourceMappingURL=index.js.map