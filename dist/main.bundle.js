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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(43);
module.exports = __webpack_require__(44);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#ivaap" });
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Get theme color\n */\n/**\n * Get theme color\n */\n/**\n * Generate theme container with background & color\n */\n/**\n * Generate background using theme color\n */\n/**\n * Generate text using theme color\n */\n/**\n * Generate border using theme color\n */\n/**\n * Generate text color contrast to theme color\n  */\n.mui-bg-of-primary {\n  background-color: #336a99;\n}\n\n.mui-bg-of-primary {\n  background-color: #336a99;\n}\n\n.mui-txt-of-primary {\n  color: #336a99;\n}\n\n.mui-border-of-primary {\n  border-color: #336a99;\n}\n\n.mui-text-on-primary {\n  color: white;\n}\n\n.mui-disabled-text-on-primary {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mui-border-on-primary {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n.mui-container-of-primary {\n  background-color: #336a99;\n  color: white;\n}\n\n.mui-container-bold-of-primary {\n  background-color: #2e5f8a;\n  color: white;\n}\n\n.mui-bg-of-alert {\n  background-color: #d9534f;\n}\n\n.mui-bg-of-alert {\n  background-color: #d9534f;\n}\n\n.mui-txt-of-alert {\n  color: #d9534f;\n}\n\n.mui-border-of-alert {\n  border-color: #d9534f;\n}\n\n.mui-text-on-alert {\n  color: white;\n}\n\n.mui-disabled-text-on-alert {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mui-border-on-alert {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n.mui-container-of-alert {\n  background-color: #d9534f;\n  color: white;\n}\n\n.mui-container-bold-of-alert {\n  background-color: #c34b47;\n  color: white;\n}\n\n.mui-bg-of-accent {\n  background-color: #00c300;\n}\n\n.mui-bg-of-accent {\n  background-color: #00c300;\n}\n\n.mui-txt-of-accent {\n  color: #00c300;\n}\n\n.mui-border-of-accent {\n  border-color: #00c300;\n}\n\n.mui-text-on-accent {\n  color: white;\n}\n\n.mui-disabled-text-on-accent {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mui-border-on-accent {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n.mui-container-of-accent {\n  background-color: #00c300;\n  color: white;\n}\n\n.mui-container-bold-of-accent {\n  background-color: #00b000;\n  color: white;\n}\n\n.mui-bg-of-surface {\n  background-color: #484848;\n}\n\n.mui-bg-of-surface {\n  background-color: #484848;\n}\n\n.mui-txt-of-surface {\n  color: #484848;\n}\n\n.mui-border-of-surface {\n  border-color: #484848;\n}\n\n.mui-text-on-surface {\n  color: #c3c3c3;\n}\n\n.mui-disabled-text-on-surface {\n  color: rgba(195, 195, 195, 0.3);\n}\n\n.mui-border-on-surface {\n  border-color: rgba(195, 195, 195, 0.2);\n}\n\n.mui-container-of-surface {\n  background-color: #484848;\n  color: #c3c3c3;\n}\n\n.mui-container-bold-of-surface {\n  background-color: #414141;\n  color: #c3c3c3;\n}\n\n.mui-bg-of-background {\n  background-color: #292929;\n}\n\n.mui-bg-of-background {\n  background-color: #292929;\n}\n\n.mui-txt-of-background {\n  color: #292929;\n}\n\n.mui-border-of-background {\n  border-color: #292929;\n}\n\n.mui-text-on-background {\n  color: #7b7b7b;\n}\n\n.mui-disabled-text-on-background {\n  color: rgba(123, 123, 123, 0.3);\n}\n\n.mui-border-on-background {\n  border-color: rgba(123, 123, 123, 0.2);\n}\n\n.mui-container-of-background {\n  background-color: #292929;\n  color: #7b7b7b;\n}\n\n.mui-container-bold-of-background {\n  background-color: #252525;\n  color: #7b7b7b;\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.ivp-typo__h1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -0.01562em;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\n.ivp-typo__h2 {\n  font-size: 3.75rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -0.00833em;\n}\n\n.ivp-typo__h3 {\n  font-size: 3rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.04;\n  letter-spacing: 0em;\n}\n\n.ivp-typo__h4 {\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  text-decoration: inherit;\n  text-transform: inherit;\n  font-size: 2.125rem;\n  line-height: 2.5rem;\n  letter-spacing: 0.0073529412em;\n}\n\n.ivp-typo__h5 {\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.ivp-typo__h6 {\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  -webkit-font-smoothing: antialiased;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\n.ivp-typo__subtitle {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 1rem;\n  line-height: 1.75rem;\n  font-weight: 400;\n  letter-spacing: 0.009375em;\n  -webkit-font-smoothing: antialiased;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.ivp-typo__subtitle--bold {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n  font-weight: 500;\n  letter-spacing: 0.0071428571em;\n  -webkit-font-smoothing: antialiased;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.ivp-typo__body {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1.25rem;\n  font-weight: 400;\n  text-decoration: inherit;\n  text-transform: inherit;\n  font-size: 0.875rem;\n  letter-spacing: 0.0178571429em;\n}\n\n.ivp-typo__link {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 0.875rem;\n  line-height: 2.25rem;\n  letter-spacing: 0.0892857143em;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 500;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.ivp-typo__caption {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 0.75rem;\n  letter-spacing: 0.0333333333em;\n  -webkit-font-smoothing: antialiased;\n  line-height: 0.9rem;\n  font-weight: 400;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n/**\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n@-webkit-keyframes mui-anim--spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes mui-anim--spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@font-face {\n  font-family: \"ivaap\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n/**\n * Generate css rules for icons\n */\n.ivp-icon-info {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-info:before {\n  content: \"\";\n}\n\n.ivp-icon-plus {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-plus:before {\n  content: \"\";\n}\n\n.ivp-icon-minus {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-minus:before {\n  content: \"\";\n}\n\n.ivp-icon-folder {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-folder:before {\n  content: \"\";\n}\n\n.ivp-icon-file {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-file:before {\n  content: \"\";\n}\n\n.ivp-icon-spin {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-spin:before {\n  content: \"\";\n}\n\n.ivp-icon-exclamation {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-exclamation:before {\n  content: \"\";\n}\n\n.ivp-icon-caret-down {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-caret-down:before {\n  content: \"\";\n}\n\n.ivp-icon-cross {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-cross:before {\n  content: \"\";\n}\n\n.ivp-icon-bars {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-bars:before {\n  content: \"\";\n}\n\n.ivp-icon-zoom-in {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-zoom-in:before {\n  content: \"\";\n}\n\n.ivp-icon-zoom-out {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-zoom-out:before {\n  content: \"\";\n}\n\n.ivp-icon-collapsed {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-collapsed:before {\n  content: \"\";\n}\n\n.ivp-icon-expanded {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-expanded:before {\n  content: \"\";\n}\n\n.ivp-icon-check {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-check:before {\n  content: \"\";\n}\n\n.ivp-icon-circle {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-circle:before {\n  content: \"\";\n}\n\n.ivp-icon-circle-checked {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-circle-checked:before {\n  content: \"\";\n}\n\n.ivp-icon-square {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-square:before {\n  content: \"\";\n}\n\n.ivp-icon-square-checked {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-square-checked:before {\n  content: \"\";\n}\n\n.ivp-icon-three-dots-horizontal {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-three-dots-horizontal:before {\n  content: \"\";\n}\n\n.ivp-icon-three-dots-vertical {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ivp-icon-three-dots-vertical:before {\n  content: \"\";\n}\n\n@-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale(0);\n  }\n  to {\n    opacity: 0;\n    transform: scale(10);\n  }\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale(0);\n  }\n  to {\n    opacity: 0;\n    transform: scale(10);\n  }\n}\n.mui-corner__all--small {\n  border-radius: 3px;\n}\n\n.mui-corner__top-left--small {\n  border-top-left-radius: 3px;\n}\n\n.mui-corner__top-right--small {\n  border-top-right-radius: 3px;\n}\n\n.mui-corner__bottom-left--small {\n  border-bottom-left-radius: 3px;\n}\n\n.mui-corner__bottom-right--small {\n  border-bottom-right-radius: 3px;\n}\n\n.mui-corner__all--medium {\n  border-radius: 3px;\n}\n\n.mui-corner__top-left--medium {\n  border-top-left-radius: 3px;\n}\n\n.mui-corner__top-right--medium {\n  border-top-right-radius: 3px;\n}\n\n.mui-corner__bottom-left--medium {\n  border-bottom-left-radius: 3px;\n}\n\n.mui-corner__bottom-right--medium {\n  border-bottom-right-radius: 3px;\n}\n\n.mui-corner__all--large {\n  border-radius: 0px;\n}\n\n.mui-corner__top-left--large {\n  border-top-left-radius: 0px;\n}\n\n.mui-corner__top-right--large {\n  border-top-right-radius: 0px;\n}\n\n.mui-corner__bottom-left--large {\n  border-bottom-left-radius: 0px;\n}\n\n.mui-corner__bottom-right--large {\n  border-bottom-right-radius: 0px;\n}\n\n.mui-absolute--filled {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n\n.mui-link--clickable {\n  cursor: pointer;\n}\n\n.mui-flex--inline {\n  display: --webkit-inline-flex;\n  display: inline-flex;\n}\n\n.mui-flex {\n  display: --webkit-flex;\n  display: flex;\n}\n\n.mui-flex--hor {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n\n.mui-elevate--z3 {\n  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mui-flex--ver {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n}\n\n.mui-flex-item--scaled {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n.mui-flex-align__container-cross-axis--center {\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n}\n\n.mui-flex-align__container-cross-axis--start {\n  align-items: flex-start;\n  -ms-align-items: flex-start;\n  -ms-flex-align: flex-start;\n}\n\n.mui-flex-align__container-cross-axis--end {\n  align-items: flex-end;\n  -ms-align-items: flex-end;\n  -ms-flex-align: flex-end;\n}\n\n.mui-flex-align__container-main-axis--center {\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n}\n\n.mui-flex-align__container-main-axis--start {\n  justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n}\n\n.mui-flex-align__container-main-axis--end {\n  justify-content: flex-end;\n  -ms-justify-content: flex-end;\n  -ms-flex-pack: flex-end;\n}\n\n.mui-padding__all--small {\n  padding: 4px;\n}\n\n.mui-padding__left--small {\n  padding-left: 4px;\n}\n\n.mui-padding__right--small {\n  padding-right: 4px;\n}\n\n.mui-padding__bottom--small {\n  padding-bottom: 4px;\n}\n\n.mui-padding__top--small {\n  padding-top: 4px;\n}\n\n.mui-margin__all--small {\n  margin: 4px;\n}\n\n.mui-margin__left--small {\n  margin-left: 4px;\n}\n\n.mui-margin__right--small {\n  margin-right: 4px;\n}\n\n.mui-margin__bottom--small {\n  margin-bottom: 4px;\n}\n\n.mui-margin__top--small {\n  margin-top: 4px;\n}\n\n.mui-padding__all--medium {\n  padding: 8px;\n}\n\n.mui-padding__left--medium {\n  padding-left: 8px;\n}\n\n.mui-padding__right--medium {\n  padding-right: 8px;\n}\n\n.mui-padding__bottom--medium {\n  padding-bottom: 8px;\n}\n\n.mui-padding__top--medium {\n  padding-top: 8px;\n}\n\n.mui-margin__all--medium {\n  margin: 8px;\n}\n\n.mui-margin__left--medium {\n  margin-left: 8px;\n}\n\n.mui-margin__right--medium {\n  margin-right: 8px;\n}\n\n.mui-margin__bottom--medium {\n  margin-bottom: 8px;\n}\n\n.mui-margin__top--medium {\n  margin-top: 8px;\n}\n\n.mui-padding__all--large {\n  padding: 16px;\n}\n\n.mui-padding__left--large {\n  padding-left: 16px;\n}\n\n.mui-padding__right--large {\n  padding-right: 16px;\n}\n\n.mui-padding__bottom--large {\n  padding-bottom: 16px;\n}\n\n.mui-padding__top--large {\n  padding-top: 16px;\n}\n\n.mui-margin__all--large {\n  margin: 16px;\n}\n\n.mui-margin__left--large {\n  margin-left: 16px;\n}\n\n.mui-margin__right--large {\n  margin-right: 16px;\n}\n\n.mui-margin__bottom--large {\n  margin-bottom: 16px;\n}\n\n.mui-margin__top--large {\n  margin-top: 16px;\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-el--hidden {\n  display: none;\n}\n\n.mui-box {\n  position: relative;\n}\n\n.mui-el--fit-to-parent {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n\n.mui-flex-child--expanded {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n.mui-flex__cross-axis-self--center {\n  align-self: center;\n  -ms-align-self: center;\n  -webkit-align-self: center;\n}\n\n.mui-flex__cross-axis-self--start {\n  align-self: flex-start;\n  -ms-align-self: flex-start;\n  -webkit-align-self: flex-start;\n}\n\n.mui-flex__cross-axis-self--end {\n  align-self: flex-end;\n  -ms-align-self: flex-end;\n  -webkit-align-self: flex-end;\n}\n\n.mui-center {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n}\n\n.mui-box__cross-axis--center {\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n}\n\n.mui-box__cross-axis--start {\n  align-items: flex-start;\n  -ms-align-items: flex-start;\n  -ms-flex-align: flex-start;\n}\n\n.mui-box__cross-axis--end {\n  align-items: flex-end;\n  -ms-align-items: flex-end;\n  -ms-flex-align: flex-end;\n}\n\n.mui-box__main-axis--center {\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n}\n\n.mui-box__main-axis--start {\n  justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n}\n\n.mui-box__main-axis--end {\n  justify-content: flex-end;\n  -ms-justify-content: flex-end;\n  -ms-flex-pack: flex-end;\n}\n\n.mui-vbox {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n}\n\n.mui-hbox {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n\n.mui-fitted-box {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-button, .mui-button--disabled, .mui-button-alert, .mui-button-accent, .mui-button-primary, .mui-button-link, .mui-button-icon, .mui-button--sm {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  text-transform: uppercase;\n  display: inline-block;\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  color: inherit;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n}\n.mui-button:after, .mui-button--disabled:after, .mui-button-alert:after, .mui-button-accent:after, .mui-button-primary:after, .mui-button-link:after, .mui-button-icon:after, .mui-button--sm:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-button:active:after, .mui-button--disabled:active:after, .mui-button-alert:active:after, .mui-button-accent:active:after, .mui-button-primary:active:after, .mui-button-link:active:after, .mui-button-icon:active:after, .mui-button--sm:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n\n.mui-button__left-container {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  -ms-align-items: flex-start;\n  -ms-flex-align: flex-start;\n}\n\n.mui-button__desc {\n  font-size: 9px;\n  opacity: 0.6;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mui-button__icon {\n  margin-right: 8px;\n}\n.mui-button__icon:last-child {\n  margin-right: 0px;\n}\n\n.mui-button__caret {\n  margin-left: 8px;\n}\n\n.mui-button--sm {\n  padding: 5px;\n}\n\n.mui-button-icon {\n  padding: 12px;\n}\n\n.mui-button-link {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  text-transform: uppercase;\n  display: inline-block;\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  color: inherit;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  padding: 8px;\n  color: inherit;\n}\n.mui-button-link:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-button-link:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.mui-button-link:focus:before, .mui-button-link:hover:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.1);\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.mui-button-primary {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  background-color: #336a99;\n  color: white;\n}\n\n.mui-button-accent {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  background-color: #00c300;\n  color: white;\n}\n\n.mui-button-alert {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  background-color: #d9534f;\n  color: white;\n}\n\n.mui-button--square {\n  border-radius: 0px;\n  padding: 8px;\n  color: inherit;\n}\n\n.mui-button__menu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.mui-button__caret-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-button__caret-icon:before {\n  content: \"\";\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-dropdown {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  background: none;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  overflow: hidden;\n  color: inherit;\n  font-weight: bold;\n  font-size: 13px;\n  padding: 8px;\n  border-radius: 3px;\n  background-color: #484848;\n  color: #c3c3c3;\n}\n.mui-dropdown:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-dropdown:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.mui-dropdown:focus, .mui-dropdown:hover {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-dropdown__display {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n.mui-dropdown__caret-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.mui-dropdown__caret-icon:before {\n  content: \"\";\n}\n\n.mui-dropdown__label {\n  margin-left: 8px;\n  height: 24px;\n  line-height: 24px;\n}\n\n.mui-dropdown__image {\n  margin-left: 8px;\n  width: 100px;\n  height: 24px;\n  line-height: 24px;\n  border-radius: 3px;\n  text-align: left;\n}\n\n/*!\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-checkbox {\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  padding: 8px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  overflow: hidden;\n  color: inherit;\n  font-weight: bold;\n  font-size: 13px;\n  border-radius: 3px;\n}\n.mui-checkbox:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-checkbox:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.mui-checkbox:focus, .mui-checkbox:hover {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-checkbox--selected {\n  color: #00c300;\n}\n\n.mui-checkbox--hor {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n}\n.mui-checkbox--hor > .mui-checkbox__label {\n  margin-left: 8px;\n}\n\n.mui-checkbox__icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  -webkit-font-smoothing: antialiased;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n.mui-checkbox__icon:before {\n  content: \"\";\n}\n\n.mui-checkbox__icon--selected {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  -webkit-font-smoothing: antialiased;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n.mui-checkbox__icon--selected:before {\n  content: \"\";\n}\n\n/*!\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-button-group {\n  border: none;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.mui-button-group--hor {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n.mui-button-group--hor > .mui-button-group__btn {\n  margin-right: 1px;\n}\n.mui-button-group--hor > .mui-button-group__btn:last-child {\n  margin-right: 0px;\n}\n\n.mui-button-group--ver {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n}\n.mui-button-group--ver > .mui-button-group__btn {\n  margin-bottom: 1px;\n}\n.mui-button-group--ver > .mui-button-group__btn:last-child {\n  margin-bottom: 0px;\n}\n\n.mui-button-group__btn {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  text-transform: uppercase;\n  display: inline-block;\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  color: inherit;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  border-radius: 0px;\n  padding: 8px;\n  color: inherit;\n  background-color: #484848;\n  color: #c3c3c3;\n  padding: 16px;\n}\n.mui-button-group__btn:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-button-group__btn:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.mui-button-group__btn:not(.mui-button-group__btn--selected):not(.mui-button-group__btn--active):focus:before, .mui-button-group__btn:not(.mui-button-group__btn--selected):not(.mui-button-group__btn--active):hover:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.1);\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.mui-button-group__btn--selected:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.3);\n  color: white;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.mui-button-group__btn--active:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.3);\n  color: white;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n/*!\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-radio-group--hor {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n\n.mui-radio-group--ver {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n}\n\n.mui-radio-group__btn {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  text-transform: uppercase;\n  display: inline-block;\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  color: inherit;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  padding: 8px;\n  color: inherit;\n  justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  padding: 8px;\n}\n.mui-radio-group__btn:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-radio-group__btn:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.mui-radio-group__btn:focus:before, .mui-radio-group__btn:hover:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.1);\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.mui-radio-group__btn--selected {\n  color: #00c300;\n}\n\n.mui-radio-group__btn-icon-empty {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  -webkit-font-smoothing: antialiased;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n.mui-radio-group__btn-icon-empty:before {\n  content: \"\";\n}\n\n.mui-radio-group__btn-icon-selected {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  -webkit-font-smoothing: antialiased;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n.mui-radio-group__btn-icon-selected:before {\n  content: \"\";\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-text {\n  position: relative;\n  box-sizing: border-box;\n  border-color: rgba(195, 195, 195, 0.2);\n  color: #c3c3c3;\n}\n\n.mui-text__input {\n  padding: 15px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  background: transparent;\n  outline: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: inherit;\n  background-color: #484848;\n}\n.mui-text__input:focus {\n  border: 1px solid #00c300;\n}\n\n.mui-text__input-container {\n  position: relative;\n  border-color: inherit;\n  color: inherit;\n}\n\n.mui-text--error > .mui-text__input-container > .mui-text__input {\n  border-color: #d9534f;\n}\n.mui-text--error > .mui-text__input-container > .mui-text__input:focus {\n  border-color: #d9534f;\n}\n\n.mui-text__right-container {\n  position: absolute;\n  top: 50%;\n  right: 0px;\n  transform: translateY(-50%);\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n.mui-text__right-container > *:last-child {\n  padding-right: 16px;\n}\n.mui-text__right-container > *:first-child {\n  padding-left: 16px;\n}\n\n.mui-text__error-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-text__error-icon:before {\n  content: \"\";\n}\n\n.mui-text__assistive-text {\n  position: absolute;\n  font-size: 80%;\n  color: #d9534f;\n  margin-left: 16px;\n}\n\n.mui-text__left-icon,\n.mui-text__right-icon {\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  padding: 0px 16px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  overflow: hidden;\n  color: inherit;\n}\n.mui-text__left-icon:after,\n.mui-text__right-icon:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-text__left-icon:active:after,\n.mui-text__right-icon:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.mui-text__left-icon:focus, .mui-text__left-icon:hover,\n.mui-text__right-icon:focus,\n.mui-text__right-icon:hover {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-text__right-icon {\n  padding: 16px;\n}\n\n.mui-text__left-icon {\n  position: absolute;\n  left: 0px;\n  height: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.mui-text__assistive-icon {\n  padding: 16px 8px;\n  padding-right: 0px;\n}\n.mui-text__assistive-icon:last-child {\n  padding-right: 16px;\n}\n\n.mui-text__assistive-text--visible {\n  padding-bottom: 16px;\n}\n\n.mui-text__left-icon--visible {\n  padding-left: 46px;\n}\n\n.mui-text__right-icon--visible,\n.mui-text__assistive-icon--visible {\n  padding-right: 46px;\n}\n\n.mui-text__right-icon--visible.mui-text__assistive-icon--visible {\n  padding-right: 80px;\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-number {\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-color: rgba(195, 195, 195, 0.2);\n  color: #c3c3c3;\n}\n\n.mui-number__input {\n  padding: 16px 46px;\n  padding-left: 16px;\n  padding-right: 92px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  background: transparent;\n  outline: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: inherit;\n  background-color: #484848;\n}\n.mui-number__input:focus {\n  border: 1px solid #00c300;\n}\n\n.mui-number--no-control {\n  padding: 16px;\n}\n\n.mui-number__incr {\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  bottom: 1px;\n  padding: 0px 16px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  overflow: hidden;\n  color: inherit;\n  background-color: #414141;\n  color: #c3c3c3;\n}\n.mui-number__incr:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-number__incr:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.mui-number__incr:focus, .mui-number__incr:hover {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-number__decr {\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  position: absolute;\n  background: none;\n  border: none;\n  outline: none;\n  right: 48px;\n  top: 1px;\n  bottom: 1px;\n  padding: 0px 16px;\n  cursor: pointer;\n  color: inherit;\n  background-color: #414141;\n  color: #c3c3c3;\n}\n.mui-number__decr:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-number__decr:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.mui-number__decr:focus, .mui-number__decr:hover {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-number__incr-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-number__incr-icon:before {\n  content: \"\";\n}\n\n.mui-number__decr-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-number__decr-icon:before {\n  content: \"\";\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n/*! Pickr 1.4.6 MIT | https://github.com/Simonwep/pickr */\n.pickr {\n  position: relative;\n  overflow: visible;\n  transform: translateY(0);\n}\n\n.pickr * {\n  box-sizing: border-box;\n  outline: none;\n  border: none;\n  -webkit-appearance: none;\n}\n\n.pickr .pcr-button {\n  position: relative;\n  height: 2em;\n  width: 2em;\n  padding: 0.5em;\n  cursor: pointer;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;\n  border-radius: 0.15em;\n  background: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" stroke=\"%2342445A\" stroke-width=\"5px\" stroke-linecap=\"round\"><path d=\"M45,45L5,5\"></path><path d=\"M45,5L5,45\"></path></svg>') no-repeat 50%;\n  background-size: 0;\n  transition: all 0.3s;\n}\n\n.pickr .pcr-button:before {\n  background: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size: 0.5em;\n  z-index: -1;\n  z-index: auto;\n}\n\n.pickr .pcr-button:after, .pickr .pcr-button:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 0.15em;\n}\n\n.pickr .pcr-button:after {\n  transition: background 0.3s;\n  background: currentColor;\n}\n\n.pickr .pcr-button.clear {\n  background-size: 70%;\n}\n\n.pickr .pcr-button.clear:before {\n  opacity: 0;\n}\n\n.pickr .pcr-button.clear:focus {\n  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.85), 0 0 0 3px currentColor;\n}\n\n.pickr .pcr-button.disabled {\n  cursor: not-allowed;\n}\n\n.pcr-app *, .pickr * {\n  box-sizing: border-box;\n  outline: none;\n  border: none;\n  -webkit-appearance: none;\n}\n\n.pcr-app button.pcr-active, .pcr-app button:focus, .pcr-app input.pcr-active, .pcr-app input:focus, .pickr button.pcr-active, .pickr button:focus, .pickr input.pcr-active, .pickr input:focus {\n  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.85), 0 0 0 3px currentColor;\n}\n\n.pcr-app .pcr-palette, .pcr-app .pcr-slider, .pickr .pcr-palette, .pickr .pcr-slider {\n  transition: box-shadow 0.3s;\n}\n\n.pcr-app .pcr-palette:focus, .pcr-app .pcr-slider:focus, .pickr .pcr-palette:focus, .pickr .pcr-slider:focus {\n  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.85), 0 0 0 3px rgba(0, 0, 0, 0.25);\n}\n\n.pcr-app {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  z-index: 10000;\n  border-radius: 0.1em;\n  background: #fff;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s, visibility 0s 0.3s;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;\n  box-shadow: 0 0.15em 1.5em 0 rgba(0, 0, 0, 0.1), 0 0 1em 0 rgba(0, 0, 0, 0.03);\n  left: 0;\n  top: 0;\n}\n\n.pcr-app.visible {\n  transition: opacity 0.3s;\n  visibility: visible;\n  opacity: 1;\n}\n\n.pcr-app .pcr-swatches {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 0.75em;\n}\n\n.pcr-app .pcr-swatches.pcr-last {\n  margin: 0;\n}\n\n@supports (display: grid) {\n  .pcr-app .pcr-swatches {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(auto-fit, 1.75em);\n  }\n}\n.pcr-app .pcr-swatches > button {\n  font-size: 1em;\n  position: relative;\n  width: calc(1.75em - 5px);\n  height: calc(1.75em - 5px);\n  border-radius: 0.15em;\n  cursor: pointer;\n  margin: 2.5px;\n  flex-shrink: 0;\n  justify-self: center;\n  transition: all 0.15s;\n  overflow: hidden;\n  background: transparent;\n  z-index: 1;\n}\n\n.pcr-app .pcr-swatches > button:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size: 6px;\n  border-radius: 0.15em;\n  z-index: -1;\n}\n\n.pcr-app .pcr-swatches > button:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: currentColor;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 0.15em;\n  box-sizing: border-box;\n}\n\n.pcr-app .pcr-swatches > button:hover {\n  -webkit-filter: brightness(1.05);\n  filter: brightness(1.05);\n}\n\n.pcr-app .pcr-interaction {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 0 -0.2em;\n}\n\n.pcr-app .pcr-interaction > * {\n  margin: 0 0.2em;\n}\n\n.pcr-app .pcr-interaction input {\n  letter-spacing: 0.07em;\n  font-size: 0.75em;\n  text-align: center;\n  cursor: pointer;\n  color: #75797e;\n  background: #f1f3f4;\n  border-radius: 0.15em;\n  transition: all 0.15s;\n  padding: 0.45em 0.5em;\n  margin-top: 0.75em;\n}\n\n.pcr-app .pcr-interaction input:hover {\n  -webkit-filter: brightness(0.975);\n  filter: brightness(0.975);\n}\n\n.pcr-app .pcr-interaction input:focus {\n  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.85), 0 0 0 3px rgba(66, 133, 244, 0.75);\n}\n\n.pcr-app .pcr-interaction .pcr-result {\n  color: #75797e;\n  text-align: left;\n  flex: 1 1 8em;\n  min-width: 8em;\n  transition: all 0.2s;\n  border-radius: 0.15em;\n  background: #f1f3f4;\n  cursor: text;\n}\n\n.pcr-app .pcr-interaction .pcr-result::-moz-selection {\n  background: #4285f4;\n  color: #fff;\n}\n\n.pcr-app .pcr-interaction .pcr-result::selection {\n  background: #4285f4;\n  color: #fff;\n}\n\n.pcr-app .pcr-interaction .pcr-type.active {\n  color: #fff;\n  background: #4285f4;\n}\n\n.pcr-app .pcr-interaction .pcr-cancel, .pcr-app .pcr-interaction .pcr-clear, .pcr-app .pcr-interaction .pcr-save {\n  width: auto;\n  color: #fff;\n}\n\n.pcr-app .pcr-interaction .pcr-cancel:hover, .pcr-app .pcr-interaction .pcr-clear:hover, .pcr-app .pcr-interaction .pcr-save:hover {\n  -webkit-filter: brightness(0.925);\n  filter: brightness(0.925);\n}\n\n.pcr-app .pcr-interaction .pcr-save {\n  background: #4285f4;\n}\n\n.pcr-app .pcr-interaction .pcr-cancel, .pcr-app .pcr-interaction .pcr-clear {\n  background: #f44250;\n}\n\n.pcr-app .pcr-interaction .pcr-cancel:focus, .pcr-app .pcr-interaction .pcr-clear:focus {\n  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.85), 0 0 0 3px rgba(244, 66, 80, 0.75);\n}\n\n.pcr-app .pcr-selection .pcr-picker {\n  position: absolute;\n  height: 18px;\n  width: 18px;\n  border: 2px solid #fff;\n  border-radius: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.pcr-app .pcr-selection .pcr-color-chooser, .pcr-app .pcr-selection .pcr-color-opacity, .pcr-app .pcr-selection .pcr-color-palette {\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: flex;\n  flex-direction: column;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.pcr-app .pcr-selection .pcr-color-chooser:active, .pcr-app .pcr-selection .pcr-color-opacity:active, .pcr-app .pcr-selection .pcr-color-palette:active {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.pcr-app[data-theme=monolith] {\n  width: 14.25em;\n  max-width: 95vw;\n  padding: 0.8em;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection {\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection, .pcr-app[data-theme=monolith] .pcr-selection .pcr-color-preview {\n  display: flex;\n  justify-content: space-between;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-preview {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 1em;\n  flex-direction: row;\n  margin-bottom: 0.5em;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-preview:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size: 0.5em;\n  border-radius: 0.15em;\n  z-index: -1;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-preview .pcr-last-color {\n  cursor: pointer;\n  transition: background-color 0.3s, box-shadow 0.3s;\n  border-radius: 0.15em 0 0 0.15em;\n  z-index: 2;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-preview .pcr-current-color {\n  border-radius: 0 0.15em 0.15em 0;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-preview .pcr-current-color, .pcr-app[data-theme=monolith] .pcr-selection .pcr-color-preview .pcr-last-color {\n  background: currentColor;\n  width: 50%;\n  height: 100%;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-palette {\n  width: 100%;\n  height: 8em;\n  z-index: 1;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-palette .pcr-palette {\n  border-radius: 0.15em;\n  width: 100%;\n  height: 100%;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-palette .pcr-palette:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size: 0.5em;\n  border-radius: 0.15em;\n  z-index: -1;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-chooser, .pcr-app[data-theme=monolith] .pcr-selection .pcr-color-opacity {\n  height: 0.5em;\n  margin-top: 0.75em;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-chooser .pcr-picker, .pcr-app[data-theme=monolith] .pcr-selection .pcr-color-opacity .pcr-picker {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-chooser .pcr-slider, .pcr-app[data-theme=monolith] .pcr-selection .pcr-color-opacity .pcr-slider {\n  flex-grow: 1;\n  border-radius: 50em;\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-chooser .pcr-slider {\n  background: linear-gradient(90deg, red, #ff0, #0f0, #0ff, #00f, #f0f, red);\n}\n\n.pcr-app[data-theme=monolith] .pcr-selection .pcr-color-opacity .pcr-slider {\n  background: linear-gradient(90deg, transparent, #000), url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size: 100%, 0.25em;\n}\n\n.mui-colorpicker {\n  width: 30px;\n  height: 30px;\n  border-radius: 3px;\n  position: relative;\n  padding: 0px 16px;\n  cursor: pointer;\n  background: none;\n  border: 1px solid lightgrey;\n  outline: none;\n  overflow: hidden;\n  color: inherit;\n  border-color: inherit;\n}\n.mui-colorpicker:hover, .mui-colorpicker:focus {\n  border-color: #00c300;\n}\n\n.mui-colorpicker__trans-img {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  background: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size: 6px;\n  border-radius: 0.15em;\n}\n\n.mui-colorpicker__bg {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n\n.pcr-app {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: #484848;\n  color: #c3c3c3;\n}\n\n.pcr-app[data-theme=monolith] {\n  width: auto;\n}\n\n.pcr-app .pcr-interaction .pcr-cancel:focus,\n.pcr-app .pcr-interaction .pcr-clear:focus,\n.pcr-app .pcr-interaction .pcr-cancel:hover,\n.pcr-app .pcr-interaction .pcr-clear:hover,\n.pcr-app .pcr-interaction .pcr-save:hover {\n  box-shadow: none;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n}\n.pcr-app .pcr-interaction .pcr-cancel:focus:after,\n.pcr-app .pcr-interaction .pcr-clear:focus:after,\n.pcr-app .pcr-interaction .pcr-cancel:hover:after,\n.pcr-app .pcr-interaction .pcr-clear:hover:after,\n.pcr-app .pcr-interaction .pcr-save:hover:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.pcr-app .pcr-interaction .pcr-cancel:focus:active:after,\n.pcr-app .pcr-interaction .pcr-clear:focus:active:after,\n.pcr-app .pcr-interaction .pcr-cancel:hover:active:after,\n.pcr-app .pcr-interaction .pcr-clear:hover:active:after,\n.pcr-app .pcr-interaction .pcr-save:hover:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.pcr-app .pcr-interaction .pcr-cancel:focus:focus:before, .pcr-app .pcr-interaction .pcr-cancel:focus:hover:before,\n.pcr-app .pcr-interaction .pcr-clear:focus:focus:before,\n.pcr-app .pcr-interaction .pcr-clear:focus:hover:before,\n.pcr-app .pcr-interaction .pcr-cancel:hover:focus:before,\n.pcr-app .pcr-interaction .pcr-cancel:hover:hover:before,\n.pcr-app .pcr-interaction .pcr-clear:hover:focus:before,\n.pcr-app .pcr-interaction .pcr-clear:hover:hover:before,\n.pcr-app .pcr-interaction .pcr-save:hover:focus:before,\n.pcr-app .pcr-interaction .pcr-save:hover:hover:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.1);\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.pcr-app .pcr-interaction input:focus {\n  box-shadow: none;\n}\n\n.pcr-app .pcr-interaction .pcr-save {\n  margin-left: 16px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  text-transform: uppercase;\n  display: inline-block;\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  color: inherit;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  background-color: #00c300;\n  color: white;\n}\n.pcr-app .pcr-interaction .pcr-save:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.pcr-app .pcr-interaction .pcr-save:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n\n.pcr-app .pcr-interaction .pcr-cancel, .pcr-app .pcr-interaction .pcr-clear {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  text-transform: uppercase;\n  display: inline-block;\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  color: inherit;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  padding: 8px;\n  color: inherit;\n}\n.pcr-app .pcr-interaction .pcr-cancel:after, .pcr-app .pcr-interaction .pcr-clear:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.pcr-app .pcr-interaction .pcr-cancel:active:after, .pcr-app .pcr-interaction .pcr-clear:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.pcr-app .pcr-interaction .pcr-cancel:focus:before, .pcr-app .pcr-interaction .pcr-cancel:hover:before, .pcr-app .pcr-interaction .pcr-clear:focus:before, .pcr-app .pcr-interaction .pcr-clear:hover:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.1);\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.pcr-app .pcr-interaction .pcr-result {\n  padding: 15px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  background: transparent;\n  outline: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: inherit;\n  background-color: #484848;\n  border-color: rgba(195, 195, 195, 0.2);\n  padding: 10px 16px;\n}\n.pcr-app .pcr-interaction .pcr-result:focus {\n  border: 1px solid #00c300;\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n  animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  box-sizing: border-box;\n  touch-action: manipulation;\n  background: #fff;\n  box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0, 0, 0, 0.08);\n}\n\n.flatpickr-calendar.open, .flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  box-shadow: none !important;\n}\n\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n\n.flatpickr-calendar .hasWeeks .dayContainer, .flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid #e6e6e6;\n}\n\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n\n.flatpickr-calendar:before, .flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: \"\";\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n\n.flatpickr-calendar.rightMost:before, .flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n\n.flatpickr-calendar.arrowTop:before, .flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: #e6e6e6;\n}\n\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #fff;\n}\n\n.flatpickr-calendar.arrowBottom:before, .flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: #e6e6e6;\n}\n\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #fff;\n}\n\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n.flatpickr-months {\n  display: flex;\n}\n\n.flatpickr-months .flatpickr-month {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.9);\n  fill: rgba(0, 0, 0, 0.9);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  flex: 1;\n}\n\n.flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 3;\n  color: rgba(0, 0, 0, 0.9);\n  fill: rgba(0, 0, 0, 0.9);\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled, .flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n\n.flatpickr-months .flatpickr-prev-month i, .flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month, .flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n  /*\n  /*rtl:begin:ignore*/\n  left: 0;\n  /*\n  /*rtl:end:ignore*/\n}\n\n/*\n/*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month, .flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n  /*\n  /*rtl:begin:ignore*/\n  right: 0;\n  /*\n  /*rtl:end:ignore*/\n}\n\n/*\n/*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover, .flatpickr-months .flatpickr-next-month:hover {\n  color: #959ea9;\n}\n\n.flatpickr-months .flatpickr-prev-month:hover svg, .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n\n.flatpickr-months .flatpickr-prev-month svg, .flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n}\n\n.flatpickr-months .flatpickr-prev-month svg path, .flatpickr-months .flatpickr-next-month svg path {\n  transition: fill 0.1s;\n  fill: inherit;\n}\n\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n\n.numInputWrapper input, .numInputWrapper span {\n  display: inline-block;\n}\n\n.numInputWrapper input {\n  width: 100%;\n}\n\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n\n.numInputWrapper input::-webkit-outer-spin-button, .numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(57, 57, 57, 0.15);\n  box-sizing: border-box;\n}\n\n.numInputWrapper span:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.numInputWrapper span:active {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n}\n\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(57, 57, 57, 0.6);\n  top: 26%;\n}\n\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(57, 57, 57, 0.6);\n  top: 40%;\n}\n\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n\n.numInputWrapper span svg path {\n  fill: rgba(0, 0, 0, 0.5);\n}\n\n.numInputWrapper:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  transform: translate3d(0, 0, 0);\n}\n\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0 ;\n  display: inline-block;\n}\n\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: rgba(0, 0, 0, 0.9);\n}\n\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: rgba(0, 0, 0, 0.9);\n}\n\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n\n.flatpickr-current-month input.cur-year[disabled], .flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(0, 0, 0, 0.5);\n  background: transparent;\n  pointer-events: none;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus, .flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: transparent;\n  outline: none;\n  padding: 0;\n}\n\n.flatpickr-weekdays {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 28px;\n}\n\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: flex;\n  flex: 1;\n}\n\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: transparent;\n  color: rgba(0, 0, 0, 0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  flex: 1;\n  font-weight: bolder;\n}\n\n.dayContainer, .flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  width: 307.875px;\n}\n\n.flatpickr-days:focus {\n  outline: 0;\n}\n\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  box-sizing: border-box;\n  display: inline-block;\n  display: flex;\n  flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  justify-content: space-around;\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n\n.dayContainer + .dayContainer {\n  box-shadow: -1px 0 0 #e6e6e6;\n}\n\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  box-sizing: border-box;\n  color: #393939;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  justify-content: center;\n  text-align: center;\n}\n\n.flatpickr-day.inRange, .flatpickr-day.prevMonthDay.inRange, .flatpickr-day.nextMonthDay.inRange, .flatpickr-day.today.inRange, .flatpickr-day.prevMonthDay.today.inRange, .flatpickr-day.nextMonthDay.today.inRange, .flatpickr-day:hover, .flatpickr-day.prevMonthDay:hover, .flatpickr-day.nextMonthDay:hover, .flatpickr-day:focus, .flatpickr-day.prevMonthDay:focus, .flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e6e6e6;\n  border-color: #e6e6e6;\n}\n\n.flatpickr-day.today {\n  border-color: #959ea9;\n}\n\n.flatpickr-day.today:hover, .flatpickr-day.today:focus {\n  border-color: #959ea9;\n  background: #959ea9;\n  color: #fff;\n}\n\n.flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay {\n  background: #569ff7;\n  box-shadow: none;\n  color: #fff;\n  border-color: #569ff7;\n}\n\n.flatpickr-day.selected.startRange, .flatpickr-day.startRange.startRange, .flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n\n.flatpickr-day.selected.endRange, .flatpickr-day.startRange.endRange, .flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #569ff7;\n}\n\n.flatpickr-day.selected.startRange.endRange, .flatpickr-day.startRange.startRange.endRange, .flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n\n.flatpickr-day.inRange {\n  border-radius: 0;\n  box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n\n.flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover, .flatpickr-day.prevMonthDay, .flatpickr-day.nextMonthDay, .flatpickr-day.notAllowed, .flatpickr-day.notAllowed.prevMonthDay, .flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(57, 57, 57, 0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n\n.flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: rgba(57, 57, 57, 0.1);\n}\n\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n}\n\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n\n.flatpickr-weekwrapper {\n  float: left;\n}\n\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  box-shadow: 1px 0 0 #e6e6e6;\n}\n\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n\n.flatpickr-weekwrapper span.flatpickr-day, .flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(57, 57, 57, 0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n\n.flatpickr-innerContainer {\n  display: block;\n  display: flex;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: flex;\n}\n\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.flatpickr-time .numInputWrapper {\n  flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #393939;\n}\n\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #393939;\n}\n\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n\n.flatpickr-time input {\n  background: transparent;\n  box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: #393939;\n  font-size: 14px;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n\n.flatpickr-time input.flatpickr-minute, .flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n\n.flatpickr-time .flatpickr-time-separator, .flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  color: #393939;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  align-self: center;\n}\n\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n\n.flatpickr-time input:hover, .flatpickr-time .flatpickr-am-pm:hover, .flatpickr-time input:focus, .flatpickr-time .flatpickr-am-pm:focus {\n  background: #eee;\n}\n\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.mui-datetime-picker {\n  border-color: rgba(195, 195, 195, 0.2);\n  color: #c3c3c3;\n}\n\n.mui-datetime-picker__input {\n  padding: 15px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  background: transparent;\n  outline: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: inherit;\n  background-color: #484848;\n}\n.mui-datetime-picker__input:focus {\n  border: 1px solid #00c300;\n}\n\n.flatpickr-months {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n}\n.flatpickr-months > .flatpickr-prev-month, .flatpickr-months > .flatpickr-next-month {\n  position: relative;\n  height: auto;\n  padding: 16px;\n  color: inherit;\n  fill: inherit;\n}\n.flatpickr-months > .flatpickr-month {\n  height: auto;\n  line-height: initial;\n  color: inherit;\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n.flatpickr-current-month {\n  position: relative;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  width: auto;\n  left: auto;\n  padding: 0px;\n  height: auto;\n}\n\n.flatpickr-calendar {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 3px;\n  background-color: #484848;\n  color: #c3c3c3;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n\n.flatpickr-innerContainer {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n}\n\n.flatpickr-rContainer {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n}\n\n.flatpickr-weekdaycontainer {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  padding: 0px 8px;\n}\n\nspan.flatpickr-weekdays {\n  margin: 0px 16px;\n  width: auto;\n  color: inherit;\n}\n\nspan.flatpickr-weekday {\n  color: inherit;\n}\n\n.flatpickr-days {\n  margin: 0px 8px;\n  width: auto;\n  margin-bottom: 16px;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n\n.dayContainer {\n  width: auto;\n  min-width: auto;\n  max-width: auto;\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n.flatpickr-day {\n  font-size: 16px;\n  color: inherit;\n  overflow: hidden;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month input.cur-year {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(195, 195, 195, 0.3);\n}\n\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: #484848;\n}\n\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #484848;\n}\n\n.flatpickr-day.today {\n  border-color: rgba(195, 195, 195, 0.2);\n}\n\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: none;\n  color: inherit;\n  border-color: transparent;\n}\n.flatpickr-day.selected:before,\n.flatpickr-day.startRange:before,\n.flatpickr-day.endRange:before,\n.flatpickr-day.selected.inRange:before,\n.flatpickr-day.startRange.inRange:before,\n.flatpickr-day.endRange.inRange:before,\n.flatpickr-day.selected:focus:before,\n.flatpickr-day.startRange:focus:before,\n.flatpickr-day.endRange:focus:before,\n.flatpickr-day.selected:hover:before,\n.flatpickr-day.startRange:hover:before,\n.flatpickr-day.endRange:hover:before,\n.flatpickr-day.selected.prevMonthDay:before,\n.flatpickr-day.startRange.prevMonthDay:before,\n.flatpickr-day.endRange.prevMonthDay:before,\n.flatpickr-day.selected.nextMonthDay:before,\n.flatpickr-day.startRange.nextMonthDay:before,\n.flatpickr-day.endRange.nextMonthDay:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.3);\n  color: white;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  background-color: rgba(0, 195, 0, 0.1);\n  border-color: transparent;\n  color: inherit;\n}\n\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  background-color: rgba(0, 195, 0, 0.1);\n  border-color: transparent;\n}\n\n/*!\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-card {\n  border: none;\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: #484848;\n  color: #c3c3c3;\n}\n\n.mui-card--ver {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n}\n\n.mui-card__header {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  padding: 16px 8px;\n}\n\n.mui-card__primary-title {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n  font-weight: 500;\n  letter-spacing: 0.0071428571em;\n  -webkit-font-smoothing: antialiased;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mui-card__second-title {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 0.75rem;\n  letter-spacing: 0.0333333333em;\n  -webkit-font-smoothing: antialiased;\n  line-height: 0.9rem;\n  font-weight: 400;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mui-card__footer-setting,\n.mui-card__header-settings {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  padding: 8px;\n}\n.mui-card__footer-setting:before,\n.mui-card__header-settings:before {\n  content: \"\";\n}\n\n.mui-card__header-icon {\n  padding: 8px;\n}\n\n.mui-card__header-body {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  padding: 0px 8px;\n}\n\n.mui-card__body {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: #bdbdbd;\n}\n\n.mui-card__header-actions {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n\n.mui-card__footer {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  padding: 8px 8px;\n  justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  padding-top: 0px;\n}\n\n.mui-card__footer-setting,\n.mui-card__header-settings,\n.mui-card__header-action,\n.mui-card__footer-action {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  text-transform: uppercase;\n  display: inline-block;\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  color: inherit;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  padding: 8px;\n}\n.mui-card__footer-setting:after,\n.mui-card__header-settings:after,\n.mui-card__header-action:after,\n.mui-card__footer-action:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-card__footer-setting:active:after,\n.mui-card__header-settings:active:after,\n.mui-card__header-action:active:after,\n.mui-card__footer-action:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.mui-card__footer-setting:focus, .mui-card__footer-setting:hover,\n.mui-card__header-settings:focus,\n.mui-card__header-settings:hover,\n.mui-card__header-action:focus,\n.mui-card__header-action:hover,\n.mui-card__footer-action:focus,\n.mui-card__footer-action:hover {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-content {\n  position: relative;\n}\n\n.mui-content--notification-visible {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n}\n\n.mui-notification {\n  opacity: 0.5;\n  font-weight: bold;\n}\n\n.mui-notification__icon {\n  margin-right: 8px;\n}\n\n.mui-content__loading-icon {\n  -webkit-animation: mui-anim--spin 2s infinite linear;\n          animation: mui-anim--spin 2s infinite linear;\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-content__loading-icon:before {\n  content: \"\";\n}\n\n.mui-content__error-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-content__error-icon:before {\n  content: \"\";\n}\n\n.mui-content__info-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-content__info-icon:before {\n  content: \"\";\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-menu {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n  max-height: 400px;\n  overflow: auto;\n  background-color: #484848;\n  color: #c3c3c3;\n}\n\n.mui-menu__item-container {\n  padding: 8px 0px;\n  margin: 0px;\n  color: inherit;\n}\n\n.mui-menu__item {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  color: inherit;\n  padding: 8px 16px;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n}\n.mui-menu__item:focus::before, .mui-menu__item:hover::before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.1);\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n.mui-menu__item:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-menu__item:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n\n.mui-menu__item--selected:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.3);\n  color: white;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.mui-menu__item-image {\n  width: 100px;\n  height: 30px;\n  border-radius: 3px;\n}\n\n.mui-menu__item-icon {\n  margin-right: 8px;\n}\n\n.mui-menu__item-label {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n.mui-menu__item-parent-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin-left: 16px;\n}\n.mui-menu__item-parent-icon:before {\n  content: \"\";\n}\n\n.mui-split-container {\n  overflow: hidden;\n}\n\n.mui-v-container {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n}\n\n.mui-h-container {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n\n.mui-split-container__main {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  order: 1;\n  position: relative;\n}\n\n.mui-split-container__sub {\n  position: relative;\n  order: 0;\n}\n\n.mui-split-container__sub--anim {\n  /* Safari */\n  transition: margin 200ms;\n}\n\n.mui-split-container__sub--west,\n.mui-split-container__sub--south {\n  order: 2;\n}\n\n.mui-resizable {\n  position: relative;\n}\n\n.mui-resizable__resizer {\n  position: absolute;\n  z-index: 1;\n}\n.mui-resizable__resizer:hover {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-resizable__north-resizer {\n  top: -2px;\n  left: 0px;\n  right: 0px;\n  height: 4px;\n  cursor: n-resize;\n}\n\n.mui-resizable__south-resizer {\n  bottom: -2px;\n  left: 0px;\n  right: 0px;\n  height: 4px;\n  cursor: n-resize;\n}\n\n.mui-resizable__west-resizer {\n  right: -2px;\n  top: 0px;\n  bottom: 0px;\n  width: 4px;\n  cursor: w-resize;\n}\n\n.mui-resizable__east-resizer {\n  left: -2px;\n  top: 0px;\n  bottom: 0px;\n  width: 4px;\n  cursor: w-resize;\n}\n\n/*!\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-dialog {\n  position: relative;\n}\n\n.mui-dialog--modal {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n\n.mui-dialog__background {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  background: rgba(211, 211, 211, 0.57);\n}\n\n.mui-dialog__content {\n  position: relative;\n  border-radius: 3px;\n  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-lazy-list {\n  overflow: auto;\n}\n\n.mui-lazy-list__content {\n  margin: 0px;\n  padding: 0px;\n}\n\n.mui-lazy-list__item {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  box-sizing: border-box;\n  padding: 0px 8px;\n  position: relative;\n}\n.mui-lazy-list__item:not(.mui-lazy-list__item--selected):hover, .mui-lazy-list__item:not(.mui-lazy-list__item--selected):focus {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-lazy-list__action-container {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n\n.mui-lazy-list__action {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  background: none;\n  border: none;\n  outline: none;\n  color: inherit;\n  padding: 0px 6px;\n  cursor: pointer;\n}\n.mui-lazy-list__action:hover, .mui-lazy-list__action:focus {\n  text-decoration: underline;\n  border-radius: 3px;\n  padding: 4px 6px;\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-lazy-list__action-label:last-child {\n  margin-left: 4px;\n}\n\n.mui-lazy-list__item--selected:before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 195, 0, 0.3);\n  color: white;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.mui-lazy-list__text-container {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  padding: 0px 8px;\n}\n\n.mui-lazy-list__item-desc {\n  line-height: 100%;\n  font-size: 9px;\n  opacity: 0.6;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mui-lazy-list__item-title {\n  line-height: 100%;\n}\n\n.mui-lazy-list__item-icon {\n  margin-left: 8px;\n}\n\n.mui-lazy-list__item-icon-thumbnail {\n  height: 90%;\n  width: 60px;\n  background-size: cover;\n  background-position: center;\n}\n\n.mui-lazy-list__setting-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: none;\n  border: none;\n  outline: none;\n  color: inherit;\n  padding: 8px;\n  cursor: pointer;\n}\n.mui-lazy-list__setting-icon:before {\n  content: \"\";\n}\n.mui-lazy-list__setting-icon:hover, .mui-lazy-list__setting-icon:focus {\n  text-decoration: underline;\n  border-radius: 3px;\n  padding: 8px;\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-lazy-tree__lazy-list {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n\n.mui-lazy-tree__item {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  box-sizing: border-box;\n}\n.mui-lazy-tree__item:hover, .mui-lazy-tree__item:focus {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-lazy-tree__item-expand-icon {\n  cursor: pointer;\n}\n.mui-lazy-tree__item-expand-icon:hover, .mui-lazy-tree__item-expand-icon:focus {\n  text-decoration: underline;\n}\n\n.mui-lazy-tree__item-expand-icon--spin {\n  -webkit-animation: mui-anim--spin 2s infinite linear;\n          animation: mui-anim--spin 2s infinite linear;\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-lazy-tree__item-expand-icon--spin:before {\n  content: \"\";\n}\n\n.mui-lazy-tree__item-expand-icon--error {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-lazy-tree__item-expand-icon--error:before {\n  content: \"\";\n}\n\n.mui-lazy-tree__item-expand-icon--expanded {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-lazy-tree__item-expand-icon--expanded:before {\n  content: \"\";\n}\n\n.mui-lazy-tree__item-expand-icon--collapsed {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-lazy-tree__item-expand-icon--collapsed:before {\n  content: \"\";\n}\n\n.mui-lazy-tree__item-parent-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-lazy-tree__item-parent-icon:before {\n  content: \"\";\n}\n\n.mui-lazy-tree__item-child-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-lazy-tree__item-child-icon:before {\n  content: \"\";\n}\n\n.mui-lazy-tree__item-display {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mui-lay-tree__item-display--clickable {\n  cursor: pointer;\n}\n.mui-lay-tree__item-display--clickable:hover, .mui-lay-tree__item-display--clickable:focus {\n  text-decoration: underline;\n}\n\n.mui-lazy-tree__setting-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: none;\n  border: none;\n  outline: none;\n  color: inherit;\n  padding: 8px 16px;\n  cursor: pointer;\n}\n.mui-lazy-tree__setting-icon:before {\n  content: \"\";\n}\n.mui-lazy-tree__setting-icon:hover, .mui-lazy-tree__setting-icon:focus {\n  text-decoration: underline;\n}\n\n.mui-lazy-tree__label {\n  line-height: initial;\n}\n\n.mui-lazy-tree__desc {\n  line-height: initial;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 0.75rem;\n  letter-spacing: 0.0333333333em;\n  -webkit-font-smoothing: antialiased;\n  line-height: 0.9rem;\n  font-weight: 400;\n  text-decoration: inherit;\n  text-transform: inherit;\n  opacity: 0.5;\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n.mui-datagrid__content {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.mui-lazy-grid-list {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n.mui-lazy-grid-list__table {\n  width: 100%;\n  table-layout: fixed;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.mui-lazy-grid-header {\n  width: 100%;\n  table-layout: fixed;\n  border-spacing: 0;\n  border-collapse: collapse;\n  background-color: #414141;\n  color: #c3c3c3;\n}\n\n.mui-lazy-grid-header--shadow {\n  box-shadow: 0px 1px 4px 1px #d3d3d3b5;\n}\n\n.mui-lazy-grid-list__cell-name {\n  white-space: nowrap;\n}\n\n.mui-lazy-grid-list__data-cell:not(:last-of-type) {\n  border-right: 1px solid lightgrey;\n  border-color: rgba(195, 195, 195, 0.2);\n}\n\n.mui-lazy-grid-header__data-cell:not(:last-of-type) {\n  border-right: 1px solid lightgrey;\n  border-color: rgba(195, 195, 195, 0.2);\n}\n\n.mui-lazy-grid-list__left-corner-cell,\n.mui-lazy-grid-header__right-corner-cell,\n.mui-lazy-grid-header__left-corner-cell {\n  padding: 0px;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.mui-lazy-grid-list__left-corner-cell,\n.mui-lazy-grid-header__left-corner-cell {\n  border-right: 1px solid lightgrey;\n  border-color: rgba(195, 195, 195, 0.2);\n}\n\n.mui-lazy-grid-list__data-cell {\n  padding: 0px 8px;\n}\n\n.mui-lazy-grid-header__data-cell {\n  padding: 8px;\n}\n\n.mui-lazy-grid-list__data-cell {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.mui-lazy-grid-list__row,\n.mui-lazy-grid-header__row {\n  border-bottom: 1px solid lightgrey;\n  cursor: default;\n  border-color: rgba(195, 195, 195, 0.2);\n}\n\n.mui-lazy-grid-list__row:hover:not(.mui-lazy-grid-list__row--selected), .mui-lazy-grid-list__row:focus:not(.mui-lazy-grid-list__row--selected) {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-lazy-grid-list__row--odd {\n  background-color: #444444;\n  color: #c3c3c3;\n}\n\n.mui-lay-grid-list__checkbox-icon,\n.mui-lazy-grid-header__checkbox-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 8px;\n  color: inherit;\n}\n.mui-lay-grid-list__checkbox-icon:before,\n.mui-lazy-grid-header__checkbox-icon:before {\n  content: \"\";\n}\n.mui-lay-grid-list__checkbox-icon:hover, .mui-lay-grid-list__checkbox-icon:focus,\n.mui-lazy-grid-header__checkbox-icon:hover,\n.mui-lazy-grid-header__checkbox-icon:focus {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-lazy-grid-header__checkbox-icon--checked,\n.mui-lay-grid-list__checkbox-icon--checked {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #00c300;\n}\n.mui-lazy-grid-header__checkbox-icon--checked:before,\n.mui-lay-grid-list__checkbox-icon--checked:before {\n  content: \"\";\n}\n\n.mui-lazy-grid-list__cell-icon {\n  margin-right: 8px;\n}\n\n.mui-lazy-grid-list__row--selected {\n  background-color: rgba(0, 195, 0, 0.3);\n}\n\n.mui-lazy-grid-header__container {\n  position: relative;\n}\n\n.mui-lazy-grid-header__sort-btn {\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 8px;\n  color: inherit;\n  position: absolute;\n  top: -4px;\n  right: 0px;\n}\n.mui-lazy-grid-header__sort-btn:hover, .mui-lazy-grid-header__sort-btn:focus {\n  background-color: rgba(0, 195, 0, 0.1);\n}\n\n.mui-lazy-grid-header__sort-btn--asc {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-lazy-grid-header__sort-btn--asc:before {\n  content: \"\";\n}\n\n.mui-lazy-grid-header__sort-btn--dsc {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-lazy-grid-header__sort-btn--dsc:before {\n  content: \"\";\n}\n\n.mui-panel {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n  border-color: inherit;\n  min-height: 100px;\n}\n\n.mui-panel__header {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  background-color: #414141;\n  color: #c3c3c3;\n  position: relative;\n  height: 56px;\n}\n\n.mui-panel__header-icon {\n  padding: 8px;\n  padding-right: 0px;\n}\n\n.mui-panel__left-header {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  margin-left: 8px;\n}\n\n.mui-panel__right-actions {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n}\n\n.mui-panel__title {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  padding: 8px;\n}\n\n.mui-panel__title-dropdown {\n  padding-left: 0px;\n}\n\n.mui-panel__header-close-btn {\n  font-size: 15px;\n  margin-right: 8px;\n}\n\n.mui-panel__title-text {\n  font-size: 13px;\n  font-weight: bold;\n  text-transform: uppercase;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.mui-panel__title-desc {\n  font-size: 9px;\n  opacity: 0.6;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mui-panel__body {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n.mui-panel__footer {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  position: relative;\n  padding: 15px;\n}\n\n.mui-panel__footer-btn {\n  margin: 0px 4px;\n}\n\n.mui-panel__close-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"ivaap\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mui-panel__close-icon:before {\n  content: \"\";\n}\n\n.mui-tab {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: column;\n}\n\n.mui-tab__header {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n}\n\n.mui-tab__items-container {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  padding: 0px 8px;\n}\n\n.mui-tab__left-header-container {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n}\n\n.mui-tab__right-header-container {\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n}\n\n.mui-tab__header-item {\n  position: relative;\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  text-transform: uppercase;\n  display: inline-block;\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  color: inherit;\n  display: --webkit-flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -ms-justify-content: center;\n  -ms-flex-pack: center;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  border-radius: 0px;\n  padding: 8px;\n  color: inherit;\n  padding: 16px 8px;\n}\n.mui-tab__header-item:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.mui-tab__header-item:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n\n.mui-tab__header-item--active {\n  color: #00c300;\n}\n.mui-tab__header-item--active:before {\n  content: \"\";\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  position: absolute;\n  border-bottom: 2px solid #00c300;\n}\n\n.mui-tab__items-container--stretch > .mui-tab__header-item {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n.mui-tab__body {\n  flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n}\n\n/*\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */\n/*!\n * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>\n * Company: INT, Inc. <br>\n *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.\n */", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ivaap.eot";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ivaap.ttf";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ivaap.woff";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ivaap.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/alt_holder.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.6.3, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false
    };

    var pad = function (number) { return ("0" + number).slice(-2); };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        }
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016
        Y: function (date) { return date.getFullYear(); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); }
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex]
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign({}, defaults, flatpickr.defaultConfig),
            l10n: english
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                }
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            self.showTimeInput =
                self.selectedDates.length > 0 || self.config.noCalendar;
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1)
                return;
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                setDefaultTime();
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date)
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        function setDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var minHr = self.config.minDate.getHours();
                var minMinutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, minHr);
                if (hours === minHr)
                    minutes = Math.max(minMinutes, minutes);
                if (hours === minHr && minutes === minMinutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var maxHr = self.config.maxDate.getHours();
                var maxMinutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr)
                    minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var year = parseInt(event.target.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options
            });
        }
        /**
         * A mousedown handler which mimics click.
         * Minimizes latency, since we don't need to wait for mouseup in most cases.
         * Also, avoids handling right clicks.
         *
         * @param {Function} handler the event handler
         */
        function onClick(handler) {
            return function (evt) {
                evt.which === 1 && handler(evt);
            };
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(e.target);
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", onClick(documentClick));
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "mousedown", onClick(self.open));
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "mousedown", onClick(selectDate));
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return e.target.select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "mousedown", onClick(timeIncrement));
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "mousedown", onClick(function (e) {
                        updateTime(e);
                        triggerChange();
                    }));
                }
            }
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */
        function jumpToDate(jumpDate, triggerChange) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            if (~e.target.className.indexOf("arrow"))
                incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && e.target;
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined)
                return self._input.focus();
            if (!dayFocused)
                return focusOnDayElem(startElem);
            getNextAvailableDay(startElem, offset);
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
            var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            var shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (var i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                var month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                bind(self.monthsDropdownContainer, "change", function (e) {
                    var target = e.target;
                    var selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                }
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                }
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = self.l10n.weekdays.shorthand.slice();
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers
            };
        }
        function changeMonth(value, isOffset) {
            if (isOffset === void 0) { isOffset = true; }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            if (toInitial === void 0) { toInitial = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            self.showTimeInput = false;
            if (self.config.enableTime === true) {
                setDefaultHours();
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
                self.input.value = "";
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var isInput = e.target === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, e.target === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return e.target.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(e.target) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer && e.target.$i !== undefined) ||
                            e.target === self.input ||
                            e.target === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (e.target === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter(function (x) { return x; });
                            var i = elems.indexOf(e.target);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(e.target) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && e.target === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(e.target)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function setDefaultTime() {
            self.setDate(self.config.minDate !== undefined
                ? new Date(self.config.minDate.getTime())
                : new Date(), true);
            setDefaultHours();
            updateValue();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    e.target && e.target.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.selectedDates.length === 0) {
                    setDefaultTime();
                }
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                }
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                }
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    self.input.className + " " + self.config.altInputClass;
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min")
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max")
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min")
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max")
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            triggerEvent("onParseConfig");
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign({}, flatpickr.l10ns["default"], (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset +
                inputBounds.left -
                (configPosHorizontal != null && configPosHorizontal === "center"
                    ? (calendarWidth - inputBounds.width) / 2
                    : 0);
            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = document.styleSheets[0];
                // some testing environments don't have css support
                if (doc === undefined)
                    return;
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("flatpickr-disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(e.target, isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (self.config.enableTime)
                setTimeout(function () { return (self.showTimeInput = true); }, 50);
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate]
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (var key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach(function (x) { return x(); });
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(false);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.showTimeInput = self.selectedDates.length > 0;
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate();
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined)
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
            Object.defineProperty(self, "showTimeInput", {
                get: function () { return self._showTimeInput; },
                set: function (bool) {
                    self._showTimeInput = bool;
                    if (self.calendarContainer)
                        toggleClass(self.calendarContainer, "showTimeInput", bool);
                    self.isOpen && positionCalendar();
                }
            });
        }
        function setupInputs() {
            self.input = self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.step = self.input.getAttribute("step") || "any";
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(e.target.value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            var isPrevMonth = self.prevMonthNav.contains(e.target);
            var isNextMonth = self.nextMonthNav.contains(e.target);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(e.target) >= 0) {
                e.target.select();
            }
            else if (e.target.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (e.target.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", input = e.target;
            if (self.amPM !== undefined && e.target === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // static list
        var nodes = Array.prototype.slice
            .call(nodeList)
            .filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: __assign({}, english),
        "default": __assign({}, english)
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

}));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Pickr"] = __webpack_require__(14);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*! Pickr 1.4.6 MIT | https://github.com/Simonwep/pickr */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=133)}([function(t,e,r){var n=r(3),o=r(17).f,i=r(8),a=r(15),c=r(39),u=r(65),s=r(69);t.exports=function(t,e){var r,l,f,p,v,h=t.target,d=t.global,g=t.stat;if(r=d?n:g?n[h]||c(h,{}):(n[h]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!s(d?l:h+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,t)}}},function(t,e,r){var n=r(3),o=r(20),i=r(40),a=r(70),c=n.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=a&&c[t]||(a?c:i)("Symbol."+t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r(97))},function(t,e,r){var n=r(5);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(2);t.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(7),o=r(12),i=r(18);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(16),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(26),o=r(11);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,r){var n=r(7),o=r(62),i=r(4),a=r(19),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(11);t.exports=function(t){return Object(n(t))}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(3),o=r(20),i=r(8),a=r(6),c=r(39),u=r(64),s=r(28),l=s.get,f=s.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,e,r,o){var u=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof e||a(r,"name")||i(r,"name",e),f(r).source=p.join("string"==typeof e?e:"")),t!==n?(u?!l&&t[e]&&(s=!0):delete t[e],s?t[e]=r:i(t,e,r)):s?t[e]=r:c(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||u.call(this)}))},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(7),o=r(38),i=r(18),a=r(10),c=r(19),u=r(6),s=r(62),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=c(e,!0),s)try{return l(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(5);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(27),o=r(98);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.6",mode:n?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){var n=r(73),o=r(26),i=r(13),a=r(9),c=r(46),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,l=4==t,f=6==t,p=5==t||f;return function(v,h,d,g){for(var y,b,m=i(v),x=o(m),w=n(h,d,3),S=a(x.length),_=0,A=g||c,O=e?A(v,S):r?A(v,0):void 0;S>_;_++)if((p||_ in x)&&(b=w(y=x[_],_,m),t))if(e)O[_]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return _;case 2:u.call(O,y)}else if(l)return!1;return f?-1:s||l?l:O}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,r){"use strict";var n=r(19),o=r(12),i=r(18);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},function(t,e,r){var n=r(2),o=r(1),i=r(75),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e){t.exports={}},function(t,e,r){var n=r(15),o=r(110),i=Object.prototype;o!==i.toString&&n(i,"toString",o,{unsafe:!0})},function(t,e,r){var n=r(2),o=r(14),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){t.exports=!1},function(t,e,r){var n,o,i,a=r(99),c=r(3),u=r(5),s=r(8),l=r(6),f=r(29),p=r(30),v=c.WeakMap;if(a){var h=new v,d=h.get,g=h.has,y=h.set;n=function(t,e){return y.call(h,t,e),e},o=function(t){return d.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var b=f("state");p[b]=!0,n=function(t,e){return s(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(20),o=r(40),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e,r){var n=r(68),o=r(43).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){var n=r(14);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(4),o=r(101),i=r(43),a=r(30),c=r(102),u=r(63),s=r(29)("IE_PROTO"),l=function(){},f=function(){var t,e=u("iframe"),r=i.length;for(e.style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,e){var r;return null!==t?(l.prototype=n(t),r=new l,l.prototype=null,r[s]=t):r=f(),void 0===e?r:o(r,e)},a[s]=!0},function(t,e,r){var n=r(68),o=r(43);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){"use strict";var n=r(10),o=r(78),i=r(24),a=r(28),c=r(79),u=a.set,s=a.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,e){u(this,{type:"Array Iterator",target:n(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,r){"use strict";var n=r(7),o=r(3),i=r(69),a=r(15),c=r(6),u=r(14),s=r(108),l=r(19),f=r(2),p=r(33),v=r(31).f,h=r(17).f,d=r(12).f,g=r(83).trim,y=o.Number,b=y.prototype,m="Number"==u(p(b)),x=function(t){var e,r,n,o,i,a,c,u,s=l(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=g(s)).charCodeAt(0))||45===e){if(88===(r=s.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(a=(i=s.slice(2)).length,c=0;c<a;c++)if((u=i.charCodeAt(c))<48||u>o)return NaN;return parseInt(i,n)}return+s};if(i("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(m?f((function(){b.valueOf.call(r)})):"Number"!=u(r))?s(new y(x(e)),r,S):x(e)},_=n?v(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;_.length>A;A++)c(y,w=_[A])&&!c(S,w)&&d(S,w,h(y,w));S.prototype=b,b.constructor=S,a(o,"Number",S)}},function(t,e,r){"use strict";var n=r(0),o=r(3),i=r(27),a=r(7),c=r(70),u=r(2),s=r(6),l=r(32),f=r(5),p=r(4),v=r(13),h=r(10),d=r(19),g=r(18),y=r(33),b=r(34),m=r(31),x=r(103),w=r(44),S=r(17),_=r(12),A=r(38),O=r(8),j=r(15),k=r(20),E=r(29),C=r(30),P=r(40),L=r(1),I=r(71),R=r(72),T=r(45),N=r(28),M=r(21).forEach,F=E("hidden"),D=L("toPrimitive"),B=N.set,H=N.getterFor("Symbol"),V=Object.prototype,G=o.Symbol,$=o.JSON,W=$&&$.stringify,z=S.f,U=_.f,Y=x.f,X=A.f,q=k("symbols"),K=k("op-symbols"),J=k("string-to-symbol-registry"),Q=k("symbol-to-string-registry"),Z=k("wks"),tt=o.QObject,et=!tt||!tt.prototype||!tt.prototype.findChild,rt=a&&u((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(V,e);n&&delete V[e],U(t,e,r),n&&t!==V&&U(V,e,n)}:U,nt=function(t,e){var r=q[t]=y(G.prototype);return B(r,{type:"Symbol",tag:t,description:e}),a||(r.description=e),r},ot=c&&"symbol"==typeof G.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},it=function(t,e,r){t===V&&it(K,e,r),p(t);var n=d(e,!0);return p(r),s(q,n)?(r.enumerable?(s(t,F)&&t[F][n]&&(t[F][n]=!1),r=y(r,{enumerable:g(0,!1)})):(s(t,F)||U(t,F,g(1,{})),t[F][n]=!0),rt(t,n,r)):U(t,n,r)},at=function(t,e){p(t);var r=h(e),n=b(r).concat(lt(r));return M(n,(function(e){a&&!ct.call(r,e)||it(t,e,r[e])})),t},ct=function(t){var e=d(t,!0),r=X.call(this,e);return!(this===V&&s(q,e)&&!s(K,e))&&(!(r||!s(this,e)||!s(q,e)||s(this,F)&&this[F][e])||r)},ut=function(t,e){var r=h(t),n=d(e,!0);if(r!==V||!s(q,n)||s(K,n)){var o=z(r,n);return!o||!s(q,n)||s(r,F)&&r[F][n]||(o.enumerable=!0),o}},st=function(t){var e=Y(h(t)),r=[];return M(e,(function(t){s(q,t)||s(C,t)||r.push(t)})),r},lt=function(t){var e=t===V,r=Y(e?K:h(t)),n=[];return M(r,(function(t){!s(q,t)||e&&!s(V,t)||n.push(q[t])})),n};c||(j((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),r=function(t){this===V&&r.call(K,t),s(this,F)&&s(this[F],e)&&(this[F][e]=!1),rt(this,e,g(1,t))};return a&&et&&rt(V,e,{configurable:!0,set:r}),nt(e,t)}).prototype,"toString",(function(){return H(this).tag})),A.f=ct,_.f=it,S.f=ut,m.f=x.f=st,w.f=lt,a&&(U(G.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),i||j(V,"propertyIsEnumerable",ct,{unsafe:!0})),I.f=function(t){return nt(L(t),t)}),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),M(b(Z),(function(t){R(t)})),n({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(s(J,e))return J[e];var r=G(e);return J[e]=r,Q[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(s(Q,t))return Q[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?y(t):at(y(t),e)},defineProperty:it,defineProperties:at,getOwnPropertyDescriptor:ut}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),n({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),$&&n({target:"JSON",stat:!0,forced:!c||u((function(){var t=G();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t){for(var e,r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e=n[1],(f(e)||void 0!==t)&&!ot(t))return l(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),n[1]=e,W.apply($,n)}}),G.prototype[D]||O(G.prototype,D,G.prototype.valueOf),T(G,"Symbol"),C[F]=!0},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e,r){var n=r(3),o=r(8);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(67),o=r(3),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e,r){var n=r(16),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(12).f,o=r(6),i=r(1)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n=r(5),o=r(32),i=r(1)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},function(t,e,r){"use strict";var n=r(0),o=r(7),i=r(3),a=r(6),c=r(5),u=r(12).f,s=r(65),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};s(p,l);var v=p.prototype=l.prototype;v.constructor=p;var h=v.toString,d="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(a(f,t))return"";var r=d?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},function(t,e,r){r(72)("iterator")},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(32),a=r(5),c=r(13),u=r(9),s=r(22),l=r(46),f=r(23),p=r(1),v=r(75),h=p("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=f("concat"),y=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)};n({target:"Array",proto:!0,forced:!d||!g},{concat:function(t){var e,r,n,o,i,a=c(this),f=l(a,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?a:arguments[e],y(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&s(f,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},function(t,e,r){var n=r(0),o=r(109);n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,e,r){var n=r(0),o=r(13),i=r(34);n({target:"Object",stat:!0,forced:r(2)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,e,r){"use strict";var n=r(15),o=r(4),i=r(2),a=r(86),c=RegExp.prototype,u=c.toString,s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(s||l)&&n(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in c)?a.call(t):r)}),{unsafe:!0})},function(t,e,r){"use strict";var n=r(87).charAt,o=r(28),i=r(79),a=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,r){"use strict";var n=r(8),o=r(15),i=r(2),a=r(1),c=r(55),u=a("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var p=a(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=v&&!i((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[u]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!v||!h||"replace"===t&&!s||"split"===t&&!l){var d=/./[p],g=r(p,""[t],(function(t,e,r,n,o){return e.exec===c?v&&!o?{done:!0,value:d.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),y=g[0],b=g[1];o(String.prototype,t,y),o(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)}),f&&n(RegExp.prototype[p],"sham",!0)}}},function(t,e,r){"use strict";var n,o,i=r(86),a=RegExp.prototype.exec,c=String.prototype.replace,u=a,s=(n=/a/,o=/b*/g,a.call(n,"a"),a.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(s||l)&&(u=function(t){var e,r,n,o,u=this;return l&&(r=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),s&&(e=u.lastIndex),n=a.call(u,t),s&&n&&(u.lastIndex=u.global?n.index+n[0].length:e),l&&n&&n.length>1&&c.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=u},function(t,e,r){"use strict";var n=r(87).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},function(t,e,r){var n=r(14),o=r(55);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var i=r.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,r){"use strict";var n=r(16),o=r(11);t.exports="".repeat||function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},function(t,e,r){var n=r(3),o=r(91),i=r(114),a=r(8);for(var c in o){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,r){var n=r(3),o=r(91),i=r(35),a=r(8),c=r(1),u=c("iterator"),s=c("toStringTag"),l=i.values;for(var f in o){var p=n[f],v=p&&p.prototype;if(v){if(v[u]!==l)try{a(v,u,l)}catch(t){v[u]=l}if(v[s]||a(v,s,f),o[f])for(var h in i)if(v[h]!==i[h])try{a(v,h,i[h])}catch(t){v[h]=i[h]}}}},function(t,e,r){"use strict";var n=r(54),o=r(90),i=r(4),a=r(11),c=r(126),u=r(56),s=r(9),l=r(57),f=r(55),p=r(2),v=[].push,h=Math.min,d=!p((function(){return!RegExp(4294967295,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(a(this)),i=void 0===r?4294967295:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!o(t))return e.call(n,t,i);for(var c,u,s,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=new RegExp(t.source,p+"g");(c=f.call(d,n))&&!((u=d.lastIndex)>h&&(l.push(n.slice(h,c.index)),c.length>1&&c.index<n.length&&v.apply(l,c.slice(1)),s=c[0].length,h=u,l.length>=i));)d.lastIndex===c.index&&d.lastIndex++;return h===n.length?!s&&d.test("")||l.push(""):l.push(n.slice(h)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var a=r(n,t,this,o,n!==e);if(a.done)return a.value;var f=i(t),p=String(this),v=c(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(d?"y":"g"),b=new v(d?f:"^(?:"+f.source+")",y),m=void 0===o?4294967295:o>>>0;if(0===m)return[];if(0===p.length)return null===l(b,p)?[p]:[];for(var x=0,w=0,S=[];w<p.length;){b.lastIndex=d?w:0;var _,A=l(b,d?p:p.slice(w));if(null===A||(_=h(s(b.lastIndex+(d?0:w)),p.length))===x)w=u(p,w,g);else{if(S.push(p.slice(x,w)),S.length===m)return S;for(var O=1;O<=A.length-1;O++)if(S.push(A[O]),S.length===m)return S;w=x=_}}return S.push(p.slice(x)),S}]}),!d)},function(t,e,r){var n=r(7),o=r(2),i=r(63);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(3),o=r(5),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,r){var n=r(20);t.exports=n("native-function-to-string",Function.toString)},function(t,e,r){var n=r(6),o=r(66),i=r(17),a=r(12);t.exports=function(t,e){for(var r=o(e),c=a.f,u=i.f,s=0;s<r.length;s++){var l=r[s];n(t,l)||c(t,l,u(e,l))}}},function(t,e,r){var n=r(41),o=r(31),i=r(44),a=r(4);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},function(t,e,r){t.exports=r(3)},function(t,e,r){var n=r(6),o=r(10),i=r(100).indexOf,a=r(30);t.exports=function(t,e){var r,c=o(t),u=0,s=[];for(r in c)!n(a,r)&&n(c,r)&&s.push(r);for(;e.length>u;)n(c,r=e[u++])&&(~i(s,r)||s.push(r));return s}},function(t,e,r){var n=r(2),o=/#|\.prototype\./,i=function(t,e){var r=c[a(t)];return r==s||r!=u&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,r){var n=r(2);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,e,r){e.f=r(1)},function(t,e,r){var n=r(67),o=r(6),i=r(71),a=r(12).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},function(t,e,r){var n=r(74);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,r){var n,o,i=r(3),a=r(76),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(n=s.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,e,r){var n=r(41);t.exports=n("navigator","userAgent")||""},function(t,e,r){"use strict";var n=r(0),o=r(21).find,i=r(78),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),n({target:"Array",proto:!0,forced:a},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,e,r){var n=r(1),o=r(33),i=r(8),a=n("unscopables"),c=Array.prototype;null==c[a]&&i(c,a,o(null)),t.exports=function(t){c[a][t]=!0}},function(t,e,r){"use strict";var n=r(0),o=r(104),i=r(81),a=r(82),c=r(45),u=r(8),s=r(15),l=r(1),f=r(27),p=r(24),v=r(80),h=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,g=l("iterator"),y=function(){return this};t.exports=function(t,e,r,l,v,b,m){o(r,e,l);var x,w,S,_=function(t){if(t===v&&E)return E;if(!d&&t in j)return j[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},A=e+" Iterator",O=!1,j=t.prototype,k=j[g]||j["@@iterator"]||v&&j[v],E=!d&&k||_(v),C="Array"==e&&j.entries||k;if(C&&(x=i(C.call(new t)),h!==Object.prototype&&x.next&&(f||i(x)===h||(a?a(x,h):"function"!=typeof x[g]&&u(x,g,y)),c(x,A,!0,!0),f&&(p[A]=y))),"values"==v&&k&&"values"!==k.name&&(O=!0,E=function(){return k.call(this)}),f&&!m||j[g]===E||u(j,g,E),p[e]=E,v)if(w={values:_("values"),keys:b?E:_("keys"),entries:_("entries")},m)for(S in w)!d&&!O&&S in j||s(j,S,w[S]);else n({target:e,proto:!0,forced:d||O},w);return w}},function(t,e,r){"use strict";var n,o,i,a=r(81),c=r(8),u=r(6),s=r(1),l=r(27),f=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(n=o):p=!0),null==n&&(n={}),l||u(n,f)||c(n,f,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},function(t,e,r){var n=r(6),o=r(13),i=r(29),a=r(105),c=i("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,r){var n=r(4),o=r(106);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,e,r){var n=r(11),o="["+r(84)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,r){var n=r(14),o=r(1)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:i?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,r){"use strict";var n=r(4);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,r){var n=r(16),o=r(11),i=function(t){return function(e,r){var i,a,c=String(o(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,r){"use strict";var n=r(54),o=r(4),i=r(9),a=r(11),c=r(56),u=r(57);n("match",1,(function(t,e,r){return[function(e){var r=a(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var a=o(t),s=String(this);if(!a.global)return u(a,s);var l=a.unicode;a.lastIndex=0;for(var f,p=[],v=0;null!==(f=u(a,s));){var h=String(f[0]);p[v]=h,""===h&&(a.lastIndex=c(s,i(a.lastIndex),l)),v++}return 0===v?null:p}]}))},function(t,e,r){"use strict";var n=r(0),o=r(9),i=r(112),a=r(11),c=r(113),u="".startsWith,s=Math.min;n({target:"String",proto:!0,forced:!c("startsWith")},{startsWith:function(t){var e=String(a(this));i(t);var r=o(s(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return u?u.call(e,n,r):e.slice(r,r+n.length)===n}})},function(t,e,r){var n=r(5),o=r(14),i=r(1)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){"use strict";var n=r(2);t.exports=function(t,e){var r=[][t];return!r||!n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e,r){"use strict";var n=r(0),o=r(26),i=r(10),a=r(92),c=[].join,u=o!=Object,s=a("join",",");n({target:"Array",proto:!0,forced:u||s},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},function(t,e,r){"use strict";var n=r(0),o=r(21).map;n({target:"Array",proto:!0,forced:!r(23)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){"use strict";var n=r(0),o=r(129).start;n({target:"String",proto:!0,forced:r(130)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t){t.exports=JSON.parse('{"a":"1.4.6"}')},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(3),o=r(39),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,r){var n=r(3),o=r(64),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,r){var n=r(10),o=r(9),i=r(42),a=function(t){return function(e,r,a){var c,u=n(e),s=o(u.length),l=i(a,s);if(t&&r!=r){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,r){var n=r(7),o=r(12),i=r(4),a=r(34);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),c=n.length,u=0;c>u;)o.f(t,r=n[u++],e[r]);return t}},function(t,e,r){var n=r(41);t.exports=n("document","documentElement")},function(t,e,r){var n=r(10),o=r(31).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(n(t))}},function(t,e,r){"use strict";var n=r(80).IteratorPrototype,o=r(33),i=r(18),a=r(45),c=r(24),u=function(){return this};t.exports=function(t,e,r){var s=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),a(t,s,!1,!0),c[s]=u,t}},function(t,e,r){var n=r(2);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,r){var n=r(5);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,r){"use strict";var n=r(0),o=r(42),i=r(16),a=r(9),c=r(13),u=r(46),s=r(22),l=r(23),f=Math.max,p=Math.min;n({target:"Array",proto:!0,forced:!l("splice")},{splice:function(t,e){var r,n,l,v,h,d,g=c(this),y=a(g.length),b=o(t,y),m=arguments.length;if(0===m?r=n=0:1===m?(r=0,n=y-b):(r=m-2,n=p(f(i(e),0),y-b)),y+r-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(l=u(g,n),v=0;v<n;v++)(h=b+v)in g&&s(l,v,g[h]);if(l.length=n,r<n){for(v=b;v<y-n;v++)d=v+r,(h=v+n)in g?g[d]=g[h]:delete g[d];for(v=y;v>y-n+r;v--)delete g[v-1]}else if(r>n)for(v=y-n;v>b;v--)d=v+r-1,(h=v+n-1)in g?g[d]=g[h]:delete g[d];for(v=0;v<r;v++)g[v+b]=arguments[v+2];return g.length=y-n+r,l}})},function(t,e,r){var n=r(5),o=r(82);t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},function(t,e,r){"use strict";var n=r(7),o=r(2),i=r(34),a=r(44),c=r(38),u=r(13),s=r(26),l=Object.assign;t.exports=!l||o((function(){var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=l({},t)[r]||"abcdefghijklmnopqrst"!=i(l({},e)).join("")}))?function(t,e){for(var r=u(t),o=arguments.length,l=1,f=a.f,p=c.f;o>l;)for(var v,h=s(arguments[l++]),d=f?i(h).concat(f(h)):i(h),g=d.length,y=0;g>y;)v=d[y++],n&&!p.call(h,v)||(r[v]=h[v]);return r}:l},function(t,e,r){"use strict";var n=r(85),o={};o[r(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+n(this)+"]"}:o.toString},function(t,e,r){r(0)({target:"String",proto:!0},{repeat:r(58)})},function(t,e,r){var n=r(90);t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,r){var n=r(1)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},function(t,e,r){"use strict";var n=r(21).forEach,o=r(92);t.exports=o("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,r){"use strict";var n=r(0),o=r(21).filter;n({target:"Array",proto:!0,forced:!r(23)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){var n=r(0),o=r(117);n({target:"Array",stat:!0,forced:!r(121)((function(t){Array.from(t)}))},{from:o})},function(t,e,r){"use strict";var n=r(73),o=r(13),i=r(118),a=r(119),c=r(9),u=r(22),s=r(120);t.exports=function(t){var e,r,l,f,p,v=o(t),h="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,y=void 0!==g,b=0,m=s(v);if(y&&(g=n(g,d>2?arguments[2]:void 0,2)),null==m||h==Array&&a(m))for(r=new h(e=c(v.length));e>b;b++)u(r,b,y?g(v[b],b):v[b]);else for(p=(f=m.call(v)).next,r=new h;!(l=p.call(f)).done;b++)u(r,b,y?i(f,g,[l.value,b],!0):l.value);return r.length=b,r}},function(t,e,r){var n=r(4);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){var n=r(1),o=r(24),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},function(t,e,r){var n=r(85),o=r(24),i=r(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){var n=r(1)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(0),o=r(5),i=r(32),a=r(42),c=r(9),u=r(10),s=r(22),l=r(23),f=r(1)("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!l("slice")},{slice:function(t,e){var r,n,l,h=u(this),d=c(h.length),g=a(t,d),y=a(void 0===e?d:e,d);if(i(h)&&("function"!=typeof(r=h.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[f])&&(r=void 0):r=void 0,r===Array||void 0===r))return p.call(h,g,y);for(n=new(void 0===r?Array:r)(v(y-g,0)),l=0;g<y;g++,l++)g in h&&s(n,l,h[g]);return n.length=l,n}})},function(t,e,r){var n=r(0),o=r(2),i=r(10),a=r(17).f,c=r(7),u=o((function(){a(1)}));n({target:"Object",stat:!0,forced:!c||u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},function(t,e,r){var n=r(0),o=r(7),i=r(66),a=r(10),c=r(17),u=r(22);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,r,n=a(t),o=c.f,s=i(n),l={},f=0;s.length>f;)void 0!==(r=o(n,e=s[f++]))&&u(l,e,r);return l}})},function(t,e,r){"use strict";var n=r(54),o=r(4),i=r(13),a=r(9),c=r(16),u=r(11),s=r(56),l=r(57),f=Math.max,p=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g;n("replace",2,(function(t,e,r){return[function(r,n){var o=u(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,i){var u=r(e,t,this,i);if(u.done)return u.value;var v=o(t),h=String(this),d="function"==typeof i;d||(i=String(i));var g=v.global;if(g){var y=v.unicode;v.lastIndex=0}for(var b=[];;){var m=l(v,h);if(null===m)break;if(b.push(m),!g)break;""===String(m[0])&&(v.lastIndex=s(h,a(v.lastIndex),y))}for(var x,w="",S=0,_=0;_<b.length;_++){m=b[_];for(var A=String(m[0]),O=f(p(c(m.index),h.length),0),j=[],k=1;k<m.length;k++)j.push(void 0===(x=m[k])?x:String(x));var E=m.groups;if(d){var C=[A].concat(j,O,h);void 0!==E&&C.push(E);var P=String(i.apply(void 0,C))}else P=n(A,h,O,j,E,i);O>=S&&(w+=h.slice(S,O)+P,S=O+A.length)}return w+h.slice(S)}];function n(t,r,n,o,a,c){var u=n+t.length,s=o.length,l=d;return void 0!==a&&(a=i(a),l=h),e.call(c,l,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>s){var f=v(l/10);return 0===f?e:f<=s?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):e}c=o[l-1]}return void 0===c?"":c}))}}))},function(t,e,r){var n=r(4),o=r(74),i=r(1)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},function(t,e,r){"use strict";var n=r(0),o=r(83).trim;n({target:"String",proto:!0,forced:r(128)("trim")},{trim:function(){return o(this)}})},function(t,e,r){var n=r(2),o=r(84);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,e,r){var n=r(9),o=r(58),i=r(11),a=Math.ceil,c=function(t){return function(e,r,c){var u,s,l=String(i(e)),f=l.length,p=void 0===c?" ":String(c),v=n(r);return v<=f||""==p?l:(u=v-f,(s=o.call(p,a(u/p.length))).length>u&&(s=s.slice(0,u)),t?l+s:s+l)}};t.exports={start:c(!1),end:c(!0)}},function(t,e,r){var n=r(76);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},function(t,e,r){"use strict";var n=r(0),o=r(16),i=r(132),a=r(58),c=r(2),u=1..toFixed,s=Math.floor,l=function(t,e,r){return 0===e?r:e%2==1?l(t,e-1,r*t):l(t*t,e/2,r)};n({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}))},{toFixed:function(t){var e,r,n,c,u=i(this),f=o(t),p=[0,0,0,0,0,0],v="",h="0",d=function(t,e){for(var r=-1,n=e;++r<6;)n+=t*p[r],p[r]=n%1e7,n=s(n/1e7)},g=function(t){for(var e=6,r=0;--e>=0;)r+=p[e],p[e]=s(r/t),r=r%t*1e7},y=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==p[t]){var r=String(p[t]);e=""===e?r:e+a.call("0",7-r.length)+r}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(u*l(2,69,1))-69)<0?u*l(2,-e,1):u/l(2,e,1),r*=4503599627370496,(e=52-e)>0){for(d(0,r),n=f;n>=7;)d(1e7,0),n-=7;for(d(l(10,n,1),0),n=e-1;n>=23;)g(1<<23),n-=23;g(1<<n),d(1,1),g(2),h=y()}else d(0,r),d(1<<-e,0),h=y()+a.call("0",f);return h=f>0?v+((c=h.length)<=f?"0."+a.call("0",f-c)+h:h.slice(0,c-f)+"."+h.slice(c-f)):v+h}})},function(t,e,r){var n=r(14);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"on",(function(){return c})),r.d(n,"off",(function(){return u})),r.d(n,"createElementFromString",(function(){return l})),r.d(n,"removeAttribute",(function(){return f})),r.d(n,"createFromTemplate",(function(){return p})),r.d(n,"eventPath",(function(){return v})),r.d(n,"resolveElement",(function(){return h})),r.d(n,"adjustableInputNumbers",(function(){return d}));r(37),r(47),r(48),r(49),r(77),r(35),r(107),r(36),r(50),r(51),r(25),r(52),r(53),r(88),r(111),r(89),r(59),r(60),r(115),r(116),r(122),r(123),r(124),r(125),r(61),r(127);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=s.bind(null,"addEventListener"),u=s.bind(null,"removeEventListener");function s(t,e,r,n,o){void 0===o&&(o={}),e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(r)||(r=[r]);var a=e,c=Array.isArray(a),u=0;for(a=c?a:a[Symbol.iterator]();;){var s;if(c){if(u>=a.length)break;s=a[u++]}else{if((u=a.next()).done)break;s=u.value}var l=s,f=r,p=Array.isArray(f),v=0;for(f=p?f:f[Symbol.iterator]();;){var h;if(p){if(v>=f.length)break;h=f[v++]}else{if((v=f.next()).done)break;h=v.value}var d=h;l[t](d,n,i({capture:!1},o))}}return Array.prototype.slice.call(arguments,1)}function l(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function f(t,e){var r=t.getAttribute(e);return t.removeAttribute(e),r}function p(t){return function t(e,r){void 0===r&&(r={});var n=f(e,":obj"),o=f(e,":ref"),i=n?r[n]={}:r;o&&(r[o]=e);for(var a=0,c=Array.from(e.children);a<c.length;a++){var u=c[a],s=f(u,":arr"),l=t(u,s?{}:i);s&&(i[s]||(i[s]=[])).push(Object.keys(l).length?l:u)}return r}(l(t))}function v(t){var e=t.path||t.composedPath&&t.composedPath();if(e)return e;var r=t.target.parentElement;for(e=[t.target,r];r=r.parentElement;)e.push(r);return e.push(document,window),e}function h(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce((function(t,e,r,n){return t=t.querySelector(e),r<n.length-1?t.shadowRoot:t}),document):null}function d(t,e){function r(r){var n=[.001,.01,.1][Number(r.shiftKey||2*r.ctrlKey)]*(r.deltaY<0?1:-1),o=0,i=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,(function(t,r){return r<=i&&r+t.length>=i?(i=r,e(Number(t),n,o)):(o++,t)})),t.focus(),t.setSelectionRange(i,i),r.preventDefault(),t.dispatchEvent(new Event("input"))}void 0===e&&(e=function(t){return t}),c(t,"focus",(function(){return c(window,"wheel",r,{passive:!1})})),c(t,"blur",(function(){return u(window,"wheel",r)}))}var g=r(96),y=(r(93),r(94),r(95),Math.min),b=Math.max,m=Math.floor,x=Math.round;function w(t,e,r){e/=100,r/=100;var n=m(t=t/360*6),o=t-n,i=r*(1-e),a=r*(1-o*e),c=r*(1-(1-o)*e),u=n%6;return[255*[r,a,i,i,c,r][u],255*[c,r,r,a,i,i][u],255*[i,i,c,r,r,a][u]]}function S(t,e,r){var n,o,i=y(t/=255,e/=255,r/=255),a=b(t,e,r),c=a-i;if(0===c)n=o=0;else{o=c/a;var u=((a-t)/6+c/2)/c,s=((a-e)/6+c/2)/c,l=((a-r)/6+c/2)/c;t===a?n=l-s:e===a?n=1/3+u-l:r===a&&(n=2/3+s-u),n<0?n+=1:n>1&&(n-=1)}return[360*n,100*o,100*a]}function _(t,e,r,n){e/=100,r/=100;var o=255*(1-y(1,(t/=100)*(1-(n/=100))+n)),i=255*(1-y(1,e*(1-n)+n)),a=255*(1-y(1,r*(1-n)+n));return[].concat(S(o,i,a))}function A(t,e,r){return e/=100,[t,2*(e*=(r/=100)<.5?r:1-r)/(r+e)*100,100*(r+e)]}function O(t){return S.apply(void 0,t.match(/.{2}/g).map((function(t){return parseInt(t,16)})))}function j(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000";var e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;var e,r={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},n=function(t){return t.map((function(t){return/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0}))};t:for(var o in r)if(e=r[o].exec(t)){var i=function(t){return!!e[2]==("number"==typeof t)};switch(o){case"cmyk":var a=n(e),c=a[1],u=a[2],s=a[3],l=a[4];if(c>100||u>100||s>100||l>100)break t;return{values:_(c,u,s,l),type:o};case"rgba":var f=n(e),p=f[3],v=f[4],h=f[5],d=f[6];if(p>255||v>255||h>255||d<0||d>1||!i(d))break t;return{values:[].concat(S(p,v,h),[d]),a:d,type:o};case"hexa":var g=e[1];4!==g.length&&3!==g.length||(g=g.split("").map((function(t){return t+t})).join(""));var y=g.substring(0,6),b=g.substring(6);return b=b?parseInt(b,16)/255:void 0,{values:[].concat(O(y),[b]),a:b,type:o};case"hsla":var m=n(e),x=m[3],w=m[4],j=m[5],k=m[6];if(x>360||w>100||j>100||k<0||k>1||!i(k))break t;return{values:[].concat(A(x,w,j),[k]),a:k,type:o};case"hsva":var E=n(e),C=E[3],P=E[4],L=E[5],I=E[6];if(C>360||P>100||L>100||I<0||I>1||!i(I))break t;return{values:[C,P,L,I],a:I,type:o}}}return{values:null,type:null}}r(131);function k(t,e,r,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),void 0===n&&(n=1);var o=function(t,e){return function(r){return void 0===r&&(r=-1),e(~r?t.map((function(t){return Number(t.toFixed(r))})):t)}},i={h:t,s:e,v:r,a:n,toHSVA:function(){var t=[i.h,i.s,i.v,i.a];return t.toString=o(t,(function(t){return"hsva("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+i.a+")"})),t},toHSLA:function(){var t=[].concat(function(t,e,r){var n=(2-(e/=100))*(r/=100)/2;return 0!==n&&(e=1===n?0:n<.5?e*r/(2*n):e*r/(2-2*n)),[t,100*e,100*n]}(i.h,i.s,i.v),[i.a]);return t.toString=o(t,(function(t){return"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+i.a+")"})),t},toRGBA:function(){var t=[].concat(w(i.h,i.s,i.v),[i.a]);return t.toString=o(t,(function(t){return"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+i.a+")"})),t},toCMYK:function(){var t=function(t,e,r){var n,o=w(t,e,r),i=o[0]/255,a=o[1]/255,c=o[2]/255;return[100*(1===(n=y(1-i,1-a,1-c))?0:(1-i-n)/(1-n)),100*(1===n?0:(1-a-n)/(1-n)),100*(1===n?0:(1-c-n)/(1-n)),100*n]}(i.h,i.s,i.v);return t.toString=o(t,(function(t){return"cmyk("+t[0]+"%, "+t[1]+"%, "+t[2]+"%, "+t[3]+"%)"})),t},toHEXA:function(){var t=function(t,e,r){return w(t,e,r).map((function(t){return x(t).toString(16).padStart(2,"0")}))}(i.h,i.s,i.v),e=i.a>=1?"":Number((255*i.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=function(){return"#"+t.join("").toUpperCase()},t},clone:function(){return k(i.h,i.s,i.v,i.a)}};return i}var E=function(t){return Math.max(Math.min(t,1),0)};function C(t){var e={options:Object.assign({lock:null,onchange:function(){return 0},onstop:function(){return 0}},t),_keyboard:function(t){var n=t.type,o=t.key;if(document.activeElement===r.wrapper){var i=e.options.lock,a="ArrowUp"===o,c="ArrowRight"===o,u="ArrowDown"===o,s="ArrowLeft"===o;if("keydown"===n&&(a||c||u||s)){var l=0,f=0;"v"===i?l=a||c?1:-1:"h"===i?l=a||c?-1:1:(f=a?-1:u?1:0,l=s?-1:c?1:0),e.update(E(e.cache.x+.01*l),E(e.cache.y+.01*f)),t.preventDefault()}else o.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart:function(t){c(document,["mouseup","touchend","touchcancel"],e._tapstop),c(document,["mousemove","touchmove"],e._tapmove),t.preventDefault(),e._tapmove(t)},_tapmove:function(t){var n=e.options.lock,o=e.cache,i=r.element,a=r.wrapper,c=a.getBoundingClientRect(),u=0,s=0;if(t){var l=t&&t.touches&&t.touches[0];u=t?(l||t).clientX:0,s=t?(l||t).clientY:0,u<c.left?u=c.left:u>c.left+c.width&&(u=c.left+c.width),s<c.top?s=c.top:s>c.top+c.height&&(s=c.top+c.height),u-=c.left,s-=c.top}else o&&(u=o.x*c.width,s=o.y*c.height);"h"!==n&&(i.style.left="calc("+u/c.width*100+"% - "+i.offsetWidth/2+"px)"),"v"!==n&&(i.style.top="calc("+s/c.height*100+"% - "+i.offsetHeight/2+"px)"),e.cache={x:u/c.width,y:s/c.height};var f=E(u/a.offsetWidth),p=E(s/a.offsetHeight);switch(n){case"v":return r.onchange(f);case"h":return r.onchange(p);default:return r.onchange(f,p)}},_tapstop:function(){e.options.onstop(),u(document,["mouseup","touchend","touchcancel"],e._tapstop),u(document,["mousemove","touchmove"],e._tapmove)},trigger:function(){e._tapmove()},update:function(t,r){void 0===t&&(t=0),void 0===r&&(r=0);var n=e.options.wrapper.getBoundingClientRect(),o=n.left,i=n.top,a=n.width,c=n.height;"h"===e.options.lock&&(r=t),e._tapmove({clientX:o+a*t,clientY:i+c*r})},destroy:function(){var t=e.options,r=e._tapstart;u([t.wrapper,t.element],"mousedown",r),u([t.wrapper,t.element],"touchstart",r,{passive:!1})}},r=e.options,n=e._tapstart,o=e._keyboard;return c([r.wrapper,r.element],"mousedown",n),c([r.wrapper,r.element],"touchstart",n,{passive:!1}),c(document,["keydown","keyup"],o),e}function P(t){void 0===t&&(t={}),t=Object.assign({onchange:function(){return 0},className:"",elements:[]},t);var e=c(t.elements,"click",(function(e){t.elements.forEach((function(r){return r.classList[e.target===r?"add":"remove"](t.className)})),t.onchange(e)}));return{destroy:function(){return u.apply(n,e)}}}function L(t){var e,r=t.el,n=t.reference,o=t.padding,i=void 0===o?8:o,a={start:"sme",middle:"mse",end:"ems"},c={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},u=(void 0===e&&(e={}),function(t,r){if(void 0===r&&(r=e[t]),r)return r;var n=t.split("-"),o=n[0],i=n[1],a=void 0===i?"middle":i,c="top"===o||"bottom"===o;return e[t]={position:o,variant:a,isVertical:c}});return{update:function(t){var e=u(t),o=e.position,s=e.variant,l=e.isVertical,f=n.getBoundingClientRect(),p=r.getBoundingClientRect(),v=function(t){return t?{s:f.left+f.width-p.width,m:-p.width/2+(f.left+f.width/2),e:f.left}:{s:f.bottom-p.height,m:f.bottom-f.height/2-p.height/2,e:f.bottom-f.height}},h={};function d(t,e,n){var o="top"===n,i=o?p.height:p.width,a=window[o?"innerHeight":"innerWidth"],c=t,u=Array.isArray(c),s=0;for(c=u?c:c[Symbol.iterator]();;){var l;if(u){if(s>=c.length)break;l=c[s++]}else{if((s=c.next()).done)break;l=s.value}var f=e[l],v=h[n]=f+"px";if(f>0&&f+i<a)return r.style[n]=v,!0}return!1}for(var g=0,y=[l,!l];g<y.length;g++){var b=y[g],m=d(c[o],b?{t:f.top-p.height-i,b:f.bottom+i}:{r:f.right+i,l:f.left-p.width-i},b?"top":"left"),x=d(a[s],v(b),b?"left":"top");if(m&&x)return}r.style.left=h.left,r.style.top=h.top}}}function I(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var R=function(){function t(t){var e=this;I(this,"_initializingActive",!0),I(this,"_recalc",!0),I(this,"_color",k()),I(this,"_lastColor",k()),I(this,"_swatchColors",[]),I(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=t=Object.assign({appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},strings:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},t);var r=t,n=r.swatches,o=r.components,i=r.theme,a=r.sliders,c=r.lockOpacity,u=r.padding;-1===["nano","monolith"].indexOf(i)||a||(t.sliders="h"),o.interaction||(o.interaction={});var s=o.preview,l=o.opacity,f=o.hue,p=o.palette;o.opacity=!c&&l,o.palette=p||s||l||f,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),n&&n.length&&n.forEach((function(t){return e.addSwatch(t)}));var v=this._root,h=v.button,d=v.app;this._nanopop=L({reference:h,padding:u,el:d}),h.setAttribute("role","button"),h.setAttribute("aria-label","toggle color picker dialog");var g=this;requestAnimationFrame((function e(){if(!d.offsetWidth&&d.parentElement!==t.container)return requestAnimationFrame(e);g.setColor(t.default),g._rePositioningPicker(),t.defaultRepresentation&&(g._representation=t.defaultRepresentation,g.setColorRepresentation(g._representation)),t.showAlways&&g.show(),g._initializingActive=!1,g._emit("init")}))}var e=t.prototype;return e._preBuild=function(){for(var t,e,r,n,o,i,a,c,u,s,l,f=this.options,v=0,d=["el","container"];v<d.length;v++){var g=d[v];f[g]=h(f[g])}this._root=(e=(t=f).components,r=t.strings,n=t.useAsButton,o=t.inline,i=t.appClass,a=t.theme,c=t.lockOpacity,s=p('\n      <div :ref="root" class="pickr">\n\n        '+(n?"":'<button type="button" :ref="button" class="pcr-button"></button>')+'\n\n        <div :ref="app" class="pcr-app '+(i||"")+'" data-theme="'+a+'" '+(o?'style="position: unset"':"")+' aria-label="color picker dialog" role="form">\n          <div class="pcr-selection" '+(u=function(t){return t?"":'style="display:none" hidden'})(e.palette)+'>\n            <div :obj="preview" class="pcr-color-preview" '+u(e.preview)+'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="use previous color"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="color selection area" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" '+u(e.hue)+'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="hue selection slider" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" '+u(e.opacity)+'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="opacity selection slider" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches '+(e.palette?"":"pcr-last")+'" :ref="swatches"></div> \n\n          <div :obj="interaction" class="pcr-interaction" '+u(Object.keys(e.interaction).length)+'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" '+u(e.interaction.input)+'>\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="'+(c?"HEX":"HEXA")+'" type="button" '+u(e.interaction.hex)+'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="'+(c?"RGB":"RGBA")+'" type="button" '+u(e.interaction.rgba)+'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="'+(c?"HSL":"HSLA")+'" type="button" '+u(e.interaction.hsla)+'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="'+(c?"HSV":"HSVA")+'" type="button" '+u(e.interaction.hsva)+'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" '+u(e.interaction.cmyk)+'>\n\n            <input :ref="save" class="pcr-save" value="'+(r.save||"Save")+'" type="button" '+u(e.interaction.save)+' aria-label="save and exit">\n            <input :ref="cancel" class="pcr-cancel" value="'+(r.cancel||"Cancel")+'" type="button" '+u(e.interaction.cancel)+' aria-label="cancel and exit">\n            <input :ref="clear" class="pcr-clear" value="'+(r.clear||"Clear")+'" type="button" '+u(e.interaction.clear)+' aria-label="clear and exit">\n          </div>\n        </div>\n      </div>\n    '),(l=s.interaction).options.find((function(t){return!t.hidden&&!t.classList.add("active")})),l.type=function(){return l.options.find((function(t){return t.classList.contains("active")}))},s),f.useAsButton&&(this._root.button=f.el),f.container.appendChild(this._root.root)},e._finalBuild=function(){var t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){var r=t.el.parentElement;t.el.nextSibling?r.insertBefore(e.app,t.el.nextSibling):r.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()},e._buildComponents=function(){var t=this,e=this,r=this.options.components,n=(e.options.sliders||"v").repeat(2),o=n.match(/^[vh]+$/g)?n:[],i=o[0],a=o[1],c=function(){return t._color||(t._color=t._lastColor.clone())},u={palette:C({element:e._root.palette.picker,wrapper:e._root.palette.palette,onstop:function(){return e._emit("changestop",e)},onchange:function(t,n){if(r.palette){var o=c(),i=e._root,a=e.options;e._recalc&&(o.s=100*t,o.v=100-100*n,o.v<0&&(o.v=0),e._updateOutput());var u=o.toRGBA().toString(0);this.element.style.background=u,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, "+o.a+"), transparent),\n                        linear-gradient(to left, hsla("+o.h+", 100%, 50%, "+o.a+"), rgba(255, 255, 255, "+o.a+"))\n                    ",a.comparison?a.useAsButton||e._lastColor||(i.preview.lastColor.style.color=u):i.button.style.color=u;var s=o.toHEXA().toString(),l=e._swatchColors,f=Array.isArray(l),p=0;for(l=f?l:l[Symbol.iterator]();;){var v;if(f){if(p>=l.length)break;v=l[p++]}else{if((p=l.next()).done)break;v=p.value}var h=v,d=h.el,g=h.color;d.classList[s===g.toHEXA().toString()?"add":"remove"]("pcr-active")}i.preview.currentColor.style.color=u,e.options.comparison||i.button.classList.remove("clear")}}}),hue:C({lock:"v"===a?"h":"v",element:e._root.hue.picker,wrapper:e._root.hue.slider,onstop:function(){return e._emit("changestop",e)},onchange:function(t){if(r.hue&&r.palette){var n=c();e._recalc&&(n.h=360*t),this.element.style.backgroundColor="hsl("+n.h+", 100%, 50%)",u.palette.trigger()}}}),opacity:C({lock:"v"===i?"h":"v",element:e._root.opacity.picker,wrapper:e._root.opacity.slider,onstop:function(){return e._emit("changestop",e)},onchange:function(t){if(r.opacity&&r.palette){var n=c();e._recalc&&(n.a=Math.round(100*t)/100),this.element.style.background="rgba(0, 0, 0, "+n.a+")",u.palette.trigger()}}}),selectable:P({elements:e._root.interaction.options,className:"active",onchange:function(t){e._representation=t.target.getAttribute("data-type").toUpperCase(),e._recalc&&e._updateOutput()}})};this._components=u},e._bindEvents=function(){var t=this,e=this._root,r=this.options,n=[c(e.interaction.clear,"click",(function(){return t._clearColor()})),c([e.interaction.cancel,e.preview.lastColor],"click",(function(){t._emit("cancel",t),t.setHSVA.apply(t,(t._lastColor||t._color).toHSVA().concat([!0]))})),c(e.interaction.save,"click",(function(){!t.applyColor()&&!r.showAlways&&t.hide()})),c(e.interaction.result,["keyup","input"],(function(e){t.setColor(e.target.value,!0)&&!t._initializingActive&&t._emit("change",t._color),e.stopImmediatePropagation()})),c(e.interaction.result,["focus","blur"],(function(e){t._recalc="blur"===e.type,t._recalc&&t._updateOutput()})),c([e.palette.palette,e.palette.picker,e.hue.slider,e.hue.picker,e.opacity.slider,e.opacity.picker],["mousedown","touchstart"],(function(){return t._recalc=!0}))];if(!r.showAlways){var o=r.closeWithKey;n.push(c(e.button,"click",(function(){return t.isOpen()?t.hide():t.show()})),c(document,"keyup",(function(e){return t.isOpen()&&(e.key===o||e.code===o)&&t.hide()})),c(document,["touchstart","mousedown"],(function(r){t.isOpen()&&!v(r).some((function(t){return t===e.app||t===e.button}))&&t.hide()}),{capture:!0}))}if(r.adjustableNumbers){var i={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};d(e.interaction.result,(function(e,r,n){var o=i[t.getColorRepresentation().toLowerCase()];if(o){var a=o[n],c=e+(a>=100?1e3*r:r);return c<=0?0:Number((c<a?c:a).toPrecision(3))}return e}))}if(r.autoReposition&&!r.inline){var a=null,u=this;n.push(c(window,["scroll","resize"],(function(){u.isOpen()&&(r.closeOnScroll&&u.hide(),null===a?(a=setTimeout((function(){return a=null}),100),requestAnimationFrame((function t(){u._rePositioningPicker(),null!==a&&requestAnimationFrame(t)}))):(clearTimeout(a),a=setTimeout((function(){return a=null}),100)))}),{capture:!0}))}this._eventBindings=n},e._rePositioningPicker=function(){var t=this.options;if(!t.inline){var e=this._root.app;matchMedia("(max-width: 576px)").matches?Object.assign(e.style,{margin:"auto",height:e.getBoundingClientRect().height+"px",top:0,bottom:0,left:0,right:0}):(Object.assign(e.style,{margin:null,right:null,top:null,bottom:null,left:null,height:null}),this._nanopop.update(t.position))}},e._updateOutput=function(){var t=this._root,e=this._color,r=this.options;if(t.interaction.type()){var n="to"+t.interaction.type().getAttribute("data-type");t.interaction.result.value="function"==typeof e[n]?e[n]().toString(r.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",e)},e._clearColor=function(t){void 0===t&&(t=!1);var e=this._root,r=this.options;r.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),r.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this))},e._parseLocalColor=function(t){var e=j(t),r=e.values,n=e.type,o=e.a,i=this.options.lockOpacity,a=void 0!==o&&1!==o;return r&&3===r.length&&(r[3]=void 0),{values:!r||i&&a?null:r,type:n}},e._emit=function(t){for(var e=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this._eventListener[t].forEach((function(t){return t.apply(void 0,n.concat([e]))}))},e.on=function(t,e){return"function"==typeof e&&"string"==typeof t&&t in this._eventListener&&this._eventListener[t].push(e),this},e.off=function(t,e){var r=this._eventListener[t];if(r){var n=r.indexOf(e);~n&&r.splice(n,1)}return this},e.addSwatch=function(t){var e=this,r=this._parseLocalColor(t).values;if(r){var n=this._swatchColors,o=this._root,i=k.apply(void 0,r),a=l('<button type="button" style="color: '+i.toRGBA().toString(0)+'" aria-label="color swatch"/>');return o.swatches.appendChild(a),n.push({el:a,color:i}),this._eventBindings.push(c(a,"click",(function(){e.setHSVA.apply(e,i.toHSVA().concat([!0])),e._emit("swatchselect",i),e._emit("change",i)}))),!0}return!1},e.removeSwatch=function(t){var e=this._swatchColors[t];if(e){var r=e.el;return this._root.swatches.removeChild(r),this._swatchColors.splice(t,1),!0}return!1},e.applyColor=function(t){void 0===t&&(t=!1);var e=this._root,r=e.preview,n=e.button,o=this._color.toRGBA().toString(0);return r.lastColor.style.color=o,this.options.useAsButton||(n.style.color=o),n.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this},e.destroy=function(){var t=this;this._eventBindings.forEach((function(t){return u.apply(n,t)})),Object.keys(this._components).forEach((function(e){return t._components[e].destroy()}))},e.destroyAndRemove=function(){var t=this;this.destroy();var e=this._root,r=e.root,n=e.app;r.parentElement&&r.parentElement.removeChild(r),n.parentElement.removeChild(n),Object.keys(this).forEach((function(e){return t[e]=null}))},e.hide=function(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this},e.show=function(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this},e.isOpen=function(){return this._root.app.classList.contains("visible")},e.setHSVA=function(t,e,r,n,o){void 0===t&&(t=360),void 0===e&&(e=0),void 0===r&&(r=0),void 0===n&&(n=1),void 0===o&&(o=!1);var i=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||r<0||r>100||n<0||n>1)return!1;this._color=k(t,e,r,n);var a=this._components,c=a.hue,u=a.opacity,s=a.palette;return c.update(t/360),u.update(n),s.update(e/100,1-r/100),o||this.applyColor(),i&&this._updateOutput(),this._recalc=i,!0},e.setColor=function(t,e){if(void 0===e&&(e=!1),null===t)return this._clearColor(e),!0;var r=this._parseLocalColor(t),n=r.values,o=r.type;if(n){var i=o.toUpperCase(),a=this._root.interaction.options,c=a.find((function(t){return t.getAttribute("data-type")===i}));if(c&&!c.hidden){var u=a,s=Array.isArray(u),l=0;for(u=s?u:u[Symbol.iterator]();;){var f;if(s){if(l>=u.length)break;f=u[l++]}else{if((l=u.next()).done)break;f=l.value}var p=f;p.classList[p===c?"add":"remove"]("active")}}return this.setColorRepresentation(i),this.setHSVA.apply(this,n.concat([e]))}return!1},e.setColorRepresentation=function(t){return t=t.toUpperCase(),!!this._root.interaction.options.find((function(e){return e.getAttribute("data-type").startsWith(t)&&!e.click()}))},e.getColorRepresentation=function(){return this._representation},e.getColor=function(){return this._color},e.getSelectedColor=function(){return this._lastColor},e.getRoot=function(){return this._root},e.disable=function(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this},e.enable=function(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this},t}();R.utils=n,R.libs={HSVaColor:k,Moveable:C,Nanopop:L,Selectable:P},R.create=function(t){return new R(t)},R.version=g.a;e.default=R}]).default}));
//# sourceMappingURL=pickr.es5.min.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
window.geotoolkit = window.geotoolkit ||  {};
window.ivaap = {};
window.ivaap.ui = {};
window.ivaap.ui.defaultv2 = {};

geotoolkit.inherits =function(childClass,parentClass){
    if (parentClass == null) {
        throw new Error('parentClass should not be undefined');
    }
    /**
     *
     * @private
     */
    function TemporaryClass () {
    }

    TemporaryClass.prototype = parentClass.prototype;
    childClass._super = parentClass.prototype;
    childClass.getSuperClass = function () {
        return childClass._super;
    };
    childClass.prototype = new TemporaryClass();
    childClass.prototype.constructor = childClass;

    childClass.prototype.getClassName = function () {
        return childClass._className;
    };

    childClass.prototype.getSuperClass = function () {
        return childClass._super;
    };
    childClass.parent = parentClass;
    return childClass;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

mui = {};

mui.inherits = function(childClass,parentClass){
    if (parentClass == null) {
        throw new Error('parentClass should not be undefined');
    }
    /**
     *
     * @private
     */
    function TemporaryClass () {
    }

    TemporaryClass.prototype = parentClass.prototype;
    childClass._super = parentClass.prototype;
    childClass.getSuperClass = function () {
        return childClass._super;
    };
    childClass.prototype = new TemporaryClass();
    childClass.prototype.constructor = childClass;

    childClass.parent = parentClass;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * Iterator Interface
 * @interface mui.IIterator
 */
mui.IIterator = (function () {
    var IIterator = function () {};

    /**
     * @abstract
     * @function
     * @return {boolean}
     */
    IIterator.prototype.hasNext = function(){
        throw "must implement";
    };
    /**
     * Next
     * @abstract
     * @function
     * @return {*}
     */
    IIterator.prototype.next = function(){
        throw "must implement";
    };

    return IIterator;
})();


/**
 * Entity interface.
 *
 * @interface
 */
mui.IEntity = (function () {
    var IEntity = function () {

    };

    /**
     * Get Id
     *
     * @function
     * @abstract
     *
     * @return {string}
     */
    IEntity.prototype.getId = geotoolkit.abstractMethod;


    /**
     * Get Name
     *
     * @function
     * @abstract
     *
     * @return {string}
     */
    IEntity.prototype.getName = geotoolkit.abstractMethod;


    /**
     * Get Description
     *
     * @function
     * @abstract
     *
     * @return {string}
     */
    IEntity.prototype.getDescription = geotoolkit.abstractMethod;

    /**
     * Get icon
     * @function
     * @abstract
     * @return {string}
     */
    IEntity.prototype.getIcon = geotoolkit.abstractMethod;

    /**
     * Check if resource has been loaded
     *
     * @function
     * @abstract
     *
     * @return {boolean}
     */
    IEntity.prototype.isLoaded = geotoolkit.abstractMethod;

    /**
     * Get Type
     * @function
     * @abstract
     * @return {string}
     */
    IEntity.prototype.getType = geotoolkit.abstractMethod;

    /**
     * Get property
     * @function
     * @abstract
     * @return {string} prop
     * @return {*}
     */
    IEntity.prototype.getProperty = geotoolkit.abstractMethod;

    /**
     * Get create a clone with customize properties
     * @function
     * @abstract
     * @return {object} props
     * @return {mui.IEntity}
     */
    IEntity.prototype.assign = geotoolkit.abstractMethod;
    return IEntity;
})();
/**
 * Base Entity
 * @class mui.Entity
 * @constructor
 * @implements mui.IEntity
 */
mui.Entity = function(){
    var counter = 0;
    var Entity = function(opts){
        this._opts = opts;
        this._id = opts['id']?opts['id']: 'item-'+(++counter);
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getId = function(){
        return this._id;
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getIcon = function () {
        return this._opts['icon'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getName = function () {
        return this._opts['name'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getType = function () {
        return this._opts['type'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getDescription = function () {
        return this._opts['description'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.assign = function () {
        throw "not yet implemented";
    };

    /**
     * @inheritDoc
     */
    Entity.prototype.getProperty = function (prop) {
        return this._opts[prop];
    };
    return Entity;
}();

/**
 * Collection Interface
 * @interface mui.ICollection
 */
mui.ICollection = (function () {
    var ICollection = function () {};

    /**
     * Get children iterator
     * @abstract
     * @function
     * @param {?mui.IEntity} entity
     * @return {mui.IIterator}
     */
    ICollection.prototype.getChildren = geotoolkit.abstractMethod;

    return ICollection;
})();


/**
 * Entity Collection Interface
 * @interface mui.IEntityCollection
 * @augments mui.ICollection
 */
mui.IEntityCollection = (function () {
    var IEntityCollection = function () {};

    /**
     * Get entity name
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getName = function(entity){
        throw "must implement";
    };


    /**
     * Get entity type
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getType = function(entity){
        throw "must implement";
    };
    /**
     * Get entity icon
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getIcon = function(entity){
        throw "must implement";
    };
    /**
     * Get entity description
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getDescription = function(entity){
        throw "must implement";
    };
    /**
     * Get entity id
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getId = function(entity){
        throw "must implement";
    };

    /**
     * If entity is a parent
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {boolean}
     */
    IEntityCollection.prototype.isParent = function(entity){
        throw "must implement";
    };
    return IEntityCollection;
})();



/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * Entity collection interface
 * @interface mui.IImageEntityCollection
 * @augments mui.IEntityCollection
 */
mui.IImageEntityCollection = function(){
    var IImageEntityCollection = function(){};

    /**
     * Get entity's image
     * @abstract
     * @function
     * @param {mui.IEntity} entity
     */
    IImageEntityCollection.prototype.getImage = function(entity){
        throw "must implement";
    };
    return IImageEntityCollection;
}();


/**
 * Array collection
 * @class mui.EntityCollection
 * @implements {mui.IEntityCollection }
 *
 */
mui.EntityCollection = function(){
    var EntityCollection = function(children){
        this._children = children;
    };

    EntityCollection.prototype.getName = function(entity){
        return entity.getName();
    };
    EntityCollection.prototype.getIcon = function(entity){
        return entity.getIcon();
    };
    EntityCollection.prototype.getDescription = function(entity){
        return entity.getDescription();
    };
    EntityCollection.prototype.getType = function(entity){
        return entity.getType();
    };
    EntityCollection.prototype.getId = function(entity){
        return entity.getId();
    };
    EntityCollection.prototype.isParent = function(entity){
        return Array.isArray(entity.getProperty('children'));
    };
    /**
     * @inheritDoc
     */
    EntityCollection.prototype.getChildren = function(parent){
        return new mui.ArrayIterator(parent==null?this._children.slice(0):parent.getProperty('children'));
    };
    return EntityCollection;
}();


/**
 * Array collection
 * @class mui.ImageEntityCollection
 * @implements {mui.IImageEntityCollection }
 * @augments mui.EntityCollection
 *
 */
mui.ImageEntityCollection = function(){
    var ImageEntityCollection = function(children){
        mui.EntityCollection.call(this,children);
    };
    mui.inherits(ImageEntityCollection,mui.EntityCollection);

    /**
     * @inheritDoc
     */
    ImageEntityCollection.prototype.getImage = function(entity){
        return entity.getProperty('image');
    };

    return ImageEntityCollection;
}();


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * Array collection
 * @class mui.ArrayCollection
 * @implements mui.ICollection
 */
mui.ArrayCollection = function(){
    var ArrayCollection = function(children){
        this._children = children;
    };
    /**
     * @override
     * @return {mui.ArrayIterator}
     */
    ArrayCollection.prototype.getChildren = function(){
        return new mui.ArrayIterator(this._children.slice(0));
    };
    return ArrayCollection;
}();

/**
 * Array iterator
 * @class mui.ArrayIterator
 * @implements mui.IIterator
 */
mui.ArrayIterator = function(){
    var ArrayIterator = function(arr){
        this._arr = arr?arr:[];
        this._idx = -1;
        this._length = this._arr.length;
    };
    /**
     * @inheritDoc
     */
    ArrayIterator.prototype.hasNext = function(){
        return this._idx+1< this._length;
    };
    /**
     * @override
     * @param {number} skip
     * @return {*}
     */
    ArrayIterator.prototype.next = function(skip){
        if(skip==null){
            skip = 1;
        }
        this._idx = this._idx+skip;
        return this._arr[this._idx];
    };
    return ArrayIterator;

}();


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Create element with class name & type
 * @param {?string} type node type
 * @param {?string} className
 * @return {HTMLElement}
 */
Document.prototype.createWithClassName = function(type,className){
    if(type==null){
        type = 'DIV';
    }
    var element = this.createElement(type);
    if(className){
        element.className = className;
    }
    return element;
};
/**
 * Create document fragment
 * @type {() => DocumentFragment}
 */
Node.prototype.createFrag = Document.prototype.createDocumentFragment;

Node.prototype.clear = function(){
    while(this.lastChild){
        this.removeChild(this.lastChild);
    }
    return this;
};

/**
 * Append children to node
 * @return {...Node}
 */
Node.prototype.add = function(){
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]!=null) {
            this.appendChild(arguments[i]);
        }
    }
    return this;
};
Node.prototype.removeFromParent = function(){
    if(this.parentNode){
        this.parentNode.removeChild(this);
    }
    return this;
};
/**
 * Create child and append to Element
 * @param {?string} type Tag Name
 * @param {?string} className
 * @return {HTMLElement}
 */
Element.prototype.createChild = function(type,className){
    var child = this.ownerDocument.createWithClassName(type,className);
    this.appendChild(child);
    return child;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
mui.BuildContext = function(){
    var BuildContext = function (el){
        this._el = el;
    };

    return BuildContext;

}();
/**
 * @typedef  mui.ElementOptionsType
 * @property {boolean} fitToParent
 * @property {number} width
 * @property {height} height
 * @property {boolean} expandedToParent
 * @property {string} crossAxisAlignSelf
 * @property {mui.Style} style
 *
 * @typedef {mui.ElementOptionsType & mui.CreateElementOptions} mui.ElementOptions
 *
 * Wrapper of Dom element
 * @class mui.Element
 * @param {mui.ElementOptions} options
 * @implements {mui.IElement}
 * @constructor
 *
 */
mui.Element = function(){

    var ANIM_EVT_NAME = function () {
        var t,
            el = document.createElement("fakeelement");

        var animations = {
            "animation": "animationend",
            "OAnimation": "oAnimationEnd",
            "MozAnimation": "animationend",
            "WebkitAnimation": "webkitAnimationEnd"
        };

        for (t in animations) {
            if (!animations.hasOwnProperty(t)) continue;
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    }();
    var TRANS_EVT_NAME =  function () {
        var t,
            el = document.createElement("fakeelement");

        var transitions = {
            "transition": "transitionend",
            "OTransition": "oTransitionEnd",
            "MozTransition": "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }();
    var counter = 0;
    var Element = function(options){
        if(options==null)options = {};
        this._children = [];
        var elm =  document.createElement(options['type']?options['type']:'DIV');
        if(options['className']){
            elm.className = options['className'];
        }
        this._el = elm;
        var guid = options['guid']?options['guid']:'gui-id-'+(++counter);
        this._el.__GUID = guid;
        this._el.__ref = this;
        this._el.classList.add('mui-el');
        if(options['fitToParent']){
            this._el.classList.add('mui-el--fit-to-parent');
        }
        var w = options['width'];
        var h = options['height'];
        if(w!=null){
            this.setWidth(w);
        }
        if(h!=null){
            this.setHeight(h);
        }

        if( options['fitToParent']){
            this.addClass('mui-el--fit-to-parent');
        }
        if(options['crossAxisAlignSelf']){
            this.addClass('mui-flex__cross-axis-self--'+options['crossAxisAlignSelf']);
        }

        if(options['style']){
            options['style'].apply(this._el);
        }

    };
    Element.ANIM_EVT_NAME = ANIM_EVT_NAME;

    /**
     * @inheritDoc
     */
    Element.prototype.dispose = function(){
        while(this._children.length>0){
            this._children[this._children.length-1].detach();
        }
        this.detach();
        this._el.__ref = null;
        this._el = null;

    };
    Element.prototype._initialize = function (){
        var node = this.build(new mui.BuildContext(this));
        if(node){
            node.attachTo(this._el);
        }
    };

    /**
     * @virtual
     * @param {} context
     */
    Element.prototype.build = function(context){


    };

    /**
     * Get animation event name
     * @return {string}
     */
    Element.prototype.getAnimName = function(){
        return Element.ANIM_EVT_NAME;
    };
    /**
     * Get transition event name
     * @return {string}
     */
    Element.prototype.getTransitionName = function(){
        return TRANS_EVT_NAME;
    };

    /**
     * Make this instance  a root node
     * @return {mui.Element}
     */
    Element.prototype.makeMeAsRoot = function(){
        if(this._parent){
            throw "Please detach it first";
        }
        this._isRoot = true;
        return this;
    };

    /**
     * Get dom element
     * @return {mui.Element}
     */
    Element.prototype.getElement = function(){
        return this._el;
    };
    /**
     * Add Class
     * @param {string | Array.<string>} className
     * @param {mui.Element}
     */
    Element.prototype.addClass = function(className,el){
        if(el==null){
            el = this._el;
        }
        var arrList = el.classList;
        if(Array.isArray(className)) {
            className.forEach(function(name){
                if(arrList.contains(name))return;
                arrList.add(name);
            });
            return this;
        }
        arrList.add(className);
        return this;

    };
    /**
     * Set width
     * @param {number| string} w
     */
    Element.prototype.setWidth = function(w){
        this.getElement().style.width = typeof w=='number'?w+'px':w;
        this._cachedWidth = null;
        return this;
    };
    /**
     * Set height
     * @param {number| string}
     */
    Element.prototype.setHeight = function(h){
        this.getElement().style.height = typeof h=='number'?h+'px':h;
        this._cachedHeight = null;
        return this;
    };


    /**
     * Get width
     * @return {number}
     */
    Element.prototype.getWidth = function(){
        if(this._cachedWidth==null){
            this._cachedWidth = this.getElement().getBoundingClientRect().width;
        }
        return this._cachedWidth;
    };
    /**
     * Get height
     * @return {number}
     */
    Element.prototype.getHeight = function(){
        if(this._cachedHeight==null){
            this._cachedHeight = this.getElement().getBoundingClientRect().height;
        }
        return this._cachedHeight;
    };
    /**
     * Remove class
     * @param {string} className
     * @return {mui.Element}
     */
    Element.prototype.removeClass = function(className){
        var arrList = this._el.classList;
        if(Array.isArray(className)) {
            className.forEach(function(name){
                if(!arrList.contains(name))return;
                arrList.remove(name);
            });
            return this;
        }
        arrList.remove(className);
        return this;


    };

    /**
     * Is visible
     * @return {boolean}
     */
    Element.prototype.isVisible = function(){
        return !this._el.classList.contains('el--hidden');
    };

    /**
     * Set visibility
     * @param {boolean} bool
     * @param {boolean} removeFromDom
     * @return {mui.Element}
     */
    Element.prototype.setVisible = function(bool,removeFromDom){
        if(this.isVisible()===bool)return;
        if(bool) {
            this._el.classList.remove('el--hidden');
        }else{
            this._el.classList.remove('el--hidden');
        }
        this._onVisible();
        if(!bool && removeFromDom){
            this.detach();
        }
        return this;
    };

    Element.prototype._onVisible = function(){
        this.wasVisible();
        this._invokeVisibleChildren(this._onVisible);
    };

    /**
     * @protected
     * @virtual
     * @function
     */
    Element.prototype.wasVisible = function(){
    };

    /**
     * Add dom children at root level
     * @protected
     * @param {HTMLElement} element
     * @return {mui.Element}
     */
    Element.prototype.add = function(element){
        for(var i =0;i<arguments.length;i++){
            if(arguments[i]) {
                this._el.appendChild(arguments[i]);
            }
        }
        return this;
    };
    /**
     * Remove dom children
     * @protected
     * @param {HTMLElement} element
     * @return {mui.Element}
     */
    Element.prototype.remove = function(element){
        for(var i =0;i<arguments.length;i++){
            if(arguments[i].parentNode!==this._el)continue;
            this._el.removeChild(arguments[i]);
        }
        return this;
    };
    /**
     * Detach all virtual elements
     * @protected
     * @return {mui.Element}
     */
    Element.prototype.detachAllChildren = function(){
        this._children.forEach(function(child){
           child.detach();
        });
        return this;
    };

    /**
     * Clear all dom children
     * @protected
     * @return {mui.Element}
     */
    Element.prototype.clear = function(){
        var elm = this._el;
        while(elm.lastChild){
            elm.removeChild(elm.lastChild);
        }
        return this;
    };


    Element.prototype._invokeChildren = function(fn){
        this._children.forEach(function(child){
            fn.apply(child);
        });
    };
    Element.prototype._invokeVisibleChildren = function(fn){
        this._children.forEach(function (child){
            if(child.isVisible()) {
                fn.apply(child);
            }
        });
    };


    /**
     * Detach from parent
     * @protected
     * @return {mui.Element}
     */
    Element.prototype.detach = function(){
        if(!this._isRoot && !this._parent){
            return this;
        }
        if(this._el.parentNode==null){
            if(this._isRoot){
                return this;
            }
            throw "Illegal removed";

        }
        this._el.parentNode.removeChild(this._el);
        if(!this._isRoot) {
            var idx = this._parent._children.indexOf(this);
            if (idx == -1) {
                throw "child is not found";
            }
            this._parent._children.splice(idx, 1);
            this._parent = null;
        }
        this._onDetached();
        return this;
    };
    Element.prototype._onDetached = function(){
        this.wasDetached();
        this._invokeVisibleChildren(this._onDetached);
    };
    /**
     * @protected
     * @virtual
     * @function
     */
    Element.prototype.wasDetached = function(){

    };

    /**
     * Attach to another Element
     * @package
     * @protected
     * @param {HTMLElement | mui.Element} element
     * @return {mui.Element}
     */
    Element.prototype.attachTo = function(element){
        if(element instanceof Element){
            element = element._el;
        }
        if(element===this._el.parentNode)return this;
        var e = element;
        while(e && !e.__ref){
            e = e.parentNode;
        }
        if(e==null){
            if(this._isRoot){
                this.detach();
                element.add(this._el);
                this._onAttached();
                this.setVisible(true);
                this._onResize();
                return this;
            }

            throw "Cant attach to non Element node";
        }
        if(this._isRoot){
            throw "Cant assign root to another Element";
        }

        var ref = e.__ref;

        if(this._parent===ref){
            //Same parent, just move to a different container
            element.appendChild(this._el);
            this._onResize();
            return this;

        }
        //different parent
        this.detach();

        this._parent = ref;
        ref._children.push(this);
        element.appendChild(this._el);

        this.setVisible(true);
        this._onAttached();
        this._onResize();
        return this;
    };

    Element.prototype._onAttached = function(){
        this.wasAttached();
        this._invokeChildren(this._onAttached);
    };
    /**
     * @protected
     * @virtual
     * @function
     */
    Element.prototype.wasAttached = function(){

    };
    Element.prototype._onResize = function(){
        this.onResize();
        this._invokeVisibleChildren(this._onResize);
    };
    /**
     * @protected
     * @virtual
     * @virtual
     */
    Element.prototype.onResize = function(){

    };


    /**
     * Get Parent
     * @return {?mui.Element}
     */
    Element.prototype.getParent = function(){
        return this._parent;
    };


    /**
     * Find the closest parent element which has class name
     * @param {HTMLElement} target
     * @param {string} findClassName
     * @return {HTMLElement}
     */
    Element.prototype.closest = function(target,findClassName){
        return Element.closest(target,findClassName);

    };
    /**
     * Find the closest parent element which has class name
     * @static
     * @param {HTMLElement} target
     * @param {string} findClassName
     * @return {HTMLElement}
     */
    Element.closest = function(target,findClassName){
        var node = target;
        while(true){
            if(node && node.classList && node.classList.contains(findClassName)){
                return node;
            }
            node = node.parentNode;
            if(node==null){
                return;
            }
        }
    };


    /**
     * Create html element
     * @param {mui.CreateElementOptions} options
     * @return {HTMLElement}
     */
    Element.prototype.create = function(options){
        return Element.create(options);
    };

    /**
     * @typedef mui.CreateElementOptions
     * @property {string} className
     * @property {string} type
     * @property {string} text
     * @property {Array.<Object>} attributes
     *
     * Create DOM Element
     * @static
     * @param {mui.CreateElementOptions} options
     * @return  {HTMLElement}
     */
    Element.create = function(options){
        if(typeof options=='string'){
            options = {'className':options};
        }
        if(options==null){
            options = {};
        }
        var elm =  document.createElement(options['type']?options['type']:'DIV');
        if(options['className']){
            elm.className = options['className'];
        }

        if(options['text']){
            elm.textContent = options['text'];
        }
        if(options['attributes']){
            options['attributes'].forEach(function(attr){
                elm.setAttribute(attr['key'],attr['value']);
            });
        }
        return elm;

    };
    Element.offClickOutside = function(element){
        if(element.__mouseDownHandler){
            document.removeEventListener('mousedown',element.__mouseDownHandler,true);
            element.__mouseDownHandler = null;
        }
    };

    /**
     * Add handler to click event outside container
     * @static
     * @param {HTMLElement} element
     * @param {function} callback
     */
    Element.onClickOutside = function(element,callback){
        element.classList.add('mui-popup--open');
        element.__mouseDownHandler = function(evt){
            var found = Element.closest(evt.target,'mui-popup--open');
            if(found)return;
            var removed = callback();
            if(removed===false)return;
            document.removeEventListener('mousedown',element.__mouseDownHandler,true);
            element.__mouseDownHandler = null;

        }.bind(this);
        document.addEventListener('mousedown',element.__mouseDownHandler,true);
    };

    /**
     * Align two container relatively to each other
     * @static
     * @param {HTMLElement} targetElement
     * @param {HTMLElement} anchorElement
     * @param {string} hPoint left,right
     * @param {string} top,bottom vPoint
     * @param {string} hDirection lef,right
     * @param {string} vDirection top,bottom
     * @param {number} xOffset
     * @param {number} yOffset
     */
    Element.aligns = function(targetElement,anchorElement,hPoint,vPoint,hDirection,vDirection,xOffset,yOffset){
        var pWidth = document.documentElement.clientWidth
        var pHeight = document.documentElement.clientHeight;
        var anchorRect = anchorElement.getBoundingClientRect();
        targetElement.style.minWidth = anchorRect.width+'px';
        if(hPoint==null){
            hPoint = anchorRect.left>pWidth/2?'right':'left';
        }
        if(vPoint==null){
            vPoint = anchorRect.top>pHeight/2?'top':'bottom';
        }
        if(hDirection==null){
            hDirection = anchorRect.left<pWidth/2?'right':'left';
        }
        if(vDirection==null){
            vDirection = anchorRect.top>pHeight/2?'top':'bottom';
        }
        if(xOffset==null)xOffset=0;
        if(yOffset==null)yOffset=4;


        var x = anchorRect[hPoint];
        var y = anchorRect[vPoint];
        y = vDirection=='top'?y-yOffset:y+yOffset;
        Element.position(targetElement,x,y,hDirection,vDirection);

    };

    /**
     * Position container
     * @static
     * @param {HTMLElement} targetElement
     * @param {number} x
     * @param {number} y
     * @param {string} hDirection left,right
     * @param {string} vDirection top,bottom
     */
    Element.position = function(targetElement,x,y,hDirection,vDirection){
        var pWidth = document.documentElement.clientWidth
        var pHeight = document.documentElement.clientHeight;
        var targetRect = targetElement.getBoundingClientRect();

        if(hDirection=='left'){
            targetElement.style.right = (pWidth-x)+'px';
            targetElement.style.left = 'auto';
        }else if(targetRect.width+x>pWidth){
            targetElement.style.right = '0px';
            targetElement.style.left = 'auto';
        }else{
            targetElement.style.left = (x)+'px';
            targetElement.style.right = 'auto';
        }
        if(vDirection=='top'){
            targetElement.style.bottom = (pHeight-y)+'px';
            targetElement.style.top = 'auto';
        }else if(targetRect.height+y>pHeight){
            targetElement.style.bottom = '0px';
            targetElement.style.top = 'auto';
        }else{
            targetElement.style.top = y+'px';
            targetElement.style.bottom = 'auto';
        }
    };

    /**
     * Close popup
     * @static
     * @param {mui.Element} popupElement
     */
    Element.closePopup = function(popupElement){
        popupElement.detach();
        mui.Element.offClickOutside(popupElement.getElement());
        if(popupElement._windowScrollHandler){
            window.removeEventListener('scroll',popupElement._windowScrollHandler);
            popupElement._windowScrollHandler =null;
        }
    };
    /**
     * Show popup relatively to another element
     * @static
     * @param {mui.Element} popupElement
     * @param {HTMLElement} anchorElement
     * @param {string} hPoint left,right
     * @param {string} vPoint top,bottom
     * @param {string} xDir left,right
     * @param {string} yDir top,bottom
     * @param {number} xOffset
     * @param {number} yOffset
     */
    Element.showPopupRelativeToElement = function(popupElement,anchorElement,hPoint,vPoint,xDir,yDir,xOffset,yOffset){
        popupElement.detach();
        popupElement.makeMeAsRoot();
        popupElement.getElement().style.position='fixed';
        popupElement.getElement().style.zIndex='9999';
        popupElement.attachTo(document.getElementsByTagName('BODY')[0]);
        Element.aligns(popupElement.getElement(),anchorElement,hPoint,vPoint,xDir,yDir,xOffset,yOffset);
        Element.onClickOutside(popupElement.getElement(),function(){
            Element.closePopup(popupElement);
        });
        if(popupElement._windowScrollHandler==null){
            popupElement._windowScrollHandler = Element.aligns.bind(null,popupElement.getElement(),anchorElement,hPoint,vPoint,xDir,yDir,xOffset,yOffset);
            window.addEventListener('scroll',popupElement._windowScrollHandler);
        }

    };
    /**
     * Show popup at position
     * @static
     * @param {mui.Element} popupElement
     * @param {number} x
     * @param {number} y
     * @param {string} hAlign left,right
     * @param {string} vAlign top,bottom
     */
    Element.showPopupAt = function(popupElement,x,y,hAlign,vAlign){
        popupElement.detach();
        popupElement.makeMeAsRoot();
        popupElement.getElement().style.position='fixed';
        popupElement.getElement().style.zIndex='9999';
        popupElement.attachTo(document.getElementsByTagName('BODY')[0]);
        mui.Element.position(popupElement.getElement(),x,y,hAlign,vAlign);
        mui.Element.onClickOutside(popupElement.getElement(),function(){
            Element.closePopup(popupElement);
        });
    };

    /**
     * Inherit the prototype methods from one constructor into another.
     * Based on the Closure Library
     *
     * @param {Function} childClass Child class.
     * @param {Function} parentClass Parent class.
     */
    Element.inherits = function (childClass, parentClass) {
        mui.inherits(childClass,parentClass);

    };
    return Element;
}();

/**
 * Base event
 * @class mui.Event
 * @constructor
 * @param {mui.Element} src
 * @param {*} target
 * @param {Event} nativeEvt
 */
mui.Event = function() {
    var Event = function (src,target,nativeEvt) {
        this._src = src;
        this._target = target;
        this._nativeEvt = nativeEvt;
        this._stopped = false;
    };
    /**
     * Component stop propagation (not native stopPropagation)
     *
     */
    Event.prototype.stopPropagation = function () {
        this._stopped = true;
    };

    /**
     * Get Target
     * @return {*}
     */
    Event.prototype.getTarget = function () {
        return this._target;
    };

    /**
     * Get source
     * @return {mui.Element }
     *
     */
    Event.prototype.getSource = function () {
        return this._src;
    };
    /**
     * Is propagation stopped
     * @return {boolean}
     */
    Event.prototype.isStopped = function () {
        return this._stopped;
    };
    /**
     * Get native dom event
     * @return {Event}
     */
    Event.prototype.getNativeEvt = function () {
        return this._nativeEvt;
    };
    return Event;
}();

/**
 * Root Element
 * Cant be added to another element, must be topmost element in the tree structure
 * @class mui.Root
 * @param {mui.ElementOptions} options
 * @constructor
 */
mui.Root = function(){
    var Root = function(options){
        mui.Element.call(this,options);
        this.makeMeAsRoot();
    };
    mui.inherits(Root,mui.Element);
    return Root;
}();

/**
 *
 * Abstract Multiple Child Container
 * @class mui.MultipleChildContainer
 * @augments mui.Element
 * @param {mui.ElementOptions} options
 * @constructor
 */
mui.AbstractMultipleChildContainer = function(){
    var AbstractMultipleChildContainer = function(options){
        mui.Element.call(this,options);
    };
    mui.inherits(AbstractMultipleChildContainer,mui.Element);
    /**
     * Add Child
     * @abstract
     * @function
     * @param {mui.Element} child
     * @return {mui.AbstractMultipleChildContainer}
     */
    AbstractMultipleChildContainer.prototype.addChild = function(child){
        throw "must implement";
    };
    return AbstractMultipleChildContainer;
}();


/**
 * @typedef mui.MultipleChildContainerOptions
 * @property {Array.<mui.Element>} children
 *
 * Multiple Child Container with same parent dom
 * @class mui.MultipleChildContainer
 * @augments mui.AbstractMultipleChildContainer
 * @param {mui.MultipleChildContainerOptions} options
 * @constructor
 */
mui.MultipleChildContainer = function(){
    var MultipleChildContainer = function(options){
        mui.AbstractMultipleChildContainer .call(this,options);
        if(options['children']) {
            this.setChildren(options['children']);
        }
    };
    mui.inherits(MultipleChildContainer,mui.AbstractMultipleChildContainer );

    /**
     * @inheritDoc
     */
    MultipleChildContainer.prototype.addChild = function(child){
        if(child){
            child.attachTo(this.getElement());
        }
        return this;
    };
    /**
     * Set children
     * @param {Array.<mui.Element>} arr
     * @return {mui.MultipleChildContainer}
     */
    MultipleChildContainer.prototype.setChildren = function(arr){
        this.detachAllChildren();
        if(arr==null)return this;
        for (var i=0;i<arr.length;i++){
            arr[i].attachTo(this.getElement());
        }
        return this;
    };
    return MultipleChildContainer;
}();
/**
 * @typedef mui.AbstractSingleChildContainerOptions
 * @property {mui.Element} child
 *
 * Abstract Single Child Container
 * @class mui.AbstractSingleChildContainer
 * @augments mui.Element
 * @param {mui.AbstractSingleChildContainerOptions} options
 * @constructor
 */
mui.AbstractSingleChildContainer = function(){
    var AbstractSingleChildContainer = function(options){
        mui.Element.call(this,options);
        this.setChild(options['child']);
    };
    mui.inherits(AbstractSingleChildContainer,mui.Element);
    /**
     * Get Child
     * @return {mui.Element}
     */
    AbstractSingleChildContainer.prototype.getChild = function(){
        return this.getChildren()[0];
    };
    /**
     * Set Child
     * @abstract
     * @function
     * @param {mui.Element} child
     * @return {mui.AbstractSingleChildContainer }
     */
    AbstractSingleChildContainer.prototype.setChild = function(child){
        throw "must implement";

    };
    return AbstractSingleChildContainer;
}();

/**
 * Single Child Container
 * @class mui.SingleChildContainer
 * @augments mui.AbstractSingleChildContainer
 * @param {mui.AbstractSingleChildContainerOptions} options
 * @constructor
 */
mui.SingleChildContainer = function(){
    var SingleChildContainer = function(options){
        mui.AbstractSingleChildContainer.call(this,options);
        this.setChild(options['child']);
    };
    mui.inherits(SingleChildContainer,mui.AbstractSingleChildContainer);

    /**
     * @inheritDoc
     */
    SingleChildContainer.prototype.setChild = function(child){
        this.detachAllChildren();
        if(child) {
            child.attachTo(this.getElement());
        }
    };
    return SingleChildContainer;
}();


/**
 * @typedef {mui.SingleChildContainerOptions} mui.CenterOptions
 *
 * Container with content is center
 * @class mui.Center
 * @augments mui.SingleChildContainer
 * @param {mui.CenterOptions} options
 *ta
 */
mui.Center = function(){
    var Center = function(options){
        if(options==null){
            options = {};
        }
        mui.SingleChildContainer.call(this,options);
        this.addClass('mui-center');
    };
    mui.inherits(Center,mui.SingleChildContainer);

    return Center;
}();


/**
 * @typedef BoxOptions
 * @property {string} options.mainAxisAlign (start,end,center)
 * @property {string} options.crossAxisAlign (start,end,center)
 * @typedef {mui.MultipleChildContainer & BoxOptions} mui.Box.BoxOptions
 *
 * Flex box container
 * @class mui.Box
 * @augments mui.MultipleChildContainer
 * @param {mui.Box.BoxOptions} options
 */
mui.Box = function(){
    var Box = function(options){
        if(options==null){
            options = {};
        }
        mui.MultipleChildContainer.call(this,options);
        this.addClass('mui-box');
        if(options['mainAxisAlign']){
            this.addClass('mui-box__main-axis--'+options['mainAxisAlign']);
        }
        if(options['crossAxisAlign']){
            this.addClass('mui-box__cross-axis--'+options['crossAxisAlign']);
        }
    };
    mui.inherits(Box, mui.MultipleChildContainer);


    return Box;
}();

/**
 * @typedef VBoxOptions
 * @property {string} horizontalAlign (left,right,center)
 * @property {string} verticalAlign (top,bottom,center)
 * @typedef {mui.BoxOptions & VBoxOptions} mui.VBoxOptions
 *
 * VBox
 * @class mui.VBox
 * @augments mui.Box
 * @constructor
 * @param {mui.VBoxOptions} options
 *
 */
mui.VBox = function(){
    var HOR_ALIGN = {
        'left':'start',
        'right':'end',
        'center':'center',
    };
    var VER_ALIGN = {
        'top':'start',
        'bottom':'end',
        'middle':'center',
    };
    var VBox = function(options){
        if(options==null){
            options = {};
        }
        if(options['horizontalAlign']) {
            options['crossAxisAlign'] = HOR_ALIGN[options['horizontalAlign']];
        }
        if(options['verticalAlign']) {
            options['mainAxisAlign'] = VER_ALIGN[options['verticalAlign']];
        }
        mui.Box.call(this,options);
        this.addClass('mui-vbox');
    };
    mui.inherits(VBox,mui.Box);
    return VBox;
}();


/**
 *
 * @typedef HBoxOptions
 * @property {string} horizontalAlign (left,right,center)
 * @property {string} verticalAlign (top,bottom,center)
 * @typedef {mui.BoxOptions && HBoxOptions} mui.HBoxOptions
 *
 * HBox
 * @class mui.HBox
 * @augments mui.Box
 * @constructor
 * @param {mui.HBoxOptions} options
 *
 */
mui.HBox = function(){
    var VER_ALIGN = {
        'top':'start',
        'bottom':'end',
        'middle':'center',
    };
    var HOR_ALIGN = {
        'left':'start',
        'right':'end',
        'center':'center',
    };
    var VBox = function(options){
        if(options==null){
            options = {};
        }
        if(options['verticalAlign']) {
            options['crossAxisAlign'] = VER_ALIGN[options['verticalAlign']];
        }
        if(options['horizontalAlign']) {
            options['mainAxisAlign'] = HOR_ALIGN[options['horizontalAlign']];
        }

        mui.Box.call(this,options);
        this.addClass('mui-hbox');

    };
    mui.inherits(VBox,mui.Box);
    return VBox;
}();


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback  mui.Button.Click
 * @param {mui.Button}
 *
 * @typedef {Object} mui.ButtonOptions
 * @property  {string} icon
 * @property  {boolean} isDropdown
 * @property {mui.AbstractMenu.ItemClickCallback} onMenuItemClick
 * @property  {string} label
 * @property  {string} description
 * @property  {function} onClick
 *
 * Button
 *
 * @class mui.Button
 * @param {mui.ButtonOptions} options
 * @augments mui.Element
 *
 */
mui.Button = function(){
    var Button = function(options){
        if(options==null){
            options = {};
        }
        options['type']='button';
        mui.Element.call(this,options);
        this.addClass('mui-button');
        this._onMenuItemClick = options['onMenuItemClick'];
        this._iconE = this.create('mui-button__icon');
        this._labelE = this.create('mui-button__label');
        this._descE = this.create('mui-button__desc');
        this._carretE = this.create('mui-button__caret mui-button__caret-icon');
        this._leftContainer = this.create('mui-button__left-container');
        this._leftContainer.add(this._labelE,this._descE);

        this._iconClass = options['icon'];
        this._isDropDown = options['isDropdown'];
        this._label = options['label'];
        this._desc = options['description'];
        this._onClick = options['onClick'];

        this._clickHandler =function(evt){
            if(this._onClick){
                this._onClick(this);
            }
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        this._update();


    };
    mui.inherits(Button,mui.Element);

    /**
     * @inheritDoc
     */
    Button.prototype.dispose = function(){
        if(this._menu){
            this._menu.dispose();
            this._menu = 0;
        }
        if(this._clickHandler){
            this.getElement().removeEventListener('click',this._clickHandler);
            this._clickHandler = null;
        }
        this.closeMenu();
        this._onMenuItemClick = null;
        this._onClick = null;
        this._leftContainer =  null;
        this._iconE = null;
        this._labelE = null;
        this._descE =null;
        this._carretE = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Close dropdown menu
     * @return {mui.Button}
     */
    Button.prototype.closeMenu = function(){
        if(this._menu){
            mui.Element.closePopup(this._menu);
        }
        return this;
    };


    /**
     * @typedef {object} mui.ShowButtonDropdownOptions
     * @property {string} horizontalAlign left or right
     * @property {string} verticalAlign top or bottom

     * Show dropdown menu
     * @param {mui.IEntityCollection} items
     * @param {mui.ShowButtonDropdownOptions} options
     * @return {mui.Button}
     */
    Button.prototype.showMenu = function(items,options){
        if(options==null)options = {};
        var horAlign = options['horizontalAlign'];
        var verAlign = options['verticalAlign'];

        if(this._menu==null){
            this._menu = new mui.Menu({
                'onItemClick':this._onMenuItemClick
            });
        }
        this._menu.setItems(items);
        mui.Element.showPopupRelativeToElement(this._menu,this.getElement(),horAlign,verAlign);
        return this;
    };
    /**
     * Set Label
     * @param {string} text
     * @return {mui.Button}
     */
    Button.prototype.setLabel = function(text){
        this._label = text;
        this._update();
        return this;
    };

    /**
     * Set description
     * @param {string} text
     * @return {mui.Button}
     */
    Button.prototype.setDescription = function(text){
        this._desc = text;
        this._update();
        return this;
    };

    /**
     * Set icon
     * @param {string} icon
     * @return {mui.Button}
     */
    Button.prototype.setIcon = function(icon){
        this._iconClass = icon;
        this._update();
        return this;
    };

    Button.prototype._update = function(){
        this.clear();
        if(this._iconClass){
            this._iconE.className = 'mui-button__icon '+ this._iconClass;
            this.add(this._iconE);
        }
        if(this._desc) {
            this._descE.textContent = this._desc;
        }
        if(this._label) {
            this._labelE.textContent = this._label;
        }
        if(this._desc || this._label){
            this.add(this._leftContainer);
        }
        if(this._isDropDown){
            this.add(this._carretE);
        }
    };
    return Button;
}();


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.AbstractDropdown.ItemClick
 * @param {*} item
 *
 * @typedef mui.AbstractDropdownOptions
 * @property {mui.IEntityCollection} items
 * @property {mui.AbstractDropdown.ItemClick} onItemClick
 * @property {string} selected
 *
 *
 * Abstract Dropdown
 * @abstract
 * @class mui.AbstractDropdown
 * @augments mui.Element
 * @param {mui.AbstractDropdownOptions} options
 */
mui.AbstractDropdown = function(){
    var AbstractDropdown = function(options){
        if(options==null){
            options = {};
        }
        if(options['type']==null){
            options['type']='button';
        }
        mui.Element.call(this,options);
        this.addClass('mui-dropdown');
        this._onItemClick = options['onItemClick'];
        this.setSelected(options['selected']);
        this._clickHandler = function(evt){
            this.showMenu();
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        this.setItems(options['items']);
    };
    mui.inherits(AbstractDropdown,mui.Element);

    /**
     * @inheritDoc
     */
    AbstractDropdown.prototype.dispose = function(){

        this.getElement().removeEventListener('click',this._clickHandler);
        this._clickHandler = null;
        this._onItemClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Get Items
     * @protected
     * @return {mui.IEntityCollection}
     */
    AbstractDropdown.prototype.getItems = function(){
        throw "must implement";
    };
    /**
     * Set items
     * @protected
     * @param {mui.IEntityCollection} items
     */
    AbstractDropdown.prototype.setItems = function(items){
        throw "must implement";
    };

    /**
     * Set selected
     * @param {*} item
     */
    AbstractDropdown.prototype.setSelected = function(item){
        this._selected = item;
        this.updateDisplay();
    };
    /**
     * Get selected
     * @return {*}
     */
    AbstractDropdown.prototype.getSelected = function(){
        return this._selected;

    };
    AbstractDropdown.prototype._handleMenuItemClick = function(item){
        if(this._onItemClick){
            this._onItemClick(item);
            return;
        }
        this.setSelected(item);
    };

    /**
     * Show dropdown menu
     * @param {Object} options
     * @param {string} horizontalAlign left or right
     * @param {string} verticalAlign top or bottom
     * @return {mui.AbstractDropdown}
     */
    AbstractDropdown.prototype.showMenu = function(options){
        if(options==null)options = {};
        var horAlign = options['horizontalAlign'];
        var verAlign = options['verticalAlign'];

        var menu = this.getMenu();
        menu.onItemClick(this._handleMenuItemClick.bind(this));
        menu.setItems(this.getItems());
        mui.Element.showPopupRelativeToElement(menu,this.getElement(),horAlign,verAlign);
        return this;
    };
    /**
     * @abstract
     * @function
     * @return {mui.AbstractMenu}
     */
    AbstractDropdown.prototype.getMenu = function(){
        throw "must implement";

    };
    /**
     * @abstract
     * @function
     */
    AbstractDropdown.prototype.createDisplay = function(){
        throw "must implement";
    };
    /**
     * Update display
     * @return {mui.AbstractDropdown}
     */
    AbstractDropdown.prototype.updateDisplay = function(){
        this.clear();
        var elm = this.createDisplay();
        elm.classList.add('mui-dropdown__display');
        this.add(elm);
        this._caret = this.create('mui-dropdown__caret-icon');
        this.add(this._caret);
        return this;
    };
    return AbstractDropdown;
}();

/**
 *
 * Dropdown
 * @class mui.Dropdown
 * @augments mui.AbstractDropdown
 * @param {mui.AbstractDropdownOptions } options
 *
 */
mui.Dropdown = function(){
    var Dropdown = function(options){
        mui.AbstractDropdown.call(this,options);
    };
    mui.inherits(Dropdown,mui.AbstractDropdown);
    /**
     * @inheritDoc
     */
    Dropdown.prototype.dispose = function(){
        if(this._menu){
            this._menu.dispose();
            this._menu = null;
        }
        this._items = null;
        mui.AbstractDropdown.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    Dropdown.prototype.getMenu = function(){
        if(this._menu==null) {
            this._menu = new mui.Menu();
        }
        return this._menu;
    };

    /**
     * @inheritDoc
     */
    Dropdown.prototype.getItems = function(){
        return this._items;
    };

    /**
     * @inheritDoc
     */
    Dropdown.prototype.setItems = function(items){
        this._items = items;
    };

    /**
     * @inheritDoc
     */
    Dropdown.prototype.createDisplay = function(){
        var label = this.create('mui-dropdown__label');
        if(this.getSelected()==null){
            label.textContent = ('select...');
            return label;
        }
        label.textContent =  this.getItems().getName(this.getSelected());
        return label;

    };
    return Dropdown;
}();


/**
 * @class mui.ImageDropdown
 * @augments mui.AbstractDropdown
 * @param {mui.AbstractDropdownOptions} options
 *
 */
mui.ImageDropdown = function(){
    var ImageDropdown = function(options){
        mui.AbstractDropdown.call(this,options);
    };
    mui.inherits(ImageDropdown,mui.AbstractDropdown);
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.dispose = function(){
        if(this._menu){
            this._menu.dispose();
            this._menu = null;
        }
        this._items = null;
        mui.AbstractDropdown.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.getMenu = function(){
        if(this._menu==null) {
            this._menu = new mui.ImageMenu();
        }
        return this._menu;
    };
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.getItems = function(){
        return this._items;
    };

    /**
     * @override
     * @param {mui.IImageEntityCollection} items
     */
    ImageDropdown.prototype.setItems = function(items){
        this._items = items;
    };
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.createDisplay = function(){
        var img = this.create('mui-dropdown__image');
        if(this.getSelected()){
            var url =this.getItems().getImage(this.getSelected());
            img.style.backgroundImage ='url("'+url+'")';
        }else{
            img.textContent = 'select...';
        }

        return img;

    };
    return ImageDropdown;
}();


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Checkbox.Click
 * @param {mui.Checkbox}
 *
 * @callback mui.Checkbox.Selected
 * @param {boolean}
 * @param {mui.Checkbox}
 *
 * @typedef mui.CheckboxOptions
 * @property {mui.Checkbox.Selected} onSelected
 * @property {mui.Checkbox.Click} onClick
 * @property {?boolean} horizontal
 * @property {boolean} selected
 * @property {string} label
 *
 * Checkbox
 * @class mui.Checkbox
 * @augments mui.Element
 * @constructor
 * @param {mui.CheckboxOptions} options
 *
 */
mui.Checkbox = function(){
    var Checkbox = function(options){
        if(options==null){
            options = {};
        }
        options['type']='button';
        mui.Element.call(this,options);
        this._onSelected = options['onSelected'];
        this.addClass('mui-checkbox');
        if(options['horizontal']){
            this.addClass('mui-checkbox--hor');
        }
        this.addClass('mui-checkbox');
        this._iconE = this.create('mui-checkbox__icon');

        this.add(this._iconE);

        this._onClick = options['onClick'];

        this._clickHandler =function(evt){
            if(this._onClick){
                this._onClick(this);
                return;
            }
            this.toggleSelected();
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        if(options['selected']){
            this.setSelected(true);
        }
        if(options['label']){
            this.setLabel(options['label']);
        }
    };
    mui.inherits(Checkbox,mui.Element);

    /**
     * @inheritDoc
     */
    Checkbox.prototype.dispose = function(){
        if(this._clickHandler){
            this.getElement().removeEventListener('click',this._clickHandler);
            this._clickHandler = null;
        }
        this._onSelected=null;
        this._onClick =null;
        this._iconE = null;
        this._labelE = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set Selected
     * @param {boolean] }bool
     * @return {mui.Checkbox}
     */
    Checkbox.prototype.setSelected = function(bool){
        if(this._selected===bool)return this;
        this._selected = bool;
        this._iconE.className = 'mui-checkbox__icon '+(bool?'mui-checkbox__icon--selected':'');
        if(bool){
            this.addClass('mui-checkbox--selected');
        }else{
            this.removeClass('mui-checkbox--selected');
        }
        if(this._onSelected){
            this._onSelected(bool,this);
        }
        return this;
    };
    /**
     * Toggle selected
     * @param {boolean} bool
     * @return {mui.Checkbox}
     */
    Checkbox.prototype.toggleSelected = function(bool){
        this.setSelected(!this._selected);
        return this;
    };

    /**
     * Get selected
     * @return {boolean}
     */
    Checkbox.prototype.getSelected = function(){
        return this._selected;

    };

    /**
     * Set label
     * @param {string} text
     * @return {mui.Checkbox}
     */
    Checkbox.prototype.setLabel = function(text){
        if(this._labelE==null) {
            this._labelE = this.create('mui-checkbox__label');
            this.add(this._labelE);
        }
        this._labelE.textContent = text;
        return this;
    };

    return Checkbox;
}();


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.ButtonGroup.ButtonClick
 * @param {}
 *
 * @callback mui.ButtonGroup.ActiveChanged
 * @param {string} id
 * @param {mui.ButtonGroup} source
 *
 * @callback mui.ButtonGroup.SelectedChanged
 * @param {string} id
 * @param {mui.ButtonGroup} source
 *
 *
 * @typedef mui.ButtonGroupOptions
 * @property {mui.IEntityCollection} items
 * @property {mui.ButtonGroup.ButtonClick} onButtonClick
 * @property {mui.ButtonGroup.ActiveChanged} onActiveChanged
 * @property {mui.ButtonGroup.SelectedChanged} onSelectedChanged
 *
 * Button Group
 * @class mui.ButtonGroup
 * @augments mui.Element
 * @param {mui.ButtonGroupOptions} options
 * @constructor
 *
 */
mui.ButtonGroup = function(){
    var ButtonGroup = function(options){
        if(options==null){
            options = {};
        }
        options['type']='button-group';
        mui.Element.call(this,options);
        this._onButtonClick = options['onButtonClick'];
        this._onActiveChanged = options['onActiveChanged'];
        this._onSelectedChanged = options['onSelectedChanged'];
        this._active = [];
        this.addClass('mui-button-group');
        if(options['vertical']){
            this.addClass('mui-button-group--ver');
        }else{
            this.addClass('mui-button-group--hor');
        }
        this.setItems (options['items']);
    };
    mui.inherits(ButtonGroup,mui.Element);

    /**
     * @inheritDoc
     */
    ButtonGroup.prototype.dispose = function(){
        if(this._cachedBtn){
            this._cachedBtn.forEach(function(act){
                act.dispose();
            }.bind(this));
            this._cachedBtn = null;
        }
        this._items = null;
        this._onActiveChanged = null;
        this._onSelectedChanged = null;
        this._onButtonClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    ButtonGroup.prototype._handleBtnClick = function(id){
        if(this._onButtonClick){
            this._onButtonClick(this,id);
            return;
        }
        this.setSelected(id);
    };
    /**
     * Set items
     * @param {mui.EntityCollection} items
     * @reutrn {mui.ButtonGroup}
     */
    ButtonGroup.prototype.setItems = function(items){
        this._items = items;
        var cached = new Map();
        var it = items.getChildren();
        while(it.hasNext()){
            var act = it.next();
            var id = items.getId(act);
            var btn = new mui.Button({
                'label':items.getName(act),
                'icon':items.getIcon(act),
                'className':'mui-button-group__btn',
                'onClick':this._handleBtnClick.bind(this,id)
            });
            if(this._active.indexOf(id)!==-1){
                btn.addClass('mui-button-group__btn--active');
            }
            if(this._selected==id){
                btn.addClass('mui-button-group__btn--selected');
            }
            btn.attachTo(this.getElement());
            cached.set(id,btn);
        }
        this._cachedBtn = cached;
        return this;
    };
    /**
     * Get Active
     * @return {Array.<string>}
     */
    ButtonGroup.prototype.getActive = function(){
        return this._active.slice(0);
    };
    /**
     * Get selected
     * @return {?string}
     */
    ButtonGroup.prototype.getSelected = function(){
        return this._selected;
    };
    /**
     * Set selected
     * @param {string} id
     * @return {mui.ButtonGroup}
     */
    ButtonGroup.prototype.setSelected = function(id){
        if(this._selected===id)return this;
        if(this._cachedBtn && this._cachedBtn.get(this._selected)){
            this._cachedBtn.get(this._selected).removeClass('mui-button-group__btn--selected');
        }
        this._selected = id;
        if(this._cachedBtn && this._cachedBtn.get(id)){
            this._cachedBtn.get(id).addClass('mui-button-group__btn--selected');
        }
        if(this._onSelectedChanged){
            this._onSelectedChanged(id,this);
        }
        return this;
    };
    /**
     * Toggle active
     * @param {string} id
     * @return {mui.ButtonGroup}
     */
    ButtonGroup.prototype.toggleActive = function(id){
        var idx =this._active.indexOf(id);
        if(idx!==-1){
            this._active.splice(idx,1);
            if(this._cachedBtn&& this._cachedBtn.get(id)){
                this._cachedBtn.get(id).removeClass('mui-button-group__btn--active');
            }
        }else{
            this._active.push(id);
            if(this._cachedBtn&& this._cachedBtn.get(id)){
                this._cachedBtn.get(id).addClass('mui-button-group__btn--active');
            }
        }
        if(this._onActiveChanged){
            this._onActiveChanged(id,this);
        }
    };
    return ButtonGroup;
}();


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.RadioGroup.Changed
 * @param {string} id
 *
 *@typedef  mui.RadioGroupOptions
 * @property {boolean} vertical
 * @property {mui.IEntityCollection} items
 * @property {mui.RadioGroup.Changed} onChanged
 *
 * RadioGroup
 * @class mui.RadioGroup
 * @augments mui.Element
 * @param { mui.RadioGroupOptions} options
 *
 */
mui.RadioGroup = function(){
    var RadioGroup = function(options){
        if(options==null){
            options = {};
        }
        mui.Element.call(this,options);
        this._onChanged = options['onChanged'];
        this.addClass('mui-radio-group');
        if(options['vertical']){
            this.addClass('mui-radio-group--ver');
        }else{
            this.addClass('mui-radio-group--hor');
        }
        this.setItems (options['items']);
    };
    mui.inherits(RadioGroup,mui.Element);

    /**
     * @inheritDoc
     */
    RadioGroup.prototype.dispose = function(){
        if(this._cachedBtn){
            this._cachedBtn.forEach(function(act){
                act.dispose();
            }.bind(this));
            this._cachedBtn = null;
        }
        this._onChanged = null;
        this._onButtonClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    RadioGroup.prototype._handleBtnClick = function(id){
        if(this._onButtonClick){
            this._onButtonClick(this,id);
            return;
        }
        this.setActive(id);
    };
    /**
     * Set Items
     * @param {mui.IEntityCollection} items
     * @return {mui.RadioGroup}
     */
    RadioGroup.prototype.setItems = function(items){
        this._items = items;
        var it = items.getChildren();
        var cached = new Map();
        var frag = document.createFrag();
        while(it.hasNext()) {
            var act = it.next();
            var id = items.getId(act);
            this.create({'className':'mui-radio-group__btn','type':'button'}).add(

            )

            var btn = new mui.Button({
                'label': items.getName(act),
                'icon': this._selected ===id ? 'mui-radio-group__btn-icon-selected' : 'mui-radio-group__btn-icon-empty',
                'className': 'mui-radio-group__btn ' + (this._selected === id ? 'mui-radio-group__btn--selected' : ''),
                'onClick': this._handleBtnClick.bind(this, id)
            });
            btn.attachTo(this.getElement());
            cached.set(id, btn);
        }
        this._cachedBtn = cached;
    };

    /**
     * Set Active
     * @param {string} id
     * @return {mui.RadioGroup}
     */
    RadioGroup.prototype.setActive = function(id){
        if(this._selected===id)return;
        if(this._cachedBtn && this._cachedBtn.get(this._selected)){
            this._cachedBtn.get(this._selected).setIcon('mui-radio-group__btn-icon-empty');
            this._cachedBtn.get(this._selected).removeClass('mui-radio-group__btn--selected');

        }
        this._selected = id;
        if(this._cachedBtn && this._cachedBtn.get(id)) {
            this._cachedBtn.get(id).setIcon('mui-radio-group__btn-icon-selected');
            this._cachedBtn.get(id).addClass('mui-radio-group__btn--selected');
        }
        if(this._onChanged){
            this._onChanged(id);
        }
        return this;
    };
    return RadioGroup;
}();


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @typedef {Object} mui.TextFieldOptions
 * @property  {?function} onRightIconClick
 * @property {?function} onLeftIconClick
 * @property {?boolean} multiline
 * @property {?string} placeholder
 * @property {?function} onInput
 * @property {?string} leftIcon
 * @property {?string} rightIcon
 * @property {?string} value
 *
 *Text Field interface.
 *
 * @class mui.TextField
 * @augments mui.Element
 * @param {mui.TextFieldOptions} options
 *
 */
mui.TextField = function(){
    var TextField =function(options){
        if(options==null)options =  {};
        mui.Element.call(this,options);
        this.addClass('mui-text');
        this._onLeftIconClick = options['onLeftIconClick'];
        this._onRightIconClick = options['onRightIconClick'];
        this._textContainer = this.create('mui-text__input-container');
        this._input = this.create({'type':options['multiline']?'textarea':'input','className':'mui-text__input'});
        this._rightContainer = this.create('mui-text__right-container');
        this._textContainer.add(this._input,this._rightContainer);
        this.add(this._textContainer);

        if(options['placeholder']) {
            this._input.setAttribute('placeholder', options['placeholder']);
        }
        if(options['onInput']){
            this._inputHandler = options['onInput'];
            this._input.addEventListener('input',this._inputHandler);
        }
        if(options['leftIcon']){
            this.setLeftIcon(options['leftIcon']);
        }
        if(options['rightIcon']){
            this.setRightIcon(options['rightIcon']);
        }
        if(options['value']){
            this.setValue(options['value']);
        }
    };
    mui.inherits(TextField,mui.Element);

    /**
     * @inheritDoc
     */
    TextField.prototype.dispose = function(){
        if(this._rightIconClickHandler) {
            this._rightIconE.removeEventListener('click', this._rightIconClickHandler);
            this._rightIconClickHandler = null;
        }
        if(this._leftIconClickHandler) {
            this._leftIconE.removeEventListener('click', this._leftIconClickHandler);
            this._leftIconClickHandler = null;
        }
        if(this._inputHandler){
            this._input.removeEventListener('input',this._inputHandler);
            this._inputHandler = null;
        }
        this._onRightIconClick = null;
        this._onLeftIconClick = null;
        this._assisstiveIconE = null;
        this._assistiveTextE = null;
        this._rightIconE = null;
        this._rightContainer = null;
        this._input = null;
        this._textContainer =  null;
        this._onLeftIconClick = null;
        this._onRightIconClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    TextField.prototype._handleLeftIconClick = function(evt) {
        if(this._onLeftIconClick) {
            this._onLeftIconClick();
        }
    };

    TextField.prototype._handleRightIconClick = function(evt) {
        if(this._onRightIconClick) {
            this._onRightIconClick();
        }
    };

    /**
     * Set value
     * @param {string} text
     * @return {mui.TextField}
     */
    TextField.prototype.setValue = function(text){
        this._input.value = text;
        return this;
    };
    /**
     * Get value
     * @return {string}
     */
    TextField.prototype.getValue = function(){
        return this._input.value;
    };


    /**
     * Set left icon
     * @param {string} leftIcon
     * @return {mui.TextField }
     */
    TextField.prototype.setLeftIcon = function(icon){
        if(this._leftIconE==null){
            this._leftIconE = this.create({'type':'button','className':'mui-text__left-icon'});
            this._leftIconClickHandler = this._handleLeftIconClick.bind(this);
            this._leftIconE.addEventListener('click', this._leftIconClickHandler);

        }
        this._leftIconE.className = 'mui-text__left-icon '+icon;
        if(this._leftIconE.parentNode==null){
            this._textContainer.add(this._leftIconE);
        }
        this._input.classList.add("mui-text__left-icon--visible");
        return this;
    };

    /**
     * Hide left icon
     * @return {mui.TextField}
     */
    TextField.prototype.hideLeftIcon = function(){
        if(this._leftIconE==null)return this;
        this._input.classList.remove("mui-text__left-icon--visible");
        this._leftIconE.removeFromParent();
        return this;

    };
    /**
     * Set placeholder text
     * @param {string} placeholder
     * @return {mui.TextField}
     */
    TextField.prototype.setPlaceHolderText = function(placeHolder){
        this._input.setAttribute('placeholder', placeHolder);
        return this;
    };


    /**
     * Set right icon
     * @param {string} rightIcon
     * @return {mui.TextField}
     */
    TextField.prototype.setRightIcon = function(icon){
        if(this._rightIconE==null){
            this._rightIconE = this.create({'type':'button','className':'mui-text__right-icon'});
            this._rightIconClickHandler = this._handleRightIconClick.bind(this);
            this._rightIconE.addEventListener('click', this._rightIconClickHandler);

        }
        this._rightIconE.className = 'mui-text__right-icon '+icon;
        if(this._rightIconE.parentNode==null){
            this._rightContainer.add(this._rightIconE);
        }
        this._input.classList.add("mui-text__right-icon--visible");
        return this;
    };
    /**
     * Hide right icon
     * @return {mui.TextField}
     */
    TextField.prototype.hideRightIcon = function(){
        if(this._rightIconE==null)return this;
        this._rightIconE.removeFromParent();
        this._input.classList.remove("mui-text__right-icon--visible");
        return this;
    };

    /**
     * Set assistive text
     * @param {string} text
     * @return {mui.TextField}
     */
    TextField.prototype.setAssistiveText = function(icon,message){
        if(this._assisstiveIconE==null){
            this._assisstiveIconE = this.create('mui-text__assistive-icon');
        }
        if(icon){
            this._assisstiveIconE.className = 'mui-text__assistive-icon '+icon;
        }
        if(this._assisstiveIconE.parentNode==null){
            this._rightContainer.insertBefore(this._assisstiveIconE,this._rightContainer.lastChild);
        }
        this._input.classList.add("mui-text__assistive-icon--visible");
        if(this._assistiveTextE ==null){
            this._assistiveTextE = this.create('mui-text__assistive-text');
        }
        if(this._assistiveTextE.parentNode==null){
            this.add(this._assistiveTextE);
        }
        this._assistiveTextE.textContent = message;
        this.addClass("mui-text__assistive-text--visible");
        return this;
    };
    /**
     * Hide assistive text
     * @return {mui.TextField}
     */
    TextField.prototype.hideAssistiveText = function(){
        if(this._assistiveTextE==null)return this;
        this._assistiveTextE.removeFromParent();
        this.removeClass("mui-text__assistive-text--visible");
        return this;
    };

    /**
     * Set error
     * @param {string} message
     * @return {mui.TextField}
     */
    TextField.prototype.setError = function(message){
        this.setAssistiveText('mui-text__error-icon',message);
        this.addClass('mui-text--error');
        return this;
    };

    /**
     * Remove error
     * @return {mui.TextField}
     */
    TextField.prototype.hideError = function(){
        this.hideAssistiveText();
        if(this._assisstiveIconE){
            this._assisstiveIconE.removeFromParent();
        }
        this.removeClass('mui-text--error');
        return this;
    };
    return TextField;
}();


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Number.Changed
 *
 * @typedef mui.NumberOptions
 * @property {mui.Number.Changed} onChanged
 * @property {boolean} showControlButton
 * @property {string} placeholder
 * @property {number} value
 * @property {number} step
 * @property {function} onWillChange
 *
 * Number control
 * @constructor
 * @class mui.Number
 * @constructor
 * @augments mui.Element
 * @param {mui.NumberOptions} options
 *
 */
mui.Number = function(){
    var Number = function(options){
        mui.Element.call(this,options);
        this._showControlButtons = options['showControlButton']!=null?options['showControlButton']:true;
        this._onChanged = options['onChanged'];
        this.addClass('mui-number');
        this._inputE = this.create({'type':'input','className':'mui-number__input'});
        this._value =options['value'];
        if(options['placeholder']){
            this._inputE.setAttribute('placeholder',options['placeholder']);
        }
        this._incrE = this.create({'type':'button','className':'mui-number__incr mui-number__incr-icon'});
        this._decrE = this.create({'type':'button','className':'mui-number__decr mui-number__decr-icon'});
        this._step = Math.abs(options['step']|| 1);
        this._incrClickHandler = function(evt){
            if(options['onWillChange']){
                evt =new mui.Event(this,null,evt);
                options['onWillChange'](evt);
                if(evt.isStopped()){
                    return;
                }
            }
            this.setValue(this._value+this._step);
        }.bind(this);
        this._decrClickHandler = function(evt){
            if(options['onWillChange']){
                evt =new mui.Event(this,null,evt);
                options['onWillChange'](evt);
                if(evt.isStopped()){
                    return;
                }
            }
            this.setValue(this._value-this._step);
        }.bind(this);
        this._inputHandler = function(evt){
            this.setValue(this._inputE.value);
        }.bind(this);
        this._inputE.addEventListener('input',this._inputHandler);
        this._incrE.addEventListener('click',this._incrClickHandler);
        this._decrE.addEventListener('click',this._decrClickHandler);
        this.setValue(options['value']);
        this.update();

    };
    mui.inherits(Number,mui.Element);
    /**
     * @inheritDoc
     */
    Number.prototype.dispose = function(){
        this._incrE.removeEventListener('click',this._incrClickHandler);
        this._decrE.removeEventListener('click',this._decrClickHandler);
        this._incrClickHandler = null;
        this._decrClickHandler = null;
        this._onChanged = null;
        this._incrE=null;
        this._decrE = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Enable Controls
     * @param {boolean} bool
     * @return {mui.Number}
     */
    Number.prototype.enableControls = function(bool){
        this._showControlButtons = bool;
        this.update();
        return this;
    };
    /**
     * Set value
     * @param {number} val
     * @return {mui.Number}
     */
    Number.prototype.setValue = function(val){
        var num=+val;
        if(isNaN(num) && val!=='-'){
            num = this._value?this._value:0;
            this._value =num;
            this._inputE.value = num;
        }else{
            this._value = num;
            this._inputE.value = val;
        }
        if(this._onChanged){
            this._onChanged();
        }
        return this;

    };

    /**
     * Get Value
     * @return {number}
     */
    Number.prototype.getValue = function(){
        return this._value;
    };

    /**
     * Update
     * @return {mui.Number}
     */
    Number.prototype.update =function(){
        this.clear();
        if(this._showControlButtons){
            this.add(this._decrE);
        }
        this._inputE.value = this._value;
        this.add(this._inputE);
        if(this._showControlButtons){
            this.add(this._incrE);
        }
        return this;
    };

    return Number;
}();


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.ColorPickerEditor.Changed
 * @pram {string} color
 *
 * @typedef mui.ColorPickerEditorOptions
 * @param {mui.ColorPickerEditor.Changed} onChanged
 *
 * Color Picker editor
 * @constructor
 * @class mui.ColorEditor
 * @augments mui.Element
 * @param {mui.ColorPickerEditorOptions} options
 *
 */
mui.ColorEditor = function(){
    var ColorEditor = function(options){
        if(options==null){
            options = {};
        }
        mui.Element.call(this,options);
        this.addClass('mui-color-editor');

        this._onChanged = options['onChanged'];
        var _pickerBtn = this.create();

        this.add(_pickerBtn);
        var _picker = Pickr.create({
            'el': _pickerBtn,
            'useAsButton':true,
            'inline':true,
            'autoReposition':false,
            'showAlways':true,
            'container':this.getElement(),
            'theme': 'monolith', // or 'monolith', or 'nano',
            'swatches': [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],
            'components': {
                // Main components
                'preview': true,
                'opacity': true,
                'hue': true,

                // Input / output Options
                'interaction': {
                    'input': true,
                    'clear': false,
                    'save': false
                }
            }
        });
        this._changeHandler = function(evt){
            if(  this._onChanged ){
                var color =evt['toRGBA']().toString();
                this._onChanged (color);
            }
            // console.log(evt);
        }.bind(this);
        this._swatchSelectHandler = function(evt){
            // console.log(evt);
        }.bind(this);
        this._saveHandler = function(evt){
            // console.log(evt);
            var color =evt['toRGBA']().toString();
            _picker['addSwatch'](color);
        }.bind(this);
        _picker.on("change",this._changeHandler);
        _picker.on("swatchselect",this._swatchSelectHandler);
        _picker.on("save",this._saveHandler);
        this._picker = _picker;
        _pickerBtn.style.display='none';


        // _picker['getRoot']()['app'].appendChild(_pickerBtn);
    };
    mui.inherits(ColorEditor,mui.Element);
    /**
     * @inheritDoc
     */
    ColorEditor.prototype.dispose = function(){
        this._picker.off("change",this._changeHandler);
        this._picker.off("swatchselect",this._swatchSelectHandler);
        this._picker.off("save",this._saveHandler);
        this._changeHandler =null;
        this._onChanged = null;
        this._swatchSelectHandler = null;
        this._saveHandler = null;
        this._onChanged = null;
        this._picker['destroy']();
        this._picker = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set Changed Callback
     * @param {mui.ColorPickerEditor.Changed} fn
     * @return {mui.ColorPickerEditor}
     */
    ColorEditor.prototype.onChanged = function(fn){
        this._onChanged = fn;
        return this;

    };
    /**
     * Get color
     * @return {string}
     */
    ColorEditor.prototype.getColor = function(){
        return this._picker.getColor();
    };

    /**
     * Set Color
     * @param {string} color
     * @return {mui.ColorPickerEditor}
     */
    ColorEditor.prototype.setColor = function(color){
        if(color==null){
            color = 'black';
        }
        this._picker.setColor(color,true);
        return this;
    };
    return ColorEditor;
}();


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.ColorPicker.Click
 * @param {}
 * @callback mui.ColorPicker.ColorSelected
 * @param {}
 * @callback mui.ColorPicker.Changed
 * @param {}
 *
 * @typedef mui.ColorPickerOptions
 * @property {mui.ColorPicker.Click} onClick
 * @property {mui.ColorPicker.ColorSelected} onColorSelected
 * @property {mui.ColorPicker.Changed} onChanged
 * @property {string} color
 *
 *
 * Color Picker
 * @constructor
 * @class mui.ColorPicker
 * @augments mui.Element
 * @param {mui.ColorPickerOptions} options
 *
 */
mui.ColorPicker = function(){
    var _picker,_pickerBtn;
    var ColorPicker = function(options){
        if(options==null){
            options = {};
        }
        options['type'] = 'button';
        mui.Element.call(this,options);
        this.addClass('mui-colorpicker');
        this._onChanged = options['onChanged'];
        this._onColorSelected = options['onColorSelected'];
        this._transImg = this.create("mui-colorpicker__trans-img");
        this._bgContainer = this.create("mui-colorpicker__bg");
        this.add(this._transImg,this._bgContainer);
        this._onClick = options['onClick'];
        this._clickHandler = function(evt){
            if(this._onClick){
                this._onClick();
                return;
            }
            this.toggle();
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        if(options['color']){
            this.setColor(options['color']);
        }
    };
    mui.inherits(ColorPicker,mui.Element);
    /**
     * @inheritDoc
     */
    ColorPicker.prototype.dispose = function(){
        this._removeEvtPicker();
        if(this._clickHandler) {
            this.getElement().removeEventListener('click', this._clickHandler);
            this._clickHandler = null;
        }

        this._onColorSelected = null;

        this._onClick = null;
        this._transImg = null;
        this._onChanged = null;
        this._bgContainer = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Check if picker editor is open
     * @return {boolean}
     */
    ColorPicker.prototype.isOpen = function(){
        return _picker && _picker.getElement().parentNode;
    };

    /**
     * Open editor
     * @return {mui.ColorPicker}
     */
    ColorPicker.prototype.open = function() {
        if (this.isOpen()) return this;
        if (_picker == null) {
            _picker = new mui.ColorEditor();
        }
        _picker.onChanged(function(color){
            if(this._onColorSelected){
                this._onColorSelected(color);
                return;
            }
            this.setColor(color);
        }.bind(this));
        _picker.setColor(this._color);
        mui.Element.showPopupRelativeToElement(_picker, this.getElement(), 'left', 'bottom', 'right');
        return this;
    };

    /**
     * Close editor
     */
    ColorPicker.prototype.close = function(){
        if(!this.isOpen())return this;
        mui.Element.closePopup(_picker);
        return this;

    };
    /**
     * Toggle editor
     * @return {mui.ColorPicker }
     */
    ColorPicker.prototype.toggle = function(){

        if(this.isOpen()){
            this.close();
        }else{
            this.open();
        }
        return this;
    };
    /**
     * Get Color
     * @return {string}
     */
    ColorPicker.prototype.getColor = function(){
        return this._color;
    };
    /**
     * Set Color
     * @param {string} color
     * @return {mui.ColorPicker}
     */
    ColorPicker.prototype.setColor = function(color){
        this._color = color;
        this._bgContainer.style.background= color;
        if(this._onChanged){
            this._onChanged(color);
        }
        return this;
    };
    return ColorPicker;
}();


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.DateTimePicker.Click
 * @param {mui.DateTimePicker}
 *
 * @typedef mui.DateTimePickerOptions
 * @property {mui.DateTimePicker.Click} onClick
 * @property {string} date
 *
 * Date time Picker
 * @constructor
 * @class mui.DateTimePicker
 * @augments mui.Element
 * @param {mui.DateTimePickerOptions} options
 *
 */
mui.DateTimePicker = function(){
    var _input,_picker;

    var DateTimePicker = function(options){
        mui.Element.call(this,options);
        this.addClass('mui-datetime-picker');
        this._onClick = options['onClick'];
        this._input = this.create({'type':'input','className':'mui-datetime-picker__input flatpickr '});
        this.add(this._input);
        this._clickHandler = function(evt){
            if(this._onClick){
                this._onClick(this);
                return;
            }
            this.toggle();
        }.bind(this);
        this._input.addEventListener('click',this._clickHandler);
        if(options['date']){
            this.setDate(options['date']);
        }
    };
    mui.inherits(DateTimePicker,mui.Element);

    /**
     * @inheritDoc
     */
    DateTimePicker.prototype.dispose = function(){
        if(this._clickHandler) {
            this._input.removeEventListener('click', this._clickHandler);
            this._clickHandler = null;
        }
        this._onClick = null;
        this._input = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Toggle editor
     * @return {mui.DateTimePicker}
     */
    DateTimePicker.prototype.toggle = function(){
        if(this.isOpen()){
            this.close();
        }else{
            this.open();
        }
        return this;
    };

    /**
     * If editor is open
     * @return {bool}
     */
    DateTimePicker.prototype.isOpen = function(){
        return _picker && _picker['isOpen'];
    };
    /**
     * Open editor
     * @return {mui.DateTimePicker}
     */
    DateTimePicker.prototype.open = function(){
        if(this.isOpen())return this;
        if(_picker==null){
            _input = this.create( {'type':'input'});
            _picker = flatpickr(_input, {});
        }
        _picker['setDate'](this._value);
        _picker['open'](null,this._input);
        this._subscribeEvtPicker();
        return this;
    };
    /**
     * Close Editor
     * @return {mui.DateTimePicker}
     */
    DateTimePicker.prototype.close = function(){
        if(!this.isOpen())return this;
        this._removeEvtPicker();
        _picker['close']();
        return this;
    };
    DateTimePicker.prototype._subscribeEvtPicker = function(){
        if(this._closeHandler)return;
        this._closeHandler = function(arrDates,dateStr,picker){
            this.setDate(arrDates[0]);
            this._removeEvtPicker();
        }.bind(this);
        _picker['config']['onClose'].push(this._closeHandler);
    };
    DateTimePicker.prototype._removeEvtPicker = function(){
        var idx;
        if(this._closeHandler){
            idx = _picker['config']['onClose'].indexOf(this._closeHandler);
            _picker['config']['onClose'].splice(idx,1);
            this._closeHandler = null;
        }

    };

    /**
     * Get date
     * @return {string}
     */
    DateTimePicker.prototype.getDate = function(){
        return this._value;

    };
    /**
     * Set date
     * @param {string} date
     * @return {mui.DateTimePicker}
     */
    DateTimePicker.prototype.setDate = function(date){
        var dateObj = _picker.parseDate(date);
        this._value = dateObj?date:null;
        this._input.value =this._value? (new Date(this._value)).toString():'';
        return this;
    };
    return DateTimePicker;
}();


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 *
 * @typedef mui.AbstractCardOptions
 * @property {?mui.IEntityCollection} headerSettingItems
 * @property {?mui.IEntityCollection} footerSettingItems
 * @property {mui.AbstractMenu.ItemClickCallback} onHeaderSettingItemClick
 * @property {mui.AbstractMenu.ItemClickCallback} onFooterSettingItemClick
 * @property {?string} headerIcon
 * @property {?boolean} bodyVisible
 * @property {?boolean} footerVisible
 * @property {?boolean} footerSettingsVisible
 * @property {?boolean} headerSettingsVisible
 * @property {?string} titled
 * @property {?string} titleDescription
 * @property {?mui.IEntityCollection} footerActions
 * @property {?mui.IEntityCollection} headerActions
 *
 *
 *
 * Abstract Card
 * @abstract
 * @class mui.AbstractCard
 * @augments mui.Element
 * @param {mui.AbstractCardOptions} options
 *
 */
mui.AbstractCard = function(){
    var AbstractCard = function(options){
        if(options==null){
            options = {};
        }
        this._headerSettingItems = options['headerSettingItems'];
        this._footerSettingItems = options['footerSettingItems'];
        this._onHeaderSettingItemClick = options['onHeaderSettingItemClick'];
        this._onFooterSettingItemClick = options['onFooterSettingItemClick'];

        mui.Element.call(this,options);
        this.addClass('mui-card');

        this._primaryTitle = this.create('mui-card__primary-title');
        this._secondTitle = this.create('mui-card__second-title');
        this._headerActionsE = this.create('mui-card__header-actions');
        this._header =this.create("mui-card__header").add(
            options['headerIcon']?this.create('mui-card__header-icon '+options['headerIcon']):null,
            this.create('mui-card__header-body').add(
                this._primaryTitle,this._secondTitle
            ),
            this._headerActionsE
        );


        if(options['bodyVisible']) {
            this._body = this.create('mui-card__body');
            this._body.style.backgroundImage='url("alt_holder.svg")';
        }
        if(options['footerVisible']) {
            this._footer = this.create('mui-card__footer');
        }

        this._footerSettingVisible = options['footerSettingsVisible'];
        this._headerSettingsVisible = options['headerSettingsVisible'];

        this.doLayout({
            'header':this._header,
            'body':this._body,
            'footer':this._footer
        });
        if(options['title']){
            this.setTitle(options['title']);
        }
        if(options['titleDescription']){
            this.setTitleDescription(options['titleDescription']);
        }
        if(options['footerActions']) {
            this.setFooterActions(options['footerActions']);
        }
        this.setHeaderActions(options['headerActions']);

        this._clickHandler = function(evt){
            var found;
            if(options['onHeaderSettingItemClick']){
                found = this.closest(evt.target,'mui-card__header-settings');
                if(found){
                    this.openHeaderSettings();
                    return;
                }
            }
            if(options['onFooterSettingItemClick']){
                found = this.closest(evt.target,'mui-card__footer-settings');
                if(found){
                    this.openFooterSettings();
                    return;
                }
            }

        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);


    };
    mui.inherits(AbstractCard,mui.Element);

    /**
     * @inheritDoc
     */
    AbstractCard.prototype.dispose = function(){
        this.getElement().removeEventListener('click',this._clickHandler);
        this._headerActions = null;
        this._footerActions = null;

        this._clickHandler =null;
        this._headerSettingBtn = null;
        this._footerSettingBtn=null;


        this._headerSettingItems = null;
        this._footerSettingItems = null;
        this._onHeaderSettingItemClick = null;
        this._onFooterSettingItemClick = null;
        this._primaryTitle =null;
        this._secondTitle = null;
        this._headerActionsE = null;
        this._header =null;
        this._body = null;
        this._footer =null;
        this._footerSettingVisible =null;
        this._headerSettingsVisible = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set header icon
     * @param {string} icon
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setHeaderIcon =function(icon){
        this._header.childNodes[0].className='mui-card__header-icon '+icon;
        return this;
    };
    /**
     * Set header actions
     * @param {mui.IEntityCollection} actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setHeaderActions =function(actions){
        this._headerActions = actions;
        this.updateHeaderActions();
        return this;
    };
    var _menu=null;
    /**
     * Open header setting menu
     * @param {?mui.IEntityCollection} actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.openHeaderSettings =function(actions){
        if(_menu ==null){
            _menu = new mui.Menu({});
        }
        _menu.setItems(actions?actions:this._headerSettingItems);
        _menu.onItemClick(this._onHeaderSettingItemClick);
        mui.Element.showPopupRelativeToElement(_menu,this._headerSettingBtn,'right','bottom');
        return this;

    };
    /**
     * Open footer setting menu
     * @param {?mui.IEntityCollection} actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.openFooterSettings =function(actions){
        if(_menu ==null){
            _menu = new mui.Menu({});
        }
        _menu.setItems(this._footerSettingItems);
        _menu.onItemClick(this._onFooterSettingItemClick);
        mui.Element.showPopupRelativeToElement(_menu,this._footerSettingBtn,'right','bottom');
        return this;
    };

    /**
     * Update header actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.updateHeaderActions =function(){
        var frag = document.createFrag();
        if(this._headerActions) {
            var it = this._headerActions.getChildren();
            while (it.hasNext()) {
                var act = it.next();
                var id = this._headerActions.getId(act);
                var icon = this._headerActions.getIcon(act);
                var name = this._headerActions.getName(act);
                var actE = this.create({'type': 'button', 'className': 'mui-card__header-action'}).add(
                    icon ? this.create('mui-card__action-icon ' + icon) : null,
                    name ? this.create({'className': 'mui-card__action-label', 'text': name}) : null
                );
                actE.__id = id;
                frag.add(actE);
            }
        }
        if(this._headerSettingsVisible){
            this._headerSettingBtn =this.create('mui-card__header-settings');
            frag.add(this._headerSettingBtn);
        }
        this._headerActionsE.clear().add(frag);
        return this;
    };
    /**
     * Update footer actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.updateFooterActions =function(){
        var it = this._footerActions.getChildren();
        var frag = document.createFrag();
        while(it.hasNext()){
            var act = it.next();
            var id = this._footerActions.getId(act);
            var icon = this._footerActions.getIcon(act);
            var name = this._footerActions.getName(act);
            var actE = this.create({'type':'button','className':'mui-card__footer-action'}).add(
                icon?this.create('mui-card__action-icon '+icon):null,
                name?this.create({'className':'mui-card__action-label','text':name}):null
            );
            actE.__id = id;
            frag.add(actE);
        }
        if(this._footerSettingVisible){
            this._footerSettingBtn =this.create('mui-card__footer-setting');
            frag.add(this._footerSettingBtn);
        }
        this._footer.clear().add(frag);
        return this;
    };

    /**
     * Set footer actions
     * @param {mui.IEntityCollection} actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setFooterActions =function(actions){
        this._footerActions = actions;
        this.updateFooterActions();
        return this;
    };

    /**
     * Do layout
     * @protected
     * @abstract
     * @function
     */
    AbstractCard.prototype.doLayout =function(){
        throw "Must implement";
    };


    /**
     * Set title description
     * @param {string} txt
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setTitleDescription =function(txt){
        this._secondTitle.textContent =txt;
        return this;
    };
    /**
     * Set title
     * @param {string} txt
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setTitle =function(txt){
        this._primaryTitle.textContent = txt;
        return this;

    };
    return AbstractCard;
}();

/**
 * @typedef {mui.AbstractCardOptions & {headerFirst: boolean}} mui.CardOptions
 *
 * @class mui.Card
 * @augments mui.AbstractCard
 * @param {mui.CardOptions} options
 */
mui.Card = function(){
    var VCard = function(options){
        if(options==null){
            options = {};
        }
        this._headerFirst = options['headerFirst'];
        mui.AbstractCard.call(this,options);
        this.addClass('mui-card--ver');

    };
    mui.inherits(VCard,mui.AbstractCard);

    /**
     * @inheritDoc
     */
    VCard.prototype.doLayout = function (components) {
        if(this._headerFirst){
            this.add(components['header'],components['body'],components['footer']);
        }else {
            this.add(components['body'], components['header'], components['footer']);
        }
    };
    return VCard;
}();


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 *
 * Content container
 * @constructor
 * @class mui.Content
 * @augments mui.AbstractSingleChildContainer
 * @param {mui.AbstractSingleChildContainerOptions} options
 *
 */
mui.Content = function(){
    var Content = function(options){
        mui.AbstractSingleChildContainer.call(this,options);
        this.addClass('mui-content');
    };
    mui.inherits(Content, mui.AbstractSingleChildContainer);

    /**
     * @inheritDoc
     */
    Content.prototype.dispose = function(){
        this.setContent(null);
        if(this._notification) {
            this._notification.detach();
            this._notification.dispose();
            this._notification = null;
        }
        mui.SingleChildContainer.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    Content.prototype.setChild = function(child){
        this.detachAllChildren();
        if(child){
            child.attachTo(this.getElement());
        }
        return this;
    };
    /**
     * Set loading state
     * @param {string} message
     * @return {mui.Content}
     */
    Content.prototype.setLoading = function(message){
        this.showMessage(message,'mui-content__loading-icon');
        return this;
    };

    /**
     * Set error state
     * @param {string} message
     * @return {mui.Content}
     */
    Content.prototype.setError = function(message){
        this.showMessage(message,'mui-content__error-icon');
        return this;
    };

    /**
     * Hide message
     * @return {mui.Content}
     */
    Content.prototype.hideMessage = function(){
        this.setChild(this._content);
        this.removeClass('mui-content--notification-visible');
        return this;
    };

    /**
     * Show message
     * @param {string} message
     * @param {string} icon
     * @return {mui.Content}
     */
    Content.prototype.showMessage = function(message,icon){
        if(this._notification==null){
            this._notification = new mui.Element({
                'className':'mui-notification'
            });
            this._notificationIcon = this.create();
            this._notificationMessage = this.create('mui-notification__message');
            this._notification.add(this._notificationIcon,this._notificationMessage);
        }
        if(icon==null){
            icon = 'mui-content__info';
        }
        this._notificationIcon.className = 'mui-notification__icon '+icon;
        this._notificationMessage.textContent = message;
        this.addClass('mui-content--notification-visible');
        this.setChild(this._notification);
        return this;

    };
    return Content;
}();


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.AbstractMenu.ItemClickCallback
 * @param {mui.IEntity} item
 *
 * @typedef {Object} mui.AbstractMenuOptions
 * @property  {?mui.IEntityCollection} items
 * @property  {?mui.IEntity} parentEntity
 * @property  {mui.AbstractMenu.ItemClickCallback} onItemClick

 * Abstract Menu
 * @abstract
 * @class {mui.AbstractMenu}
 * @augments mui.Element
 * @param {mui.AbstractMenuOptions} options
 */
mui.AbstractMenu = function(){
    var AbstractMenu = function(options){
        if(options==null)options = {};
        mui.Element.call(this,options);
        this.addClass('mui-menu');
        this._ul = this.create({'type':'ul','className':'mui-menu__item-container'});
        this.add(this._ul);
        this._items = options['items'];
        this._parentEntity = options['parentEntity'];
        this._onItemClick = options['onItemClick'];
        this.setItems(options['items']);
        this._liClickHandler =function(evt){
            var found =this.closest(evt.target,'mui-menu__item');
            if(found==null){
                return;
            }
            var item = this._cachedItems.get(found.__id);
            var stop = this.handleItemClick(found.__id,item,found,evt);
            if(stop===false)return;
            this.triggerItemClick(item);
        }.bind(this);
        this.getElement().addEventListener('click',this._liClickHandler);
    };
    mui.inherits(AbstractMenu,mui.Element);

    /**
     * @inheritDoc
     */
    AbstractMenu.prototype.dispose = function(){

        this.getElement().removeEventListener('click',this._liClickHandler);
        this._liClickHandler =null;

        this._ul = null;
        this._items = null;
        this._parentEntity = null;
        this._cachedItems = null;
        this._cachedElements = null;
        this._onItemClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    AbstractMenu.prototype.handleItemClick= function(){


    };

    /**
     * Set selected
     * @param {string} id
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.setSelected = function(id){
        var elm = this._cachedElements.get(this._selectedId);
        if(elm){
            elm.classList.remove('mui-menu__item--selected');
        }
        this._selectedId = id;
        elm =this._cachedElements.get(id);
        if(elm){
            elm.classList.add('mui-menu__item--selected');
        }
        return this;
    };

    /**
     * Get Selected
     * @return {string}
     */
    AbstractMenu.prototype.getSelected = function(){
        return this._selectedId;
    };
    /**
     * @protected
     * @param {mui.IEntity} item
     */
    AbstractMenu.prototype.triggerItemClick = function(item){
        if(this._onItemClick){
            this._onItemClick(item);
        }
    };
    /**
     * Set item click callback
     * @param {mui.AbstractMenu.ItemClickCallback} fn
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.onItemClick = function(fn){
        this._onItemClick = fn;
        return this;
    };

    /**
     * Set parent entity
     * @param {mui.IEntity} item
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.setParentEntity = function(item){
        this._parentEntity = item;
        this.updateItems();
        return this;
    };

    /**
     * Set items
     * @param {mui.IEntityCollection} items
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.setItems = function(items){
        this._items = items;
        this.updateItems();
        return this;
    };

    /**
     * Get cached item by id
     * @param {string} id
     * @return {?mui.IEntity}
     */
    AbstractMenu.prototype.getItem = function(id){
        return this._cachedItems.get(id);

    };

    /**
     * Create item
     * @abstract
     * @function
     * @param {mui.IEntityCollection} data
     * @param {mui.IEntity} item
     * @return {HTMLElement}
     */
    AbstractMenu.prototype.createItem = function(data,item){
        throw "must implement";
    };

    /**
     * @function
     * @virtual
     */
    AbstractMenu.prototype.willRender = function(){
    };
    /**
     * Update Items
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.updateItems = function(){
        this.willRender();
        this._ul.clear();
        if(this._items==null)return this;
        var data = this._items;
        var items = data.getChildren(this._parentEntity);
        var elm,item;
        var frag = document.createFrag();
        this._cachedItems = new Map();
        this._cachedElements = new Map();
        while(items.hasNext()){
            item = items.next();
            var id = data.getId(item);
            elm = this.createItem(data,item);
            elm.classList.add('mui-menu__item');
            elm.__id = id;
            if(elm.__id===this._selectedId){
                elm.classList.add('mui-menu__item--selected');
            }
            frag.add(elm);
            this._cachedItems.set(id,item);
            this._cachedElements.set(id,elm);
        }
        this._ul.add(frag);
        return this;
    };
    return AbstractMenu;
}();

/**
 * Menu
 * @constructor
 * @class mui.Menu
 * @augments mui.AbstractMenu
 * @param {mui.AbstractMenuOptions} options
 *
 */
mui.Menu = function(){
    var Menu = function(options){
        mui.AbstractMenu.call(this,options);
    };
    mui.inherits(Menu,mui.AbstractMenu);

    /**
     * @inheritDoc
     */
    Menu.prototype.dispose = function(){
        if(this._windowScrollHandler){
            window.removeEventListener('scroll',this._windowScrollHandler);
            this._windowScrollHandler = null;
        }
        if(this._subMenu){
            this._subMenu.detach();
            this._subMenu.dispose();
            this._subMenu = null;
        }

        mui.AbstractMenu.prototype.dispose.call(this);
    };
    Menu.prototype.handleItemClick = function(id,item,itemElement,evt){
        if(itemElement.classList.contains('mui-menu__item--parent')){
            this.toggleSubMenu(id);
            return false;
        }
        if(this.isSubMenuOpen()){
            this.closeSubMenu();
        }
    };
    /**
     * If submenu is open
     * @return {boolean}
     */
    Menu.prototype.isSubMenuOpen = function(){
        return this._subMenu && this._subMenu.getElement().parentNode;
    };
    /**
     * Open submenu
     * @param {string} parentId
     * @return {mui.Menu}
     */
    Menu.prototype.openSubMenu = function(parentId){
        if(parentId==null)return this;
        if(this._subMenu==null){
            this._subMenu = new Menu({
                'items':this._items,
                'onItemClick':this.triggerItemClick.bind(this)
            });
        }
        this._subMenu.setParentEntity(this.getItem(parentId));
        this._subMenu.__parentId = parentId;
        var parentEl = this._cachedItemElements.get(this._subMenu.__parentId);
        mui.Element.showPopupRelativeToElement(this._subMenu,parentEl,'right','top','right');
        return this;
        //todo: onclose destroy the submenu
    };
    /**
     * Close submenu
     * @return {mui.Menu}
     */
    Menu.prototype.closeSubMenu = function(){
        if(this._subMenu==null)return this;
        mui.Element.closePopup(this._subMenu);
        this._subMenu.dispose();
        this._subMenu = null;
        return this;
    };

    /**
     * Toggle submenu
     * @param {string} parentId
     * @return {mui.Menu}
     */
    Menu.prototype.toggleSubMenu = function(parentId){
        if(this.isSubMenuOpen()){
            this.closeSubMenu();
        }else{
            this.openSubMenu(parentId);
        }
        return this;

    };
    /**
     * @inheritDoc
     */
    Menu.prototype.willRender = function(){
        this._cachedItemElements = new Map();
    };
    /**
     * @inheritDoc
     */
    Menu.prototype.createItem = function(data,item){
        var icon = data.getIcon(item);
        var isParent = data.isParent(item);
        var id = data.getId(item);

        var elm = this.create({'type': 'li'});
        if (icon) {
            var iconE = this.create('mui-menu__item-icon ' + icon);
            elm.add(iconE);
        }
        var nameE = this.create('mui-menu__item-label');
        nameE.textContent = data.getName(item);
        elm.add(nameE);

        if (isParent) {
            var expandIcon = this.create("mui-menu__item-parent-icon");
            elm.add(expandIcon);
            elm.classList.add('mui-menu__item--parent');
        }
        this._cachedItemElements.set(id,elm);
        return elm;
    };



    return Menu;
}();

/**
 * @typedef ImageMenuOptions
 * @property {number} options.imageWidth
 * @property {number} options.imageHeight
 *
 * @typedef {mui.AbstractMenuOptions && ImageMenuOptions} mui.ImageMenuOptions
 *
 * Image Menu
 * @class {mui.ImageMenu}
 * @augments mui.AbstractMenu
 * @param {mui.ImageMenuOptions} options
 */
mui.ImageMenu = function(){
    var ImageMenu = function(options){
        if(options==null){
            options = {};
        }
        mui.AbstractMenu.call(this,options);
        this._imageWidth = options['imageWidth'];
        this._imageHeight = options['imageHeight'];
    };
    mui.inherits(ImageMenu,mui.AbstractMenu);

    /**
     * @inheritDoc
     */
    ImageMenu.prototype.dispose = function(){
        mui.AbstractMenu.prototype.dispose.call(this);
    };

    /**
     * @inheritDoc
     */
    ImageMenu.prototype.createItem = function(data,item){
        var id = data.getId(item);
        var image = data.getImage(item);
        var name = data.getName(item);

        var elm = this.create({'type': 'li'});
        elm.setAttribute('title',name);
        var imageE = this.create('mui-menu__item-image');
        imageE.style.backgroundImage = 'url("'+image+'")';
        if(this._imageWidth) {
            imageE.style.width = this._imageWidth;
        }
        if(this._imageHeight){
            imageE.style.height = this._imageHeight;
        }
        elm.add(imageE);
        elm.__id = id;
        return elm;
    };

    return ImageMenu;
}();



/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

mui.ViewportRenderContext = function(){
    var ViewportRenderContext = function(left,right,top,bottom){
        this._left = left;
        this._right = right;
        this._bottom = bottom;
        this._top = top;
    };
    ViewportRenderContext.prototype.getLeft = function(){
        return this._left;
    };
    ViewportRenderContext.prototype.getRight = function(){
        return this._right;
    };
    ViewportRenderContext.prototype.getTop = function(){
        return this._top;
    };
    ViewportRenderContext.prototype.getBottom = function(){
        return this._bottom;
    };

    return ViewportRenderContext;

}();
/**
 * @callback mui.LazyList.ViewPositionChanged
 * @param {number} scrollTop
 *
 * @callback mui.LazyList.ScrollbarWidthChanged
 * @param {}
 *
 * @callback mui.LazyList.NodeVisible
 * @param {mui.IEntity}
 * @return {boolean}
 *
 * @typedef mui.AbstractLazyViewportOptions
 * @property {mui.LazyList.ViewPositionChanged} onViewPositionChanged
 * @property {mui.LazyList.ScrollbarWidthChanged} onScrollbarWidthChanged
 * @property {boolean} scrollbarSizeUpdate
 *
 * Abstract Lazy List
 * @abstract
 * @function
 * @class mui.AbstractLazyList
 * @augments mui.Element
 * @param {mui.AbstractLazyViewportOptions} options
 */
mui.AbstractLazyViewport = function(){
    var AbstractLazyViewport =function(options){
        mui.Element.call(this,options);
        this.addClass('mui-lazy-viewport');
        this._onViewPositionChanged = options['onViewPositionChanged'];
        this._scrollbarSizeUpdate = options['scrollbarSizeUpdate']!=null?options['scrollbarSizeUpdate']:false;
        this._onScrollbarVisibilityChanged = options['onScrollbarWidthChanged'];
        this._scrollTop =null;
        this._scrollLeft =null;
        this._scrollHandler = this._requestRender.bind(this);
        this.getElement().addEventListener('scroll',this._scrollHandler);
    };
    mui.inherits(AbstractLazyViewport, mui.Element);

    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.dispose = function(){
        this.getElement().removeEventListener('scroll',this._scrollHandler);
        this._scrollHandler = null;
        this._onViewPositionChanged =null;
        this._scrollbarSizeUpdate = null;
        this._onScrollbarVisibilityChanged = null;
        this._viewPortHeight = 0;
        this._scrollTop =null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.wasVisible =function() {
        this._updatePosAndHeight();
    };


    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.getScrollTop =function() {
        return this._scrollTop;
    };

    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.wasAttached =function() {
        this._updatePosAndHeight();
    };



    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.getScrollbarWidth = function(){
        return this._scrollbarWidth;
    };
    AbstractLazyViewport.prototype._requestRender = function(){
        if(this._rendering){
            return;
        }
        this._rendering = true;
        this._updatePosAndHeight();
        requestAnimationFrame(function(){
            this.willRender();

            var  viewPortHeight = this._viewPortHeight;
            var  viewportWidth = this._viewportWidth;
            var  scrollTop = this._scrollTop;
            var  scrollLeft = this._scrollLeft;

            var bottomLimit =viewPortHeight + scrollTop;
            var rightLimit =viewportWidth + scrollLeft;

            var context = new mui.ViewportRenderContext (scrollLeft,rightLimit,scrollTop,bottomLimit);

            this.renderContent(context);
            this._rendering = false;

            if(this._scrollbarSizeUpdate) {
                var newScrollbarWidth = this._viewportWidth - this._content.offsetWidth;
                var newScrollbarHeight = this._viewPortHeight - this._content.offsetHeight;
                var scrollbarWidthChanged = this._scrollbarWidth !== newScrollbarWidth || newScrollbarHeight!==this._scrollbarHeight;

                this._scrollbarWidth = newScrollbarWidth;
                this._scrollbarHeight = newScrollbarHeight;

                if (this._onScrollbarVisibilityChanged && scrollbarWidthChanged) {
                    this._onScrollbarVisibilityChanged();
                }
            }
            this.wasRendered();
        }.bind(this));

    };
    /**
     * @protected
     * @virtual
     * @function
     */
    AbstractLazyViewport.prototype.willRender = function(){};

    /**
     * @protected
     * @virtual
     * @function
     */
    AbstractLazyViewport.prototype.renderContent = function(){};

    /**
     * @protected
     * @function
     * @virtual
     */
    AbstractLazyViewport.prototype.wasRendered = function(){

    };
    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.update = function(){
        this._requestRender();
        return this;
    };

    AbstractLazyViewport.prototype._updatePosAndHeight = function() {
        var lastScrollTop = this._scrollTop;
        var lastScrollLeft = this._scrollLeft;

        this._viewPortHeight = this._el.offsetHeight;
        this._scrollTop = this._el.scrollTop;
        this._scrollLeft = this._el.scrollLeft;
        this._viewportWidth = this._el.offsetWidth;
        if(lastScrollTop !==this._scrollTop && this._onViewPositionChanged && lastScrollLeft!==this._scrollLeft){
            this._onViewPositionChanged(this._scrollTop);
        }
    };
    return AbstractLazyViewport;
}();


/**
 *
 * @callback mui.LazyList.NodeVisible
 * @param {mui.IEntity}
 * @return {boolean}
 *
 * @typedef mui.AbstractLazyListOptions
 * @property {number} rowHeight
 * @property {mui.IEntityCollection} data
 *
 * Abstract Lazy List
 * @abstract
 * @function
 * @class mui.AbstractLazyList
 * @augments mui.Element
 * @param {mui.AbstractLazyListOptions} options
 */
mui.AbstractLazyList = function(){
    var AbstractLazyList =function(options){
        mui.AbstractLazyViewport .call(this,options);
        this.addClass('mui-lazy-list');
        this._rowHeight = options['rowHeight'] || 35;

        this._content = this.create({'type':'ul','className':'mui-lazy-list__content'});
        this.add(this._content);
    };
    mui.inherits(AbstractLazyList,mui.AbstractLazyViewport );

    /**
     * @inheritDoc
     */
    AbstractLazyList.prototype.dispose = function(){
        this._rowHeight =null;
        this._content = null;
        mui.AbstractLazyViewport.prototype.dispose.call(this);
    };

    /**
     * @function
     * @abstract
     */
    AbstractLazyList.prototype.getChildrenIterator = function(){
        throw "must implement";
    };


    /**
     * @inheritDoc
     */
    AbstractLazyList.prototype.renderContent = function(context){
        var  minTop = context.getTop();

        var topHeight = 0;
        var bottomHeight = 0;

        var bottomLimit =context.getBottom();

        var runningHeight = 0;

        var visibleFragment = document.createDocumentFragment();

        var rowHeight = this._rowHeight;

        var it = this.getChildrenIterator();
        var renderedNodes = new Set();
        var  viewPortHeight = bottomLimit-minTop;
        while(it.hasNext() && viewPortHeight>0){
            var nodeData = it.next();
            var rHeight = typeof rowHeight=='function'?rowHeight(nodeData):rowHeight;
            if(runningHeight>bottomLimit){
                bottomHeight+=rHeight;
                this.onSkipRender(it);
                continue;
            }
            runningHeight +=rHeight;
            if(runningHeight+rowHeight<minTop){
                topHeight+=rHeight;
                this.onSkipRender(it);
                continue;
            }
            renderedNodes.add(nodeData);
            var rowElement = this.createRow(nodeData,it);
            if(rowElement==null)continue;
            rowElement.style.height = rHeight+'px';
            rowElement.style.lineHeight = rHeight+'px';
            visibleFragment.appendChild(rowElement);
        }
        var topSpacerElm = this.create({'className':'mui-lazy-list__top-spacer'});
        topSpacerElm.style.height = topHeight+'px';
        var bottomSpacerElm = this.create({'className':'mui-lazy-list__bottom-spacer'});
        bottomSpacerElm.style.height = bottomHeight+'px';
        this._content.clear();
        this._content.add(topSpacerElm,visibleFragment,bottomSpacerElm);

    };
    /**
     * Generate row element
     * @protected
     * @abstract
     * @function
     * @param {*} dataNode
     * @param {number} height
     * @returns {HTMLElement}
     */
    AbstractLazyList.prototype.createRow = function(dataNode,height) {
        throw "must implement";
    };
    /**
     * @protected
     * @function
     * @virtual
     */
    AbstractLazyList.prototype.onSkipRender = function(){}
    return AbstractLazyList;
}();


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.LazyList.ActionClick
 * @param {mui.Event}
 * @callback mui.LazyList.ItemClick
 * @param {mui.Event}
 * @callback mui.LazyList.ItemDoubleClick
 * @param {mui.Event}
 *
 * @typedef LazyListType
 * @param {string} options.emptyThumbnail path to thumbnail image
 * @param {boolean} options.iconVisible
 * @param {string} options.iconType avatar or thumbnail
 * @param {boolean} options.hasSettings
 *
 * @param {mui.LazyList.ActionClick} onActionClick
 * @param {mui.AbstractMenu.ItemClickCallback} onItemSettingClick
 * @param {mui.LazyList.ItemClick} onItemClick
 * @param {mui.LazyList.ItemDoubleClick} onDoubleClick
 *
 * @param {mui.IEntityCollection}} data
 * @param {mui.IEntityCollection} options.itemSettings
 * @param {mui.IEntityCollection} options.itemActions
 * @param {mui.IEntityCollection} options.selectedRowActions
 *
 * @typedef {mui.AbstractLazyListOptions & LazyListType} mui.LazyListOptions
 *
 *
 * Lazy List
 * @constructor
 * @class mui.LazyList
 * @augments mui.AbstractLazyList
 * @param {mui.LazyListOptions} options
 *
 *
*/
mui.LazyList = function(){

    var LazyList = function(options){
        mui.AbstractLazyList.call(this,options);

        //TODO improve this alt holder path
        this._altHolder = options['emptyThumbnail'];
        this._iconVisible = options['iconVisible'];
        this._iconType = options['iconType'] || 'avatar';
        this._hasSettings = options['hasSettings'];
        this._itemSettings = options['itemSettings'];
        this._itemActions = options['itemActions'];
        this._selectedRowActions =options['selectedRowActions'];
        this._itemClickHandler = function(evt){
            var elm,args;
            if( options['onItemSettingClick']) {
                elm = this.closest(evt.target, 'mui-lazy-list__setting-icon');
                if (elm) {
                    if(this._menu==null) {
                        this._menu = new mui.Menu({
                            'items':this._itemSettings
                        });
                    }
                    var item = this._idToNodeMappings.get(elm.__id);
                    this._menu.onItemClick(function(setting){
                        options['onItemSettingClick'](item,setting);
                    });
                    mui.Element.showPopupRelativeToElement(this._menu,elm,'right','top','right','bottom',0,0);
                    return this;
                }
            }
            if(options['onActionClick']){
                elm = this.closest(evt.target,'mui-lazy-list__action');
                if(elm) {
                    args = new mui.Event(this,{'actionId':elm.__actId,'itemId':this._idToNodeMappings.get(elm.__nodeId)},evt);
                    options['onActionClick'](args);
                    if(args.isStopped()){
                        return;
                    }
                }
            }
            if(options['onItemClick']){
                elm = this.closest(evt.target,'mui-lazy-list__item');
                if(elm==null)return;
                args = new mui.Event(this,this._idToNodeMappings.get(elm.__id),evt);
                options['onItemClick'](args);
            }

        }.bind(this);
        this._itemDblClickHandler = function(evt) {
            if(options['onDoubleClick']){
                var elm = this.closest(evt.target,'mui-lazy-list__item');
                if(elm==null)return;
                evt = new mui.Event(this,this._idToNodeMappings.get(elm.__id),evt);
                options['onDoubleClick'](elm.__id);
            }
        }.bind(this);

        this._content.addEventListener('click',this._itemClickHandler);
        this._content.addEventListener('dblclick',this._itemDblClickHandler);

        this._data = options['data'];
        this.update();
    };
    mui.inherits(LazyList,mui.AbstractLazyList);

    /**
     * @inheritDoc
     */
    LazyList.prototype.dispose = function(){
        this._content.removeEventListener('click',this._itemClickHandler);
        this._content.removeEventListener('dblclick',this._itemDblClickHandler);
        this._itemClickHandler = null;
        this._itemDblClickHandler = null;
        this._idToNodeMappings = null;
        this._idToRenderedElement = null;

        this._itemSettings = null;
        this._hasSettings = null;
        this._itemActions = null;
        this._selectedRowActions = null;

        this._itemTemplate = null;
        this._iconVisible = null;
        this._iconType = null;
        mui.AbstractLazyList.prototype.dispose.call(this);
    };

    LazyList.prototype.getChildrenIterator=function(){
        return this._data.getChildren();
    };
    /**
     * Is selected
     * @param {string} node
     * @return {boolean}
     */
    LazyList.prototype.isSelected=function(id){
        return this._selected === id;

    };

    /**
     * Set selected
     * @param id
     * @return {mui.LazyList}
     */
    LazyList.prototype.setSelected=function(id){
        var prev = this._idToRenderedElement.get(this._selected);
        if(prev){
            prev.classList.remove('mui-lazy-list__item--selected');
        }
        if(this._cachedSelectedRowActContainer){
            this._cachedSelectedRowActContainer.removeFromParent();
            this._cachedSelectedRowActContainer = null;
        }
        this._selected =id;
        var elm = this._idToRenderedElement.get(id);
        if(elm){
            elm.classList.add('mui-lazy-list__item--selected');
        }
        if(this._selectedRowActions) {
            this._cachedSelectedRowActContainer =this.createRowAction(this._selectedRowActions,id);
            elm.add(this._cachedSelectedRowActContainer);
        }

        return this;

        // this._idToNodeMappings
        // this._requestRender();
    };
    /**
     * @inheritDoc
     */
    LazyList.prototype.wasVisible =function() {
        mui.AbstractLazyList.prototype.wasVisible.call(this);
        this.update();
    };
    /**
     * @inheritDoc
     */
    LazyList.prototype.willRender=function() {
        this._idToNodeMappings = new Map();
        this._idToRenderedElement = new Map();
    };
    /**
     * @private
     * @param collection
     * @param nodeId
     * @return {*}
     */
    LazyList.prototype.createRowAction=function(collection,nodeId) {
        var iconClass,label;
        var frag = document.createFrag();
        var it = collection.getChildren();
        while(it.hasNext()){
            var act = it.next();
            iconClass =collection.getIcon(act);
            label = collection.getName(act);
            var actE =  this.create({'type': 'button', 'className': 'mui-lazy-list__action'});
            if(iconClass){
                actE.add(this.create('mui-lazy-list__action-icon '+iconClass));
            }
            if(label){
                actE.add(this.create({'className':'mui-lazy-list__action-label','text':label}));
            }
            actE.__actId = collection.getId(act);
            actE.__nodeId = nodeId;
            frag.add(actE);

        }
        return this.create('mui-lazy-list__action-container').add(frag);
    };
    /**
     * @inheritDoc
     */
    LazyList.prototype.createRow=function(dataNode) {
        var icon;
        var listData= this._data;
        if(this._itemTemplate==null) {
            var item = this.create({
                'type':'li',
                'className':'mui-lazy-list__item'
            });
            if(this._iconVisible) {
                icon = this.create({
                    'className': 'mui-lazy-list__item-icon'
                });
                if(this._iconType!=='avatar'){
                    icon.style.backgroundImage = 'url(' + this._altHolder + ')';
                }
                item.add(icon);
            }
            var textContainer = this.create({'className':'mui-lazy-list__text-container'});
            var txtPrimary = this.create({'className': "mui-lazy-list__item-title"});
            var txtSecond = this.create({'className': "mui-lazy-list__item-desc"});
            textContainer.add(txtPrimary);
            textContainer.add(txtSecond);

            item.add(textContainer);
            this._itemTemplate = item;
        }
        var id = listData.getId(dataNode);
        var newItem = this._itemTemplate.cloneNode(true); //cloning is faster by 50%
        if(id ==this._selected){
            newItem.classList.add('mui-lazy-list__item--selected');
        }

        var iconItem = this._iconVisible?newItem.childNodes[0]:null;
        var textElement = this._iconVisible?newItem.childNodes[1]:newItem.childNodes[0];
        var descElement = textElement.childNodes[1];
        var nameElement = textElement.childNodes[0];


        if(iconItem) {
            if(this._iconType=='avatar') {
                icon = listData.getIcon(dataNode);
                if (icon != null) {
                    iconItem.className = 'mui-lazy-list__item-icon '+icon;
                }
            }else{
                var thumbnail = null;//TODO
                iconItem.classList.add('mui-lazy-list__item-icon-thumbnail');
                if(thumbnail) {
                    iconItem.style.backgroundImage = 'url(' + thumbnail + ')';
                }

            }
        }

        if(descElement){
            var desc = listData.getDescription(dataNode);
            if (desc) {
                descElement.textContent = desc;
            }

        }
        if(nameElement){
            var name = listData.getName(dataNode);
            if(name) {
                nameElement.textContent = name;
            }
        }

        if(this._selected ===id && this._selectedRowActions){
            this._cachedSelectedRowActContainer = this.createRowAction(this._selectedRowActions,id);
            newItem.add(this._cachedSelectedRowActContainer);
        }
        if(this._itemActions){
           newItem.add(this.createRowAction(this._itemActions,id));
        }

        if(this._hasSettings===true || typeof this._hasSettings=='function' && this._hasSettings(dataNode)){
            var setting = this.create({'type':'button','className':'mui-lazy-list__setting-icon'});
            setting.__id  = id;
            newItem.add(setting);
        }
        newItem.__id =id;
        this._idToNodeMappings.set(dataNode.getId(),dataNode);
        this._idToRenderedElement.set(dataNode.getId(),newItem);
        return newItem;
    };    return LazyList;
}();


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @interface mui.ILazyTreeData
 * @augments mui.IEntityCollection
 */
mui.ILazyTreeData = function(){
    var ILazyTreeData = function(){

    };
    ILazyTreeData.prototype.isError = function(){
        throw "must implement";
    };
    ILazyTreeData.prototype.isLoading = function(){
        throw "must implement";

    };
    return ILazyTreeData;

}();
/**
 * @callback mui.LazyTree.CustomDisplayStrategy
 * @param {HTMLElement} displayElement
 * @param {*} nodeData
 *
 * @typedef mui.LazyTreeOptions
 * @property {mui.ILazyTreeData} data
 * @property {boolean} hasSettings
 * @property {boolean} descriptionVisible
 * @property {boolean} showExpandIcon
 * @property {mui.IEntityCollection} itemSettings
 * @property {mui.AbstractMenu.ItemClickCallback} onItemSettingClick
 * @property {mui.LazyTree.CustomDisplayStrategy} customDisplayStrategy
 *
 * Lazy tree
 * @constructor
 * @class mui.LazyTree
 * @augments mui.Element
 * @param {mui.LazyTreeOptions} options
 *
*/
mui.LazyTree = function(){
    var EXPAND_ICON_SIZE = 16;
    var EXPAND_ICON_PADDING = 8;
    var NODE_LEFT_PADDING = 8;

    var ICON_PADDING=4;
    var ICON_SIZE = 16; /**also from css*/


    /**
     * @constructor
     * @param {mui.LazyTreeOptions} options
     */
    var LazyTree =function(options){
        mui.Element.call(this,options);
        this.addClass('mui-lazy-tree');
        //Collection adapter for lazy list
        this._listData = new ListData({
            'data':options['data']
        });
        this._view = new LazyTreeList({
            'hasSettings':options['hasSettings'],
            'data':this._listData,
            'onItemClick':options['onItemClick'],
            'descriptionVisible':options['descriptionVisible'],
            'customDisplayStrategy':options['customDisplayStrategy'],
            'showExpandIcon':options['showExpandIcon'],
            'onItemSettingClick':options['onItemSettingClick'],
            'itemSettings':options['itemSettings']
        });
        this._view.attachTo(this);
    };
    mui.inherits(LazyTree,mui.Element);

    LazyTree.prototype.dispose = function(){
        this._view.dispose();
        this._view = null;
        this._listData = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set data
     * @param {mui.ILazyTreeData} data
     * @return {mui.LazyTree}
     */
    LazyTree.prototype.setData = function(data){
        this._listData.setData(data);
        this._view.update();
        return this;
    };
    /**
     * Set selected
     * @param {string} item
     * @return {mui.LazyTree}
     */
    LazyTree.prototype.setSelected = function(item){
        this._listData.setSelected(item);
        this._view.update();
        return this;
    };
    /**
     * Get selected
     * @return {string}
     */
    LazyTree.prototype.getSelected = function(){
        return this._listData.getSelected();
    };

    /**
     * Toggle expanded
     * @param {string} id
     */
    LazyTree.prototype.toggleExpanded = function(id){
        this._listData.toggleExpanded(id);
        this._view.update();
    };
    /**
     * @inheritDoc
     */
    LazyTree.prototype.update = function(){
        this._view.update();
    };


    /**
     * @private
     */
    var LazyTreeList = function(options){
        mui.AbstractLazyList.call(this,options);


        this._iconVisible=true;
        this._descVisible = options['descriptionVisible'];
        this._customDisplayStrategy = options['customDisplayStrategy'];
        this._onItemClick = options['onItemClick'];
        this._hasSettings = options['hasSettings'];
        this._onItemSettingClick = options['onItemSettingClick'];
        this._itemSettings = options['itemSettings'];
        this._onExpandIconClick = options['onExpandIconClick'];
        this._expandIcon = options['expandIcon'] || 'mui-lazy-tree__item-expand-icon--expanded';
        this._collapseIcon = options['collapseIcon'] || 'mui-lazy-tree__item-expand-icon--collapsed';
        this._showExpandIcon = options['showExpandIcon'];

        this._parentIcon = options['parentIcon'] || 'mui-lazy-tree__item-parent-icon';
        this._childIcon = options['childIcon'] || 'mui-lazy-tree__item-child-icon';

        this.addClass('mui-lazy-tree__lazy-list');
        this.getElement().addEventListener('click',this._handleClick.bind(this));
        this._data = options['data'];
        this.update();
    };
    mui.inherits(LazyTreeList,mui.AbstractLazyList);


    /**
     * @inheritDoc
     */
    LazyTreeList.prototype.dispose = function(){
        this._idToItemMappings = null;
        this._onExpandIconClick = null;
        this._onItemSettingClick = null;
        this._itemSettings = null;
        this._onItemClick = null;
        this._childItemTemplate = null;
        this._parentItemTemplate = null;
        this._hasSettings= null;
        this._data =null;
        this._customDisplayStrategy = null;
        mui.AbstractLazyList.prototype.dispose.call(this);
    };

    LazyTreeList.prototype._handleClick = function(evt){
        var target = evt.target;
        var found=null;
        var args = null;
        if(this._onExpandIconClick) {
            found = this.closest(target, 'mui-lazy-tree__item-expand-icon');
            if (found) {
                args = new mui.Event(this,this._idToItemMappings.get( found.__id),evt);
                this._onExpandIconClick(args);
                if(args.isStopped()){
                    return;
                }
            }

        }
        if(this._onItemSettingClick){

            found = this.closest(target, 'mui-lazy-tree__setting-icon');
            if (found) {
                if(this._menu==null) {
                    this._menu = new mui.Menu({
                        'items':this._itemSettings
                    });
                }
                this._menu.onItemClick(function(setting){
                    var item = this._idToItemMappings.get(found.__id);
                    this._onItemSettingClick(item,setting);
                }.bind(this));
                mui.Element.showPopupRelativeToElement(this._menu,found,'right','top','right','bottom',0,0);
                return this;
            }


        }

        if(this._onItemClick) {
            found = this.closest(target, 'mui-lazy-tree__item');
            if (found) {
                args = new mui.Event(this,this._idToItemMappings.get( found.__id),evt);
                this._onItemClick(args);
            }

        }
    };

    /**
     * @inheritDoc
     */
    LazyTreeList.prototype.willRender=function() {
        this._idToItemMappings = new Map();
        this._idToElementsMappings = new Map();
    };


    /**
     * Get visible node
     * @param {string} id
     * @return {*}
     */
    LazyTreeList.prototype.getRenderedNodeById=function(id){
        return this._idToItemMappings.get(id);
    };

    /**
     * @inheritDoc
     */
    LazyTreeList.prototype.getChildrenIterator =function(){
        return this._data.getChildren();
    };

    LazyTreeList.prototype.getChildTemplate = function(dataNode,it){
        if (this._childItemTemplate == null) {
            var item = this.create({
                'className': 'mui-lazy-tree__item'
            });

            if(this._iconVisible) {
                var icon = this.create({
                    'className': 'mui-lazy-tree__item-icon'
                });
                icon.style.padding = ICON_PADDING+'px';
                item.appendChild(icon);
            }

            var text = this.create({
                'className': 'mui-lazy-tree__item-display mui-lay-tree__item-display--clickable'
            });
            if (this._descVisible) {
                var txtPrimary = this.create({
                    'className': "mui-lazy-tree__label"
                });
                var txtSecond = this.create({
                    'className': "mui-lazy-tree__desc"
                });
                text.appendChild(txtPrimary);
                text.appendChild(txtSecond);
            }
            item.appendChild(text);
            this._childItemTemplate = item;
        }
        var newItem = this._childItemTemplate.cloneNode(true);
        return {
            'element':newItem,
            'icon':this._iconVisible?newItem.childNodes[0]:null,
            'desc':this._descVisible?newItem.childNodes[1].childNodes[1]:null,
            'title':this._descVisible?newItem.childNodes[1].childNodes[0]:newItem.childNodes[1]
        };
    };
    LazyTreeList.prototype.getParentTemplate = function(dataNode,it){
        if (this._parentItemTemplate == null) {
            this._parentOffset = 0;
            var expandIcon,icon,title,desc;
            var item = this.create({
                'className': 'mui-lazy-tree__item'
            });
            if(this._showExpandIcon!==false) {
                expandIcon = this.create({
                    'className': 'mui-lazy-tree__item-expand-icon'
                });
                expandIcon.style.padding = (EXPAND_ICON_PADDING)+'px';
                item.appendChild(expandIcon);
                this._parentOffset += EXPAND_ICON_SIZE + (EXPAND_ICON_PADDING*2);
            }
            if(this._iconVisible) {
                icon = this.create({
                    'className': 'mui-lazy-tree__item-icon'
                });
                var padLeft = this._showExpandIcon!==false?ICON_PADDING:ICON_PADDING*2;
                icon.style.paddingLeft = padLeft+'px';
                // icon.style.marginRight = ICON_MARGIN_RIGHT+'px';
                item.appendChild(icon);
                this._parentOffset+=ICON_SIZE+padLeft;
            }

            var text = this.create({
                'className': 'mui-lazy-tree__item-display mui-lay-tree__item-display--clickable'
            });
            if (this._descVisible) {
                title = this.create({
                    'className': "mdc-list-item__primary-text"
                });
                desc = this.create({
                    'className': "mdc-list-item__secondary-text"
                });
                text.appendChild(title);
                text.appendChild(desc);
            }
            item.appendChild(text);
            this._parentItemTemplate = item;


        }
        var newItem = this._parentItemTemplate.cloneNode(true);

        var expandE = this._showExpandIcon!==false?newItem.childNodes[0]:null;
        var iconE = this._iconVisible?(this._showExpandIcon!==false?newItem.childNodes[1]:newItem.childNodes[0]):null;
        var displayE = newItem.childNodes[newItem.childNodes.length-1];
        var descE = this._descVisible?(displayE.childNodes[1]):null;
        var titleE = this._descVisible?displayE.childNodes[0]:displayE;
        return {
            'element':newItem,
            'icon':iconE,
            'desc':descE,
            'title':titleE,
            'expand':expandE
        };
    };


    /**
     * @inheritDoc
     */
    LazyTreeList.prototype.createRow = function(dataNode,it){
        var listData = this._data;
        if(listData==null)return;
        var nodeId = listData.getId(dataNode);

        this._idToItemMappings.set(nodeId,dataNode);

        var isParent = listData.isParent(dataNode);

        var newItemObj = isParent?this.getParentTemplate():this.getChildTemplate();
        var newItem = newItemObj['element'];
        // var className = dataNode.getAttribute('className');
        // if (className != null) {
        //     newItem.classList.add(className);
        // }
        if(listData.isSelected(dataNode)){
            newItem.classList.add('mui-lazy-tree__item--selected');
        }

        var descElement = newItemObj['desc'];
        var nameElement = newItemObj['title'];
        var expandElement = newItemObj['expand'];
        var iconElement =newItemObj['icon'];

        if(expandElement) {
            expandElement.__id = nodeId;
            if (listData.isError(dataNode)) {
                expandElement.classList.add('mui-lazy-tree__item-expand-icon--error');

            } else if (listData.isLoading(dataNode)) {
                // newItem.childNodes[0].textContent = 'replay'
                expandElement.classList.add('mui-lazy-tree__item-expand-icon--spin');
            } else if (isParent) {
                expandElement.classList.add(listData.isExpanded(nodeId) ? this._expandIcon : this._collapseIcon);
            }
        }

        if(iconElement) {
            var iconClass = listData.getIcon(dataNode);
            var clssNm ='mui-lazy-tree__item-icon '+ (iconClass == null ?( isParent?this._parentIcon:this._childIcon ): iconClass);
            iconElement.className = clssNm;
        }

        if(this._customDisplayStrategy){
            this._customDisplayStrategy(nameElement,dataNode);
        }else {
            var name = listData.getName(dataNode);
            var desc = listData.getDescription(dataNode);
            if (descElement && desc) {
                descElement.textContent = desc;
                // newItem.style.height = height + 'px';
            }
            if (name) {
                nameElement.textContent = name;
            }
        }
        if(this._hasSettings===true || (typeof this._hasSettings=='function' && this._hasSettings(dataNode))){
            var settingIcon = this.create({'type':'button','className':'mui-lazy-tree__setting-icon'});
            settingIcon.__id = nodeId;
            newItem.appendChild(settingIcon);
        }
        newItem.__id = nodeId;
        var lvl = it.getLevel(dataNode);
        var left = Math.max(lvl*this._parentOffset+NODE_LEFT_PADDING,NODE_LEFT_PADDING);
        newItem.style.paddingLeft = left+'px';
        return newItem;
    };

    /**
     * List adapter iterator
     * @private
     * @param {function} getChildrenGetter
     * @param {function} isExpandedGetter
     * @implements {mui.IIterator}
     * @constructor
     */
    var ListIterator = function (getChildrenGetter,isExpandedGetter) {
        this._isExpandedGetter = isExpandedGetter;
        this._getChildrenGetter = getChildrenGetter;
        this._curIt = getChildrenGetter();
        this._curIt.__level = 0;
        this._stackedIt = [];
        this._levelMap = new Map();


    };
    ListIterator.prototype.getLevel = function(node){
        return node.__level;
        return this._levelMap.get(node);
    };
    /**
     * @inheritDoc
     */
    ListIterator.prototype.next = function(){
        if (!this._curIt) {
            return;
        }
        var cur = this._curIt.next();
        if(cur) {
            cur.__level = this._curIt.__level;
            // this._levelMap.set(cur,this._curIt.__level);
        }
        if (this._isExpandedGetter(cur)) {
            var it = this._getChildrenGetter(cur);
            it.__level = this._curIt.__level + 1;
            if (this._curIt && this._curIt.hasNext()) {
                this._stackedIt.push(this._curIt);
            }
            this._curIt = it;
        }

        if (this._curIt && !this._curIt.hasNext()) {
            this._curIt = this._stackedIt.pop();
        }
        return cur;
    };
    /**
     * @inheritDoc
     */
    ListIterator.prototype.hasNext = function(){
        return this._curIt && this._curIt.hasNext();
    };

    /**
     * List Data Adapter
     * @private
     * @param options
     * @constructor
     * @implements {mui.ILazyListData}
     */
    var ListData = function(options){
        this._expanded = new Set();
        this._data = options['data'];

    };

    /**
     * Toggle expanded
     * @param {string} id
     */
    ListData.prototype.toggleExpanded=function(id) {

        if (this._expanded.has(id)) {
            this._expanded.delete(id);
        } else {
            this._expanded.add(id);
        }
    };
    /**
     * Is expanded
     * @param {string} id
     * @return {boolean}
     */
    ListData.prototype.isExpanded=function(id) {
        return this._expanded.has(id);
    };



    /**
     * Check if node is selected
     * @param {DataNode} node
     * @return {boolean}
     */
    ListData.prototype.isSelected=function(node){
        var id = this._data.getId(node);
        return this._selected === id;
    };

    /**
     * Get selected
     * @return {DataNode}
     */
    ListData.prototype.getSelected=function(){
        return this._selected;
    };
    /**
     * Set selected
     * @param {} node
     */
    ListData.prototype.setSelected=function(node){
        this._selected =  this._data.getId(node);
        return this;
    };
    /**
     * Is parent
     * @param {*} entity
     * @return {boolean}
     */
    ListData.prototype.isParent = function(entity){
        return this._data.isParent(entity);

    };
    /**
     * Is error
     * @param {*} entity
     * @return {boolean}
     */
    ListData.prototype.isError = function(entity){
        return this._data.isError(entity);

    };
    /**
     * Is loading
     * @param {*} entity
     * @return {boolean}
     */
    ListData.prototype.isLoading = function(entity){
        return this._data.isLoading(entity);

    };

    /**
     * @inheritDoc
     */
    ListData.prototype.getId = function(entity){
        return entity.getId();
    };
    /**
     * @inheritDoc
     */
    ListData.prototype.getName = function(entity){
        return this._data.getName(entity);
    };
    /**
     * @inheritDoc
     */
    ListData.prototype.getDescription = function(entity){
        return this._data.getDescription(entity);
    };
    /**
     * @inheritDoc
     */
    ListData.prototype.getIcon = function(entity){
        return this._data.getIcon(entity);
    };

    /**
     * @inheritDoc
     */
    ListData.prototype.getChildren = function(){
        return new ListIterator(this._data.getChildren.bind(this._data),this.isExpanded.bind(this));
    };



    return LazyTree;
}();


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * Column collection data
 * @interface mui.IColumnData
 * @augments mui.IEntityCollection
 */
mui.IColumnData = function(){
    var IColumnData = function(){

    };
    /**
     * Can be sorted
     * @abstract
     * @function
     * @param {mui.IEntity}
     *
     */
    IColumnData.prototype.canSort = function(entity){
        throw "must implemented";
    };
    return IColumnData;
}();

/**
 * Grid data
 * @interface mui.IDataGridData
 * @augments mui.IEntityCollection
 */
mui.IDataGridData = function(){
    var IDataGridData = function(){

    };
    /**
     * Get cell name
     * @abstract
     * @function
     * @param {*} rowData
     * @param {*} colData
     * @return {string}
     *
     */
    IDataGridData.prototype.getCellName = function(){
        throw "must implemented";
    };
    return IDataGridData;
}();
/**
 * @callback mui.DataGrid.SortClick
 * @param {string} column id
 * @callback mui.DataGrid.CheckAllClick
 * @param {}
 * @callback mui.DataGrid.CheckBoxClick
 * @param {mui.Event}
 * @callback mui.DataGrid.RowClick
 * @param {mui.Event}
 *
 * @typedef mui.DataGridOptions
 * @property {} onSortClick
 * @property {} onCheckAllClick
 * @property {} onCheckBoxClick
 * @property {} onRowClick
 * @property {bool} checkBoxVisible
 * @property {bool} stripped
 * @property {bool} checkBoxVisible
 * @property {bool} sortEnabled
 * @property {mui.IDataGridData} data
 * @property {mui.IColumnData} columns
 *
 *
 * DataGrid view
 * @class mui.DataGrid
 * @augments mui.Element
 * @param {mui.DataGridOptions} options
 */

mui.DataGrid = function(){
    var DataGrid = function(options){
        if(options==null)options = {};
        mui.Element.call(this,options);
        this.addClass('mui-datagrid');

        this._header = new GridHeader({
            'checkBoxVisible':options['checkBoxVisible'],
            'sortEnabled':options['sortEnabled'],
            'onSortClick':options['onSortClick'],
            'onCheckAllClick':options['onCheckAllClick']
        });
        this._list = new GridList({
            'data':options['data'],
            'scrollbarSizeUpdate':true,
            'onCheckBoxClick':options['onCheckBoxClick'],
            'checkBoxVisible':options['checkBoxVisible'],
            'onRowClick':options['onRowClick'],
            'stripped':options['stripped'],
            'onScrollbarWidthChanged':function(){
                var w = this._list.getScrollbarWidth();
                this._header.setScrollbarWidth(w);
            }.bind(this),
            'onViewPositionChanged':function(top){
                this._header.enableBottomShadow(!!top);
            }.bind(this)
        });
        this._content = this.create('mui-datagrid__content');
        this.add(this._content);
        this._header.attachTo(this._content);
        this._list.attachTo(this._content);

        if(options['columns']){
            this.setColumns(options['columns']);
        }

    };
    mui.inherits(DataGrid,mui.Element );

    /**
     * @override
     */
    DataGrid.prototype.dispose = function(){
        this._header.dispose();
        this._header = null;
        this._list.dispose();
        this._list = null;

        this._content = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set selected
     * @param {string} id
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.setSelected = function(id){
        this._list.setSelected(id);
        return this;

    };
    /**
     * Toggle Check all
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.toggleAll = function(){
        this._header.toggleAllChecked();
        return this;
    };
    /**
     * Toggle Checked
     * @param {string} id
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.toggleChecked = function(id){
        this._list.toggleChecked(id);
        return this;
    };

    /**
     * Update header
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.updateHeader = function(){
        this._header.update();
        return this;

    };

    /**
     * Update
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.update = function(){
        this._list.update();

    };

    /**
     * Set Columns
     * @param {mui.IColumnData} cols
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.setColumns= function (cols) {
        this._header.setColumns(cols);
        this._list.setColumns(cols);
        return this;
    };

    /**
     * Internal list adapter
     * @private
     * @param options
     * @constructor
     */
    var GridList = function(options){
        if(options==null)options = {};
        mui.AbstractLazyViewport .call(this,options);
        this._rowHeight = options['rowHeight'] || 50;
        this.addClass('mui-lazy-list');
        this.addClass('mui-lazy-grid-list');
        this._checkBoxVisible = options['checkBoxVisible'];
        this._checkBoxWidth = options['checkBoxWidth'] || 40;
        this._stripped = options['stripped'];
        this._clickHandler = function(evt){
            var found,args;
            if(options['onCheckBoxClick']){
                found = this.closest(evt.target, 'mui-lay-grid-list__checkbox-icon');
                if (found) {
                    args = new mui.Event(this, this._idToNodeMappings.get(found.__id),evt);
                    options['onCheckBoxClick'](args);
                    if (args.isStopped()) {
                        return;
                    }
                }

            }
            if(options['onRowClick']) {
                found = this.closest(evt.target, 'mui-lazy-grid-list__row');
                if (found) {
                    args = new mui.Event(this,this._idToNodeMappings.get(found.__id),evt);
                    options['onRowClick'](args);
                    if (args.isStopped()) {
                        return;
                    }
                }
            }

        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        this._selected = null;
        this._checked = new Set();
        this._content = this.create({'type':'table','className':'mui-lazy-grid-list__table'});
        this.add(this._content);
        this._data = options['data'];
        this.update();

    };
    mui.inherits(GridList,mui.AbstractLazyViewport );

    GridList.prototype.dispose = function(){
        this.getElement().removeEventListener('click',this._clickHandler);
        this._clickHandler=null;
        this._idToNodeMappings =null;
        this._idToElementMappings = null;
        this._checked=null;
        this._data = null;
        this._content = null;
        mui.AbstractLazyViewport.prototype.dispose.call(this);
    };

    GridList.prototype.setColumns = function(col){
        this._columns = col;
        this.update();
    };

    GridList.prototype.willRender = function(){
        this._idToNodeMappings =new Map();
        this._idToElementMappings = new Map();
        this._counter=0;
    };
    GridList.prototype.removeChecked = function(id){
        this._checked.delete(id);
        var elm = this._idToElementMappings.get(id);
        if(elm==null)return;
        elm.childNodes[0].childNodes[0].classList.remove('mui-lay-grid-list__checkbox-icon--checked');
    };
    GridList.prototype.addChecked = function(id){
        this._checked.add(id);
        var elm = this._idToElementMappings.get(id);
        if(elm==null)return;
        elm.childNodes[0].childNodes[0].classList.add('mui-lay-grid-list__checkbox-icon--checked');
    };
    GridList.prototype.toggleChecked = function(id){
        if(this._checked.has(id)){
            this.removeChecked(id);
        }else {
            this.addChecked(id);
        }
    };
    GridList.prototype.setSelected = function(id){
        if(this._selected===id)return;
        var elm = this._idToElementMappings.get(this._selected);
        if(elm){
            elm.classList.remove('mui-lazy-grid-list__row--selected');
        }
        this._selected = id;

        elm = this._idToElementMappings.get(this._selected);
        if(elm){
            elm.classList.add('mui-lazy-grid-list__row--selected');
        }

    };
    GridList.prototype.getSelected = function(){
        return this._selected;
    };
    GridList.prototype.wasRendered = function(){
        var group =this.create({'type':'colgroup'});
        var columnIt = this._columns.getChildren();

        var idx=0;
        while(columnIt.hasNext()) {
            var col = columnIt.next();
            var colE = this.create({'type':'col'});
            if(idx==0 && this._checkBoxVisible){
                colE.style.width = this._checkBoxWidth+'px';
            }
            group.add(colE);
            idx++;
        }
        this._content.insertBefore(group,this._content.firstChild);
    };

    /**
     * @inheritDoc
     */
    GridList.prototype.renderContent = function(context){


        var  minTop = context.getTop();

        var topHeight = 0;
        var bottomHeight = 0;

        var bottomLimit =context.getBottom();

        var runningHeight = 0;

        var visibleFragment = document.createDocumentFragment();

        var rowHeight = this._rowHeight;

        var  viewPortHeight = bottomLimit-minTop;

        var it = this._data.getChildren();
        var renderedNodes = new Set();
        while(it.hasNext() && viewPortHeight>0){
            var nodeData = it.next();
            var rHeight = typeof rowHeight=='function'?rowHeight(nodeData):rowHeight;
            if(runningHeight>bottomLimit){
                bottomHeight+=rHeight;
                this._counter++;
                continue;
            }
            runningHeight +=rHeight;
            if(runningHeight+rowHeight<minTop){
                topHeight+=rHeight;
                this._counter++;
                continue;
            }
            renderedNodes.add(nodeData);
            var rowElement = this.createRow(nodeData,it);
            if(rowElement==null)continue;
            rowElement.style.height = rHeight+'px';
            rowElement.style.lineHeight = rHeight+'px';
            visibleFragment.appendChild(rowElement);
        }
        var topSpacerElm = this.create({'type':'tr','className':'mui-lazy-list__top-spacer'});
        topSpacerElm.style.height = topHeight+'px';
        var bottomSpacerElm = this.create({'type':'tr','className':'mui-lazy-list__bottom-spacer'});
        bottomSpacerElm.style.height = bottomHeight+'px';
        this._content.clear();
        this._content.add(topSpacerElm,visibleFragment,bottomSpacerElm);
    };


    GridList.prototype.createRow = function(rowData,it){
        var data = this._data;
        if(data==null){
            return ;
        }
        var id = data.getId(rowData);
        this._idToNodeMappings.set(id,rowData);
        var row = this._template;

        var columnIt;
        if(row==null) {
            row = this.create({
                'className': 'mui-lazy-grid-list__row',
                'type':'tr'
            });

            var rowFragment = document.createFrag();
            var cellElement = null;

            if(this._checkBoxVisible) {
                rowFragment.add(
                    this.create({'className': 'mui-lazy-grid-list__cell mui-lazy-grid-list__left-corner-cell','type': 'span'}).add(
                        this.create({'className':'mui-lay-grid-list__checkbox-icon','type':'button'})
                    )
                );
            }


            var i=0;
            columnIt = this._columns.getChildren();

            while(columnIt.hasNext()){
                var col = columnIt.next();
                cellElement = this.create({
                    'className': 'mui-lazy-grid-list__cell mui-lazy-grid-list__data-cell',
                    'type':'td'
                });
                if(i==0){
                    var icon = this.create({
                        "className":'mui-lazy-grid-list__cell-icon',
                        'type':'span'
                    });
                    cellElement.appendChild(icon);
                }
                var cellName = this.create({
                    'className':'mui-lazy-grid-list__cell-name',
                    'type':'span'
                });
                cellName.textContent = data.getCellName(rowData,col);
                cellElement.appendChild(cellName);

                rowFragment.appendChild(cellElement);
                i++;
            }
            row.appendChild(rowFragment);
            // row.style.gridTemplateColumns ='40px '+ data.getColumnsCssTemplate();
            this._template = row;
        }
        row = this._template.cloneNode(true);
        var counter = 0;
        var idx = 0;
        columnIt = this._columns.getChildren();

        while(columnIt.hasNext()) {
            var col = columnIt.next();
            //skip one for checkbox
            if(this._checkBoxVisible) {
                idx = ++counter;
            }
            if(idx==1){
                //icon
                var icon = data.getIcon(rowData);
                if(icon) {
                    row.childNodes[idx].firstChild.classList.add(icon);
                }
            }
            row.childNodes[idx].lastChild.textContent = (data.getCellName(rowData,col));
        }
        row.__id = id;
        if(this._selected===id){
            row.classList.add('mui-lazy-grid-list__row--selected');
        }
        if(this._checkBoxVisible){
            row.childNodes[0].childNodes[0].__id = id;
            if(this._checked.has(id)){
                row.childNodes[0].childNodes[0].classList.add('mui-lay-grid-list__checkbox-icon--checked');
            }
        }
        if(this._stripped){
            row.classList.add(this._counter%2==0?'mui-lazy-grid-list__row--even':'mui-lazy-grid-list__row--odd');
        }
        this._counter++;
        this._idToElementMappings.set(id,row);
        return row;
    };

    var GridHeader = function(options){
        mui.Element.call(this,{
            'type':'table',
            'className':'mui-lazy-grid-header'
        });
        this._row = this.create({'type':'tr','className':'mui-lazy-grid-header__row'});
        this.add(this._row);
        this._columnSizes = new Map();
        this._checkBoxVisible = options['checkBoxVisible'];
        this._checkBoxWidth = options['checkBoxWidth'] || 40;
        this._scrollbarWidth = options['scrollbarWidth'];
        this._sortEnabled = options['sortEnabled'];
        this._isAllChecked = options['isAllChecked'];


        this._clickHandler = function(evt){
            var found;
            if(options['onCheckAllClick']){
                found = this.closest(evt.target,'mui-lazy-grid-header__checkbox-icon');
                if(found){
                    options['onCheckAllClick']();
                    return;
                }

            }
            if(this._sortEnabled===true && options['onSortClick']) {
                found = this.closest(evt.target, 'mui-lazy-grid-header__sort-btn');
                if (found) {
                    options['onSortClick'](found.__id);
                }
            }
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);

    };
    mui.inherits(GridHeader,mui.Element);
    GridHeader.prototype.dispose = function(){

        this.getElement().removeEventListener('click',this._clickHandler);
        this._clickHandler=null;

        this._columns=null;
        this._row=null;
        this._columnSizes=null;

        mui.Element.prototype.dispose.call(this);

    };
    GridHeader.prototype.setScrollbarWidth = function(w){
        this._scrollbarWidth = w;
        this.update();
        return this;

    };
    GridHeader.prototype.update = function(){
        var columns = this._columns;
        var it = columns.getChildren();
        this._row.clear();
        if(this._checkBoxVisible){
            var cb =this.create({'type':'span','className':'mui-lazy-grid-header__cell mui-lazy-grid-header__left-corner-cell'}).add(
                this.create({'type':'button','className':'mui-lazy-grid-header__checkbox-icon '+(this._isAllChecked?'mui-lazy-grid-header__checkbox-icon--checked':'')})
            );
            cb.style.width = this._checkBoxWidth+'px';
            this._row.add(cb);
        }
        while(it.hasNext()){
            var col = it.next();
            var id = columns.getId(col);
            var columnName = columns.getName(col);
            var canSort = columns.canSort(col);
            var td = this.create({'type':'td','className':'mui-lazy-grid-header__cell mui-lazy-grid-header__data-cell '});
            if(canSort){
                var sortDir = columns.getSortDirection(col);
                var sortBtn = this.create({'type':'button','className':'mui-lazy-grid-header__sort-btn '+(sortDir=='asc'?'mui-lazy-grid-header__sort-btn--asc':'mui-lazy-grid-header__sort-btn--dsc')});
                sortBtn.__id = id;
                td.add(
                    this.create('mui-lazy-grid-header__container').add(
                        this.create({'type':'span','className':'mui-lazy-grid-header__label','text':columnName}),
                        sortBtn
                    )
                );
            }else{
                td.textContent = columnName;
            }
            td.__id = id;
            this._row.add(td);
        }
        if(this._scrollbarWidth){
            var scrollbar =this.create({'type':'span','className':'mui-lazy-grid-header__cell mui-lazy-grid-header__right-corner-cell'});
            scrollbar.style.width = this._scrollbarWidth+'px';
            this._row.add(scrollbar);
        }
    };
    GridHeader.prototype.toggleAllChecked= function(){
        this._isAllChecked = !this._isAllChecked;
        this.update();

    };
    GridHeader.prototype.enableBottomShadow= function(bool){
        if(this._bottomShadow===bool){
            return;
        }
        this._bottomShadow = bool;
        if(bool){
            this.addClass('mui-lazy-grid-header--shadow');
        }else{
            this.removeClass('mui-lazy-grid-header--shadow');
        }
    };
    GridHeader.prototype.setColumns = function(columns){
        this._columns = columns;
        this.update();
    };


    GridHeader.prototype.setColumnSize = function(id,size){
        this._columnSizes.set(id,size);
    };


    return DataGrid;

}();


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @typedef mui.SplitContainerOptions
 * @property {string} position north, west, south or east
 * @property {number} subWidth
 * @property {number} subHeight
 * @property {boolean} subResizable
 * @property {mui.Element} mainContent
 * @property {mui.Element} subContent
 * @property {function} onSizeChanged
 *
 * SplitContainer layout
 * @class mui.SplitContainer
 * @augments mui.Element
 * @param {mui.SplitContainerOptions} options
 */
mui.SplitContainer = (function () {
    var resizierLocationMappings = {
        'north':'south',
        'south':'north',
        'west':'east',
        'east':'west'
    };
    var marginLocationMappings = {
        'north':'marginTop',
        'south':'marginBottom',
        'west':'marginRight',
        'east':'marginLeft'
    };

    var SplitContainer = function (options) {
        if(options==null){
            options = {};
        }
        mui.Element.call(this, options);
        this._pos = options['position'] || 'west';
        this._onSizeChanged = options['onSizeChanged'];
        this._animClass = 'mui-split-container__sub--anim';

        this.addClass('mui-split-container');
        this.addClass(this._pos=='north' || this._pos=='south'?'mui-v-container':'mui-h-container')
        this._main = this.create('mui-split-container__main');
        this.add(this._main);

        this._sub = new mui.ResizableContainer({
            'width':options['subWidth'],
            'height':options['subHeight'],
            'position':resizierLocationMappings[this._pos],
            'resizable':options['subResizable'],
            'parentBoundGetter':function(){
                return this.getElement().getBoundingClientRect();
            }.bind(this),
            'onChanged':function(sub){
                if(this._pos=='north'){

                }
            }.bind(this)
        });
        this._sub.addClass('mui-split-container__sub');
        this._sub.addClass('mui-split-container__sub--'+this._pos);
        // this._sub.attachTo(this.getElement());

        if(options['subVisible']==false){
            this.hideSub(false);
        }else {
            this.showSub(false);
        }
        if(options['mainContent']){
            this.setMainContent(options['mainContent']);
        }
        if(options['subContent']){
            this.setSubContent(options['subContent']);
        }

    };
    mui.inherits(SplitContainer, mui.Element);

    /**
     * @override
     */
    SplitContainer.prototype.dispose = function () {
        if(this._onAnimFinished){
            this.getElement().removeEventListener(this.getTransitionName(),this._onAnimFinished);
            this._onAnimFinished = null;
        }
        if(this._mainContent){
            this._mainContent.detach();
            this._mainContent = null;
        }
        if(this._subContent){
            this._subContent.detach();
            this._subContent = null;

        }
        this._sub.dispose();
        this._onSizeChanged = null;
        this._sub = null;
        this._main = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Get Main Content
     * @return {mui.Element}
     */
    SplitContainer.prototype.getMainContent = function(){
        return this._mainContent;

    };

    /**
     * Get Sub Content
     * @return {mui.Element}
     */
    SplitContainer.prototype.getSubContent = function(){
        return this._subContent;
    };

    /**
     * Set Main Content
     * @param {mui.Element} child
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.setMainContent = function(child){
        if(this._mainContent){
            this._mainContent.detach();
        }
        child.attachTo(this._main);
        this._mainContent = child;
        return this;
    };

    /**
     * Set Sub Content
     * @param {mui.Element} child
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.setSubContent = function(child){
        if(this._subContent){
            this._subContent.detach();
        }
        child.attachTo(this._sub);
        this._subContent = child;
        return this;

    };

    /**
     * Toggle sub visible
     * @param {boolean} bool
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.toggleSub = function(bool){
        if(bool==null){
            bool = !this.isSubVisible();
        }
        if(bool){
            this.showSub();
        }else{
            this.hideSub();
        }
        return this;
    };
    SplitContainer.prototype._startAnim = function(callback){
        if(this._animEnd){
            this.getElement().removeEventListener(this.getTransitionName(), this._animEnd);
            this._animEnd = null;
        }
        this._animEnd = function(evt){
            if(!evt.target.classList.contains(this._animClass))return;
            this._sub.removeClass(this._animClass);
            this.getElement().removeEventListener(this.getTransitionName(),this._animEnd);
            this._animEnd = null;
            if(callback){
                callback();
            }
        }.bind(this);
        this.getElement().addEventListener(this.getTransitionName(), this._animEnd);
        this._sub.addClass(this._animClass);
    };

    /**
     * Is Sub Visible
     * @return {boolean}
     */
    SplitContainer.prototype.isSubVisible = function(){
        return this._sub.getParent();
    };
    /**
     * Hide Sub
     * @param {boolean} anim
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.hideSub = function(anim){
        if(this._sub.getParent()==null)return this;
        if(anim===false){
            this._sub.detach();
            if(this._onSizeChanged){
                this._onSizeChanged();
            }
            return this;
        }
        this._sub.getElement().style[marginLocationMappings[this._pos]] = '-'+(this._pos=='north' || this._pos=='south'?this._sub.getHeight():this._sub.getWidth())+'px';
        this._startAnim(function(){
            this._sub.detach();
            if(this._onSizeChanged) {
                this._onSizeChanged();
            }
        }.bind(this));
        return this;


    };

    /**
     * Show Sub
     * @param {boolean} anim
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.showSub = function(anim){
        if(this._sub.getParent())return this;
        this._sub.attachTo(this.getElement()); //has parent now
        if(anim===false){
            if(this._onSizeChanged){
                this._onSizeChanged();
            }
            return  this;
        }
        //Need 3 frames for animation,this is the only way to sync animation (using margin)
        //1. add to dom, 2.calculate amount to animate. 3. animate to screen
        requestAnimationFrame(function(){
            var dim = (this._pos=='north' || this._pos=='south'?this._sub.getHeight():this._sub.getWidth());
            this._sub.getElement().style[marginLocationMappings[this._pos]] = '-'+dim+'px';
            requestAnimationFrame(function(){
                this._sub.getElement().style[marginLocationMappings[this._pos]] = '0px';
                this._startAnim(function(){
                    if(this._onSizeChanged) {
                        this._onSizeChanged();
                    }
                }.bind(this));

            }.bind(this));

        }.bind(this));
        return this;

    };

    return SplitContainer;
})();

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * ResizableContainer
 * @class mui.ResizableContainer
 * @augments mui.Element
 * @param {Object} options
 * @param {number} options.minSize
 * @param {string} options.position top,left,right,bottom
 * @param {function} parentBoundGetter
 */
mui.ResizableContainer = (function () {
    var MIN_SIZE = 30;
    var ResizableContainer = function (options) {
        if(options==null){
            options = {};
        }
        this._minSize = MIN_SIZE|| options['minSize'];
        mui.Element.call(this, options);
        this.addClass('mui-resizable');
        if(options['position']){
            this.setResizerLocation(options['position']);
        }
        this._parentBoundGetter = options['parentBoundGetter'];

    };
    mui.inherits(ResizableContainer, mui.Element);

    /**
     * @override
     */
    ResizableContainer.prototype.dispose = function () {
        this.detachEvent(this._north);
        this.detachEvent(this._west);
        this.detachEvent(this._east);
        this.detachEvent(this._south);
        this._parentBoundGetter = null;
        this._north =null;
        this._west = null;
        this._south = null;
        this._east = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Disable resizer
     */
    ResizableContainer.prototype.disableResizer = function(){
        this._resizer.removeFromParent();

    };


    /**
     * Enable resizer
     */
    ResizableContainer.prototype.enableResizer = function(){
        if(this._resizer && this._resizer.parentNode==null){
            this.add(this._resizer);
        }
    };

    /**
     * Set resizer location
     * @param {string} pos top,left,bottom,right
     */
    ResizableContainer.prototype.setResizerLocation = function(pos){
        if(this._resizer && this._resizer.__position==pos){
            return;
        }
        var className = 'mui-resizable__resizer mui-resizable__'+pos+'-resizer';
        if(this._resizer==null){
            this._resizer = this.create(className);
            this.add(this._resizer);
        }else{
            this._resizer.className = className;
            this.detachEvent(this._resizer);
        }
        this._resizer.__position = pos;

        if(pos =='north') {
            this._initializeNorth(this._resizer);
        }
        if(pos =='west') {
            this._initializeWest(this._resizer);
        }
        if(pos =='east') {
            this._initializeEast(this._resizer);
        }
        if(pos=='south') {
            this._initializeSouth(this._resizer);
        }
    };

    ResizableContainer.prototype._initializeNorth = function (ele) {
        this.attachEvent(ele,{
            'onActivated':function(evt){
                this._max = evt.rect.bottom;
                this._min = this._parentBoundGetter?this._parentBoundGetter().top:-Math.Infinity;
                this._offset = (evt.clientY -evt.resizerRect.top );
            }.bind(this),
            'onChanged':function(evt){
                if(evt.clientY>this._max-this._minSize || evt.clientY<this._min+this._minSize){
                    return;
                }
                this.setHeight(this._max-evt.clientY+ this._offset);
            }.bind(this)
        });

    };
    ResizableContainer.prototype._initializeWest = function (ele) {
        this.attachEvent(ele,{
            'onActivated':function(evt){
                this._min = evt.rect.left;
                this._max = this._parentBoundGetter?this._parentBoundGetter().right:Math.Infinity;
                this._offset = (evt.resizerRect.right - evt.clientX);
            }.bind(this),
            'onChanged':function(evt){
                if(evt.clientX<this._min+this._minSize || evt.clientX>this._max-this._minSize){
                    return;
                }
                this.setWidth(evt.clientX - this._min + this._offset);
            }.bind(this)
        });
    };
    ResizableContainer.prototype._initializeEast = function (ele) {
        this.attachEvent(ele,{
            'onActivated':function(evt){
                this._max = evt.rect.right;
                this._min = this._parentBoundGetter?this._parentBoundGetter().left:-Math.Infinity;
                this._offset = evt.clientX -evt.resizerRect.left;
            }.bind(this),
            'onChanged':function(evt){
                if(evt.clientX>this._max-this._minSize || evt.clientX<this._min+this._minSize){
                    return;
                }
                this.setWidth(this._max - evt.clientX + this._offset);
            }.bind(this)
        });

    };
    ResizableContainer.prototype._initializeSouth = function (ele) {
        this.attachEvent(ele,{
            'onActivated':function(evt){
                this._min = evt.rect.top;
                this._max = this._parentBoundGetter?this._parentBoundGetter().bottom:Math.Infinity;
                this._offset =(evt.resizerRect.bottom - evt.clientY);
            }.bind(this),
            'onChanged':function(evt){
                if(evt.clientY<this._min+this._minSize || evt.clientY>this._max-this._minSize){
                    return;
                }
                this.setHeight(evt.clientY - this._min + this._offset);
            }.bind(this)
        });
    };
    ResizableContainer.prototype.detachEvent = function (resizer) {
        if(resizer.__mouseDownHandler==null)return;
        resizer.removeEventListener('mousedown',resizer.__mouseDownHandler);
        resizer.__mouseDownHandler = null;
    };
    ResizableContainer.prototype.attachEvent = function (resizer,options) {
        var handler = function(evt){
            if(resizer._activated)return;
            resizer._activated = true;

            this._onMouseMove =function(evt){
                if(!resizer._activated)return;
                if(options['onChanged']){
                    options['onChanged'](evt);
                }
            }.bind(this);
            this._onMouseUp =function(evt){
                if(!resizer._activated)return;
                resizer._activated = false;
                document.removeEventListener('mousemove', this._onMouseMove);
                document.removeEventListener('mouseup', this._onMouseUp);
                this._onMouseMove = null;
                this._onMouseUp = null;
                if(options['onDeactivated']){
                    options['onDeactivated']();
                }
            }.bind(this);

            document.addEventListener('mousemove', this._onMouseMove);
            document.addEventListener('mouseup', this._onMouseUp);
            if(options['onActivated']){
                var resizerRect = resizer.getBoundingClientRect();
                var rect = this.getElement().getBoundingClientRect();
                options['onActivated']({
                    resizerRect:resizerRect,
                    rect:rect,
                    clientX:evt.clientX,
                    pageX:evt.pageX,
                    clientY:evt.clientY,
                    pageY:evt.pageY
                });
            }
        }.bind(this);
        resizer.addEventListener('mousedown',handler);
        resizer.__mouseDownHandler = handler;
        return handler;

    };

    return ResizableContainer;
})();


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Panel.HeaderActionClick
 * @param {string} id
 *
 * @callback mui.Panel.FooterActionClick
 * @param {string} id
 *
 * @callback mui.Panel.Close
 *
 * @typedef mui.PanelOptions
 * @property {mui.Panel.HeaderActionClick} onHeaderActionClick
 * @property {mui.Panel.FooterActionClick} onFooterActionClick
 * @property {mui.Panel.Close} onClose
 * @property {boolean} footerVisible
 * @property {mui.IEntityCollection} headerActions
 * @property {mui.IEntityCollection} footerActions
 * @property {mui.Element} content
 *
 * @property {string} title
 * @property {string} titleDescription
 * @property {string} headerIcon
 * @property {boolean} showDropdown
 * @property {mui.Style} headerStyle
 *
 *
 * Panel
 * @constructor
 * @class mui.Panel
 * @augments mui.Element
 * @param {mui.PanelOptions} options
 *
 */
mui.Panel = function(){
    var btnTypeToClass = {
        'alert':'mui-button-alert',
        'primary':'mui-button-primary',
        'accent':'mui-button-accent',
        'link':'mui-button-link'
    };
    var Panel = function(options){
        mui.Element.call(this,options);
        this.addClass('mui-panel');
        this._headerActionClickHandler = options['onHeaderActionClick'];
        this._footerActionClickHandler = options['onFooterActionClick'];

        this._header = this.create('mui-panel__header');
        this._leftContainer = this.create('mui-panel__left-header');
        this._titleBtn = new mui.Button({
            'className':'mui-button-link',
            'label':options['title'],
            'description':options['titleDescription'],
            'icon':options['headerIcon'],
            'isDropdown':options['showDropdown']
        });
        if(options['headerStyle']){
            options['headerStyle'].apply(this._header);
        }

        this._rightActionContainer = this.create('mui-panel__right-actions');
        this._header.add(this._leftContainer,this._rightActionContainer);


        this._body = new mui.Content({
            'className':'mui-panel__body'
        });
        this.add(this._header);
        this._body.attachTo(this.getElement());

        if(options['onClose']){
            this._closeBtn = new  mui.Button({
                'icon':'mui-panel__close-icon',
                'className':'mui-panel__header-close-btn  mui-button-link',
                'onClick':options['onClose'].bind(null,this)
            });
            this._closeBtn.attachTo(this._header);
        }

        this._titleBtn.attachTo(this._leftContainer);

        if(options['footerVisible']){
            this._footer = this.create('mui-panel__footer');
            this.add(this._footer);
        }
        if(options['title']){
            this.setTitle(options['title']);
        }
        if(options['titleDescription']){
            this.setTitleDescription(options['titleDescription']);
        }
        if(options['headerActions']){
            this.setHeaderActions(options['headerActions']);
        }
        if(options['footerActions']){
            this.setFooterActions(options['footerActions']);
        }
        if(options['content']){
            this.setContent(options['content']);
        }else {
            this._body.showMessage('Empty');
        }
    };
    mui.inherits(Panel,mui.Element);

    /**
     * @inheritDoc
     */
    Panel.prototype.dispose = function(){
        if(this._closeBtn) {
            this._closeBtn.detach();
            this._closeBtn.dispose();
            this._closeBtn = null;
        }
        if(this._titleBtn){
            this._titleBtn.detach();
            this._titleBtn.dispose();
            this._titleBtn = null;
        }
        this._body.detach();
        this._body.dispose();
        this._body = null;
        this._headerActionClickHandler = null;
        this._footerActionClickHandler = null;
        this._header =null;
        this._leftContainer = null;
        this._rightActionContainer = null;
        this._footer =null;

        mui.Element.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    Panel.prototype.setTitle = function(text){
        this._titleBtn.setLabel(text);
        return this;
    };
    /**
     * Set title description
     * @param {string} text
     * @return {mui.Panel}
     */
    Panel.prototype.setTitleDescription = function(text){
        this._titleBtn.setDescription(text);
        return this;
    };
    /**
     * Set content
     * @param { mui.Element} content
     * @return {mui.Panel}
     */
    Panel.prototype.setContent = function(content){
        this._body.setChild(content);
        return this;
    };

    /**
     * Set Header Actions
     * @param {mui.IEntityCollection} actions
     * @return {mui.Panel}
     */
    Panel.prototype.setHeaderActions = function(actions){
        this._headerActions = actions;
        this.updateHeaderActions();
        return this;
    };
    /**
     * Update header actions
     * @return {mui.Panel}
     */
    Panel.prototype.updateHeaderActions = function(){
        this._clearHeaderCachedActions();
        var actions = this._headerActions;
        var it = actions.getChildren();
        var arr = [];
        while(it.hasNext()){
            var act = it.next();
            var btn = new mui.Button({
                'label':actions.getName(act),
                'icon':actions.getIcon(act),
                'className':'mui-panel__header-btn  mui-button-link',
                'onClick':this._handleHeaderActionClick.bind(this,actions.getId(act))
            });
            btn.attachTo(this._rightActionContainer);
            arr.push(btn);
        }
        this._cachedHeaderActions = arr;
        return this;
    };
    Panel.prototype._clearHeaderCachedActions = function(){
        if(this._cachedHeaderActions){
            this._cachedHeaderActions.forEach(function(btn){
                btn.detach();
                btn.dispose();
            });
            this._cachedHeaderActions =null;
        }
    };
    Panel.prototype._handleHeaderActionClick = function(id){
        if(this._headerActionClickHandler){
            this._headerActionClickHandler(id);
        }
    };
    /**
     * Set footer Actions
     * @param {mui.IEntityCollection} actions
     * @return {mui.Panel}
     */
    Panel.prototype.setFooterActions = function(actions){
        this._footerActions = actions;
        this.updateFooterActions();
        return this;

    };

    /**
     * Update footer actions
     * @return {mui.Panel}
     */
    Panel.prototype.updateFooterActions = function(){
        if(this._footer==null)return this;
        this._clearFooterCachedActions();
        var actions = this._footerActions;
        var it = actions.getChildren();
        var arr = [];
        while(it.hasNext()){
            var act = it.next();
            var classN = btnTypeToClass[actions.getType(act)];
            var btn = new mui.Button({
                'label':actions.getName(act),
                'icon':actions.getIcon(act),
                'className':'mui-panel__footer-btn  '+classN,
                'onClick':this._handleFooterClick.bind(this,actions.getId(act))
            });
            btn.attachTo(this._footer);
            arr.push(btn);

        }
        this._cachedFooterActions = arr;
        return this;
    };
    Panel.prototype._clearFooterCachedActions = function(){
        if(this._cachedFooterActions){
            this._cachedFooterActions.forEach(function(btn){
                btn.detach();
                btn.dispose();
            });
            this._cachedFooterActions = null;
        }
    };
    Panel.prototype._handleFooterClick = function(id){
        if(this._footerActionClickHandler){
            this._footerActionClickHandler(id);
        }
    };
    return Panel;
}();


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Tab.Factory
 * @param {string} id
 *
 * @callback mui.Tab.HeaderItemClick
 * @param {mui.Event} evt
 *
 * Tab
 * @typedef mui.TabOptions
 * @property {string} active
 * @property {string} headerClassName
 * @property {boolean} stretchHeader *
 * @property {mui.IEntityCollection} items
 * @property {mui.Tab.Factory} factory
 * @property {...mui.Element} leftChildren
 * @property {...mui.Element} rightChildren
 * @property {} headerStyle
 * @property {mui.Tab.HeaderItemClick} onHeaderItemClick
 *
 * @class mui.Tab
 * @augments mui.Element
 * @param {mui.TabOptions} options
 *
 */
mui.Tab = function(){
    var Tab = function(options){
        mui.Element.call(this,options);
        this._active = options['active'];
        this._onHeaderItemClick = options['onHeaderItemClick'];
        this._factories = options['factory'];
        this._cachedContents = new Map();
        this._cachedHeaders = new Map();

        this.addClass('mui-tab');
        this._headerE = this.create('mui-tab__header '+(options['headerClassName']?options['headerClassName']:''));
        this._leftHeaderE = this.create('mui-tab__left-header-container');
        this._rightHeaderE = this.create('mui-tab__right-header-container');
        this._itemsContainer = this.create('mui-tab__items-container '+(options['stretchHeader']?'mui-tab__items-container--stretch':''));
        this._headerE.add(this._itemsContainer);
        this._bodyE = new mui.Content({
            'className':'mui-tab__body'
        });
        this.add(this._headerE);
        this._bodyE.attachTo(this.getElement());
        if(options['items']){
            this.setItems(options['items']);
        }
        if(options['leftChildren']){
            this.showLeftContent.apply(this,options['leftChildren']);
        }
        if(options['rightChildren']){
            this.showRightContent.apply(this,options['rightChildren']);
        }
        if(options['headerStyle']){
            options['headerStyle'].apply(this._headerE);
        }

    };
    mui.inherits(Tab,mui.Element);

    /**
     * @inheritDoc
     */
    Tab.prototype.dispose = function(){
        this._clear();
        this._bodyE.detach();
        this._bodyE.dispose();
        this._bodyE = null;

        this._onHeaderItemClick = null;
        this._factory = null;
        this._cachedContents = null;
        this._cachedHeaders = null;

        this._headerE =null;
        this._leftHeaderE = null;
        this._rightHeaderE = null;
        this._itemsContainer = null;

        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Set Items
     * @param {mui.IEntityCollection} iCollection
     * @return {mui.Tab}
     */
    Tab.prototype.setItems = function(iCollection){
        this._items = iCollection;
        this.update();
        return this;
    };

    /**
     * Set Active
     * @param {string} id
     * @return {mui.Tab}
     */
    Tab.prototype.setActive = function(id){
        this._hideError();
        var activeE =this._cachedHeaders.get(this._active);
        if(activeE){
            activeE.removeClass('mui-tab__header-item--active');
        }
        activeE = this._cachedHeaders.get(id);
        if(activeE){
            activeE.addClass('mui-tab__header-item--active');
        }
        activeE = this._cachedContents.get(this._active);
        if(activeE){
            activeE.detach();
        }
        activeE = this._cachedContents.get(id);
        if(activeE==null && this._factories){
            activeE = this._factories(id);
        }
        if(activeE) {
            this._bodyE.setChild(activeE);
        }else{
            this._showMessage("Empty");
        }
        this._cachedContents.set(id,activeE);
        this._active = id;
        return this;
    };

    /**
     * Set Left Content
     * @param {...mui.Element} content
     * @return {mui.Tab}
     */
    Tab.prototype.showLeftContent = function(content){
        if(this._leftHeaderE.parentNode==null){
            this._headerE.insertBefore(this._leftHeaderE,this._itemsContainer);
        }
        for(var i=0;i<arguments.length;i++) {
            arguments[0].attachTo(this._leftHeaderE);
        }
        return this;
    };

    /**
     * Set Right Content
     * @param {...mui.Element}
     * @return {mui.Tab}
     */
    Tab.prototype.showRightContent = function(content){
        if(this._rightHeaderE.parentNode==null){
            this._headerE.add(this._rightHeaderE);
        }
        for(var i=0;i<arguments.length;i++) {
            arguments[0].attachTo(this._rightHeaderE);
        }
        return this;
    };


    Tab.prototype._clear = function(){
        if(this._cachedHeaders){
            this._cachedHeaders.forEach(function(btn){
                btn.detach();
                btn.dispose();
            });
            this._cachedHeaders = new Map();
        }
        if(this._cachedContents){
            this._cachedContents.forEach(function(iElement){
                iElement.detach();
            });
            this._cachedContents = new Map();
        }
    };

    /**
     * Update
     * @return {mui.Tab}
     */
    Tab.prototype.update = function(){
        this._clear();
        var data = this._items;
        var it = this._items.getChildren();
        var item;
        var cachedHeaders = new Map();
        while(it.hasNext()){
            item = it.next();
            var id = data.getId(item);
            var btn = new mui.Button({
                'icon':data.getIcon(item),
                'label':data.getName(item),
                'onClick':this._handleHeaderItemClick.bind(this,id),
                'className':'mui-tab__header-item'
            });
            btn.attachTo(this._itemsContainer);
            cachedHeaders.set(id,btn);
        }
        this._cachedHeaders = cachedHeaders;
        var headerE = cachedHeaders.get(this._active);
        if(headerE){
            headerE.addClass('mui-tab__header-item--active');
        }
        if(this._factory==null)return this;
        var view= this._factory(this._active);
        if(view) {
            view.attachTo(this._body);
        }else{
            this._showMessage("Empty");
        }
        return this;
    };
    Tab.prototype._hideError = function(){
        this._bodyE.hideMessage();
    };
    Tab.prototype._showMessage = function(message,icon){
        this._bodyE.showMessage(message,icon);

    };
    Tab.prototype._handleHeaderItemClick = function(id,evt){
        if(this._onHeaderItemClick){
            var arg = new mui.Event(this,null,evt);
            this._onHeaderItemClick(arg);
            if(arg.isStopped()){
                return;
            }
        }
        this.setActive(id);

    };
    return Tab;
}();


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.Dialog.BackgroundClick
 * @param {mui.Dialog}
 *
 * @typedef mui.DialogOptions
 * @property {mui.Element} content
 * @property {boolean} modal
 * @property {mui.Dialog.BackgroundClick} onBackgroundClick
 *
 * Dialog view
 * @class mui.Dialog
 * @augments mui.Element
 * @param {mui.DialogOptions} options
 */

mui.Dialog = function(){

    var Dialog = function(options){
        if(options==null)options = {};
        mui.Element.call(this,options);
        this.addClass(['mui-dialog']);
        this._contentContainer = this.create('mui-dialog__content');
        if(options['modal']){
            this._background = this.create("mui-dialog__background");
            this.add(this._background);
            this._background.add(this._contentContainer);
            this._backgroundClickHandler =function(evt){
                if(this._onBackgroundClick){
                    this._onBackgroundClick();
                    return;
                }
            }.bind(this);
            this._background.addEventListener('click',this._backgroundClickHandler);
            this.addClass('mui-dialog--modal');

        }else{
            this.add(this._contentContainer);
        }
        if(options['content']){
            this.setContent(options['content']);
        }
        if(options['onBackgroundClick']){
            this._onBackgroundClick = options['onBackgroundClick'];
        }
        this._contentClickHandler =function(evt){
            evt.stopPropagation();
        }.bind(this);
        this._contentContainer.addEventListener('click',this._contentClickHandler);
    };
    mui.inherits(Dialog,mui.Element );

    /**
     * @override
     */
    Dialog.prototype.dispose = function(){
        this._contentContainer.removeEventListener('click',this._contentClickHandler);
        this._contentClickHandler = null;

        if(this._backgroundClickHandler) {
            this._background.removeEventListener('click', this._backgroundClickHandler);
            this._backgroundClickHandler =null;
        }
        this._onBackgroundClick = null;

        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Set background click callback
     * @param {mui.Dialog.BackgroundClick} fn
     * @return {mui.Dialog}
     */
    Dialog.prototype.onBackgroundClick = function(fn){
        this._onBackgroundClick = fn;
        return this;
    };
    /**
     * @typedef mui.Dialog.ContentOptions
     * @property {mui.Style} style
     *
     * Show dialog
     * @param {mui.Element} content
     * @param {mui.Dialog.ContentOptions} options
     * @return {mui.Dialog}
     */
    Dialog.prototype.setContent = function(content,options){
        if(options==null)options = {};
        if(this._content){
            this._content.detach();
        }
        this._content = content;
        if(this._content==null)return;

        if(options['style']){
            options['style'].apply(this._contentContainer);
        }
        this._content.attachTo(this._contentContainer);
        return this;
    };
    var _dialogs = new Map();
    var _dialogCounter  =0;

    /**
     * @typedef mui.DialogModalOptions
     * @property {?string} id  auto generated if empty
     * @property {?HTMLElement} parent
     * @property {?mui.Element} content
     * @property {?function} onclose
     * @property {?mui.Style } style
     *
     * Show modal dialog
     * @static
     * @param {mui.DialogModalOptions} options
     * @return {string} dialog id
     */
    Dialog.showModal = function(options){
        if(options==null){
            options = {};
        }
        var id = options['id'];
        var parent = options['parent'];
        var content = options['content'];
        if(id==null){
            id=='ivp-dialog-'+(++_dialogCounter);
        }
        var dialogInstance = _dialogs.get(id);
        if(dialogInstance==null){
            dialogInstance = new Dialog({
                'modal':true
            });
            _dialogs.set(id,dialogInstance);
        }
        dialogInstance.detach();
        if(parent==null){
            parent = document.getElementsByTagName('body')[0];
            dialogInstance.makeMeAsRoot();
            dialogInstance.attachTo(parent);
        }else{
            dialogInstance.attachTo(parent);
        }
        dialogInstance.onBackgroundClick(function () {
            if(options['onClose']){
                options['onClose'](Dialog);
                return;
            }
            Dialog.close(id);
        });
        dialogInstance.setContent(content,{
            'style':options['style']
        });
        return id;
    };

    /**
     * Close dialog
     * @static
     * @param {string} id
     */
    Dialog.close = function(id){
        var dialog = _dialogs.get(id);
        if(dialog){
            dialog.detach();
        }
    };
    return Dialog;

}();


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * @interface mui.IStyle
 */
mui.IStyle = function(){
    var IStyle = function () {

    };
    /**
     * Apply style to element
     * @function
     * @abstract
     * @param {HTMLElement} ielement
     */
    IStyle.prototype.apply =function(ielement){
        throw "must implements";
    };
    return IStyle;
}();

/**
 * Style class
 * @class mui.Style
 * @implements {mui.IStyle}
 * @param {object} styles ex. {display:none,padding:10px}
 * @param {Array.<string>} classes
 */
mui.Style = function(){
    var Style = function(styles,classes){
        this._styles = styles==null?{}:styles;
        this._classes = classes?classes:[];
    };
    /**
     * Row based flex container
     * @return {mui.Style}
     */
    Style.prototype.flexRow = function(){
        this._classes.push('mui-flex--ver');
        return this;
    };
    /**
     * Column based flex container
     * @return {mui.Style}
     */
    Style.prototype.flexColumn = function(){
        this._classes.push('mui-flex--hor');
        return this;
    };
    /**
     * Growing flex item
     * @return {mui.Style}
     */
    Style.prototype.flexChildAuto = function(){
        this._classes.push('mui-flex-item--scaled');
        return this;
    };

    /**
     * Align flex items cross axis
     * @param {string} align center,start,end
     * @return {mui.Style}
     */
    Style.prototype.flexContainerCrossAxisAlign = function(align){
        this._classes.push('mui-flex-align__container-cross-axis--'+align);
        return this;
    };
    /**
     * Align flex items main axis
     * @param {string} align center,start,end
     * @return {mui.Style}
     */
    Style.prototype.flexContainerMainAxisAlign = function(align){
        this._classes.push('mui-flex-align__container-main-axis--'+align);
        return this;
    };

    /**
     * Expand child to closes parent who has size
     * @param {string} offsetLeft
     * @param {string} offsetTop
     * @param {string} offsetRight
     * @param {string} offsetBottom
     * @return {mui.Style}
     */
    Style.prototype.expandToParent = function(offsetLeft,offsetTop,offsetRight,offsetBottom){
        this._styles['position'] = 'absolute';
        this._styles['left'] = offsetLeft?offsetLeft:'0px';
        this._styles['right'] = offsetRight?offsetRight:'0px';
        this._styles['bottom'] = offsetBottom?offsetBottom:'0px';
        this._styles['top'] = offsetTop?offsetTop:'0px';
        return this;
    };
    /**
     * Expand child to window
     * @param {string} offsetLeft
     * @param {string} offsetTop
     * @param {string} offsetRight
     * @param {string} offsetBottom
     * @return {mui.Style}
     */
    Style.prototype.expandToViewport = function(offsetLeft,offsetTop,offsetRight,offsetBottom){
        this._styles['position'] = 'fixed';
        this._styles['left'] = offsetLeft?offsetLeft:'0px';
        this._styles['right'] = offsetRight?offsetRight:'0px';
        this._styles['bottom'] = offsetBottom?offsetBottom:'0px';
        this._styles['top'] = offsetTop?offsetTop:'0px';
        return this;
    };
    /**
     * Border
     * @param {string} width
     * @param {string} style
     * @param {string} color
     * @return {mui.Style}
     */
    Style.prototype.border = function(width,style,color){
        if(width!=null) {
            this._styles['borderWidth'] = width;
        }
        if(style!=null) {
            this._styles['borderStyle'] = style;
        }
        if(style!==null) {
            this._styles['borderColor'] = color;
        }
        return this;
    };
    /**
     * Text color
     * @param {string} color
     * @return {mui.Style}
     */
    Style.prototype.color = function(color){
        this._styles['color'] = color;
        return this;
    };
    /**
     * Background
     * @param {string} color
     * @return {mui.Style}
     */
    Style.prototype.background = function(color){
        this._styles['background'] = color;
        return this;
    };
    /**
     * Border radius
     * @param {string | number}number
     * @param {string} where topLeft,topRight,bottomLeft,bottomRight
     * @return {mui.Style}
     */
    Style.prototype.corner = function(number,where){
        number =typeof number=='number'?number+'px':number;
        switch (where){
            case 'topLeft':
                this._styles['borderTopLeftRadius'] = number;
            case 'topRight':
                this._styles['borderTopRightRadius'] = number;
            case 'bottomLeft':
                this._styles['borderBottomLeftRadius'] = number;
            case 'bottomRight':
                this._styles['borderBottomRightRadius'] = number;
            default:
                this._styles['borderRadius'] = number;
        }
        return this;
    };
    /**
     * Padding
     * @param {string | number} number
     * @param {string} where top,left,right,bottom
     * @return {mui.Style}
     */
    Style.prototype.padding = function(number,where){
        number =typeof number=='number'?number+'px':number;
        switch (where){
            case 'right':
                this._styles['paddingRight'] = number;
            case 'left':
                this._styles['paddingLeft'] = number;
            case 'bottom':
                this._styles['paddingBottom'] = number;
            case 'top':
                this._styles['paddingTop'] = number;
            default:
                this._styles['padding'] = number;
        }
        return this;
    };

    /**
     * Margin
     * @param {string | number} number
     * @param {string} where top,left,right,bottom
     * @return {mui.Style}
     */
    Style.prototype.margin = function(number,where){
        number =typeof number=='number'?number+'px':number;
        switch (where){
            case 'right':
                this._styles['marginRight'] = number;
            case 'left':
                this._styles['marginLeft'] = number;
            case 'bottom':
                this._styles['marginBottom'] = number;
            case 'top':
                this._styles['marginTop'] = number;
            default:
                this._styles['margin'] = number;
        }
        return this;
    };

    /**
     * Width
     * @param {number} number
     * @return {mui.Style }
     */
    Style.prototype.width = function(w){
        this._styles['width'] = typeof w=='number'?w+'px':w;
        return this;
    };
    /**
     * Height
     * @param {number} number
     * @return {mui.Style }
     */
    Style.prototype.height = function(h){
        this._styles['height'] = typeof h=='number'?h+'px':h;
        return this;
    };
    /**
     * Background Image
     * @param {string} url
     * @param {string} pos css background position
     * @param {string} size css background size
     * @param {string} repeat css repeat
     * @return {mui.Style }
     */
    Style.prototype.backgroundImage = function(url,pos,size,repeat){
        this._styles['backgroundImage'] ='url("'+ url+'")';
        this._styles['backgroundPosition'] = pos==null?'center':pos;
        this._styles['backgroundSize'] = size==null?'100%':size;
        this._styles['backgroundRepeat'] = repeat==null?'no-repeat':repeat;
        return this;
    };


    /**
     * Class Name
     * @param {string} string
     * @return {mui.Style}
     */
    Style.prototype.addClass = function(string){
        this._classes.push(string);
        return this;
    };

    /**
     * @inheritDoc
     */
    Style.prototype.apply = function(element){
        for (var key in this._styles){
            if(!this._styles.hasOwnProperty(key))continue;
            element.style[key] = this._styles[key];
        }
        element.className = element.className +' '+this._classes.join(" ");
        return this;
    };
    return Style;
}();



/**
 * @class mui.Theme
 * @augments mui.Style
 *
 */
mui.Theme = function(){
    var Theme = function(styles,classes){
        mui.Style.call(this,styles,classes);
    };

    mui.inherits(Theme,mui.Style);
    /**
     * Theme padding
     * @param {string} type small,medium,large
     * @param {string} where left,right,bottom,all
     * @return {mui.Style}
     */
    Theme.prototype.paddingOf = function(type,where){
        if(where==null){
            where ='all';
        }
        this._classes.push('mui-padding__'+where+'--'+type);
        return this;
    };
    /**
     * Theme margin
     * @param {string} [type] small,medium,large
     * @param {string} where left,right,bottom,all
     * @return {mui.Style}
     */
    Theme.prototype.marginOf = function(type,where){
        if(where==null){
            where ='all';
        }
        this._classes.push('mui-margin__'+where+'--'+type);
        return this;
    };
    /**
     * Border radius
     * @param {string} type small,medium,large
     * @param {string} where topLeft,topRight,bottomLeft,bottomRight,all
     */
    Theme.prototype.cornerOf = function(type,where){
        switch (where){
            case 'topLeft':
                where = 'top-left';
                break;
            case 'topRight':
                where = 'top-right';
                break;
            case 'bottomLeft':
                where = 'bottom-left';
                break;
            case 'bottomRight':
                where = 'bottom-right';
                break;
            default:
                where = 'all';
        }
        this._classes.push('mui-corner__'+where+'--'+type);
    };
    /**
     * Button style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.buttonOf = function(type){
        this._classes.push('mui-button-'+type);
        return this;
    };
    /**
     * Container theme style (background & text)
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.containerOf = function(theme){
        this._classes.push('mui-container-of-'+theme);
        return this;
    };
    /**
     * Background theme style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.backgroundOf = function(theme){
        this._classes.push('mui-bg-of-'+theme);
        return this;
    };
    /**
     * Text theme style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.textOf = function(theme){
        this._classes.push('mui-txt-of-'+theme);
        return this;
    };
    /**
     * Border theme style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.borderOf = function(theme){
        this._classes.push('mui-border-of-'+theme);
        return this;
    };

    /**
     * Bold Container Theme style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.boldContainerOf = function(theme){
        this._classes.push('mui-container-bold-of-'+theme);
        return this;
    };

    /**
     * Text theme on background (reversed color)
     * @param theme
     * @return {mui.Style}
     */
    Theme.prototype.textOn = function(theme){
        this._classes.push('mui-text-on-'+theme);
        return this;
    };
    /**
     * border theme on background (reversed color)
     * @param theme
     * @return {mui.Style}
     */
    Theme.prototype.borderOn = function(theme){
        this._classes.push('mui-border-on-'+theme);
        return this;
    };
    /**
     * Typography
     * @param {string} heading h1,h2,h3,h4,h5,h6,subtitle,body,link,caption
     * @return {mui.Theme}
     */
    Theme.prototype.typographyOf = function(heading){
        this._classes.push('ivp-typo__'+heading);
        return this;
    };
    /**
     * Box shadow
     * @param {number} level (1 to 10)
     * @return {mui.Style}
     */
    Theme.prototype.elevateAt = function(level){
        this._classes.push('mui-elevate--z'+level);
        return this;
    };
    return Theme;
}();


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * Gui factory
 * @class mui.GUIFactory
 * @implements {mui.IUiFactory}
 */
mui.GUIFactory = function(){
    var GUIFactory = function(){

    };
    /**
     * Create dialog
     * @param { mui.DialogOptions} options
     * @return {mui.Dialog}
     */
    GUIFactory.prototype.createDialog = function (options) {
        return new mui.Dialog(options);
    };

    /**
     * Create card
     * @param {mui.CardOptions} options
     * @return {mui.Card}
     */
    GUIFactory.prototype.createCard = function (options) {
        return new mui.Card(options);
    };

    /**
     * Create dropdown
     * @param {mui.AbstractDropdownOptions} options
     * @return {mui.Dropdown}
     */
    GUIFactory.prototype.createDropdown = function (options) {
        return new mui.Dropdown(options);
    };

    /**
     * Create image dropdown
     * @param {mui.AbstractDropdownOptions} options
     * @return {mui.ImageDropdown}
     */
    GUIFactory.prototype.createImageDropdown = function (options) {
        return new mui.ImageDropdown(options);
    };

    /**
     * Create container with content centered
     * @param {mui.CenterOptions} options
     * @return {mui.Center }
     */
    GUIFactory.prototype.createCenter = function (options) {
        return new mui.Center(options);
    };

    /**
     * Create split container with main & sub area
     * @param {mui.SplitContainerOptions} options
     * @return {mui.SplitContainer}
     */
    GUIFactory.prototype.createSplitContainer = function (options) {
        return new mui.SplitContainer(options);
    };
    /**
     * Create checkbox
     * @param {mui.CheckboxOptions} options
     * @return {mui.Checkbox}
     */
    GUIFactory.prototype.createCheckbox = function (options) {
        return new mui.Checkbox(options);
    };
    /**
     * Create button group
     * @param {mui.ButtonGroupOptions} options
     * @return {mui.ButtonGroup}
     */
    GUIFactory.prototype.createButtonGroup = function (options) {
        return new mui.ButtonGroup(options);
    };
    /**
     * Create radio group
     * @param {mui.RadioGroupOptions} options
     * @return {mui.RadioGroup}
     */
    GUIFactory.prototype.createRadioGroup = function (options) {
        return new mui.RadioGroup(options);
    };

    /**
     * Create VBox
     * @param {mui.VBoxOptions} options
     * @return {mui.VBox}
     */
    GUIFactory.prototype.createVBox = function (options) {
        return new mui.VBox(options);
    };
    /**
     * Create Hbox
     * @param {mui.HBoxOptions} options
     * @return {mui.HBox}
     */
    GUIFactory.prototype.createHBox = function (options) {
        return new mui.HBox(options);
    };

    /**
     * Create button
     * @param {mui.ButtonOptions} options
     * @return {mui.Button}
     */
    GUIFactory.prototype.createButton = function (options) {
        return new mui.Button(options);
    };

    /**
     * Create Text
     * @param {mui.TextFieldOptions} options
     * @return {mui.TextField}
     */
    GUIFactory.prototype.createText = function (options) {
        return new mui.TextField(options);
    };

    /**
     * Create tab
     * @param {mui.TabOptions} options
     * @return {mui.Tab}
     */
    GUIFactory.prototype.createTab = function (options) {
        return new mui.Tab(options);
    };

    /**
     * Create panel
     * @param {mui.PanelOptions} options
     * @return {mui.Panel}
     */
    GUIFactory.prototype.createPanel = function (options) {
        return new mui.Panel(options);
    };

    /**
     * Create element
     * @param {mui.ElementOptions} options
     * @return { mui.Element}
     */
    GUIFactory.prototype.createElement = function (options) {
        return  new mui.Element(options);
    };
    /**
     * Create number
     * @param {mui.NumberOptions} options
     * @return {mui.Number}
     */
    GUIFactory.prototype.createNumber = function (options) {
        return new mui.Number(options);
    };

    /**
     *
     * @param {mui.LazyListOptions} options
     * @return {mui.LazyList}
     */
    GUIFactory.prototype.createLazyList = function (options) {
        return new mui.LazyList(options);
    };

    /**
     * Create lazy tree
     * @param {mui.LazyTreeOptions} options
     * @return {mui.LazyTree}
     */
    GUIFactory.prototype.createLazyTree = function (options) {
        return new mui.LazyTree(options);
    };
    /**
     * Lazy grid
     * @param {mui.DataGridOptions} options
     * @return {mui.DataGrid}
     */
    GUIFactory.prototype.createLazyGrid = function (options) {
        return new mui.DataGrid(options);
    };

    /**
     * Color picker
     * @param {mui.ColorPickerOptions} options
     * @return {mui.ColorPicker}
     */
    GUIFactory.prototype.createColorPicker = function (options) {
        return new mui.ColorPicker(options);
    };

    /**
     * Date time picker
     * @param {mui.DateTimePickerOptions} options
     * @return {mui.DateTimePicker}
     */
    GUIFactory.prototype.createDateTimePicker = function (options) {
        return new mui.DateTimePicker(options);
    };
    /**
     * Menu
     * @param {mui.AbstractMenuOptions} options
     * @return {mui.Menu}
     */
    GUIFactory.prototype.createMenu = function (options) {

        return new mui.Menu(options);
    };
    /**
     * Create image menu
     * @param {mui.ImageMenuOptions} options
     * @return {mui.ImageMenu}
     */
    GUIFactory.prototype.createImageMenu = function (options) {
        return new mui.ImageMenu(options);
    };
    return new GUIFactory();

}();


/***/ })
/******/ ]);