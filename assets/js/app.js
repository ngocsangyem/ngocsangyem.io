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
/******/ 	return __webpack_require__(__webpack_require__.s = "./_assets/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_assets/app.js":
/*!************************!*\
  !*** ./_assets/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_smooth_scroll_page_smooth_scroll_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/smooth-scroll-page/smooth-scroll-page */ "./_assets/components/smooth-scroll-page/smooth-scroll-page.js");
/* harmony import */ var _components_comments_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/comments/comments */ "./_assets/components/comments/comments.js");
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search */ "./_assets/components/search/search.js");
/* harmony import */ var _components_spoiler_spoiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/spoiler/spoiler */ "./_assets/components/spoiler/spoiler.js");
/* harmony import */ var _components_nav_icon_nav_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav-icon/nav-icon */ "./_assets/components/nav-icon/nav-icon.js");
/* harmony import */ var _components_blackover_nav_blackover_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/blackover-nav/blackover-nav */ "./_assets/components/blackover-nav/blackover-nav.js");
/* harmony import */ var _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/DOM */ "./_assets/helpers/DOM.js");
/* harmony import */ var _helpers_smooth_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/smooth-scroll */ "./_assets/helpers/smooth-scroll.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








 // Document ready

(function (funcName, baseObj) {
  'use strict'; // The public function name defaults to window.docReady
  // but you can modify the last line of this function to pass in a different object or method name
  // if you want to put them in a different namespace and those will be used instead of
  // window.docReady(...)

  funcName = funcName || 'docReady';
  baseObj = baseObj || window;
  var readyList = [];
  var readyFired = false;
  var readyEventHandlersInstalled = false; // call this when the document is ready
  // this function protects itself against being called more than once

  function ready() {
    if (!readyFired) {
      // this must be set to true before we start calling callbacks
      readyFired = true;

      for (var i = 0; i < readyList.length; i++) {
        // if a callback here happens to add new ready handlers,
        // the docReady() function will see that it already fired
        // and will schedule the callback to run right after
        // this event loop finishes so all handlers will still execute
        // in order and no new ones will be added to the readyList
        // while we are processing the list
        readyList[i].fn.call(window, readyList[i].ctx);
      } // allow any closures held by these functions to free


      readyList = [];
    }
  }

  function readyStateChange() {
    if (document.readyState === 'complete') {
      ready();
    }
  } // This is the one public interface
  // docReady(fn, context);
  // the context argument is optional - if present, it will be passed
  // as an argument to the callback


  baseObj[funcName] = function (callback, context) {
    if (typeof callback !== 'function') {
      throw new TypeError('callback for docReady(fn) must be a function');
    } // if ready has already fired, then just schedule the callback
    // to fire asynchronously, but right away


    if (readyFired) {
      setTimeout(function () {
        callback(context);
      }, 1);
      return;
    } else {
      // add the function and context to the list
      readyList.push({
        fn: callback,
        ctx: context
      });
    } // if document already ready to go, schedule the ready function to run
    // IE only safe when readyState is "complete", others safe when readyState is "interactive"


    if (document.readyState === 'complete' || !document.attachEvent && document.readyState === 'interactive') {
      setTimeout(ready, 1);
    } else if (!readyEventHandlersInstalled) {
      // otherwise if we don't have event handlers installed, install them
      if (document.addEventListener) {
        // first choice is DOMContentLoaded event
        document.addEventListener('DOMContentLoaded', ready, false); // backup is window load event

        window.addEventListener('load', ready, false);
      } else {
        // must be IE
        document.attachEvent('onreadystatechange', readyStateChange);
        window.attachEvent('onload', ready);
      }

      readyEventHandlersInstalled = true;
    }
  };
})('docReady', window); // Reset animations on page: body.preload


setTimeout(function () {
  document.body.className = '';
}, 500);
document.addEventListener('keyup', function (event) {
  if (event.keyCode == 27) {
    _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].navIcon.classList.remove('active');
    _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].menu.classList.remove('active');
    _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].blackoverNav.classList.remove('active');
    _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].body.classList.remove('active-side');
    _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].html.classList.remove('overflow-hidden');
  }
});

function createSearchScript() {
  var newScriptsearchLib = document.createElement('script');
  var newsearchHandle = document.createElement('script');
  newScriptsearchLib.id = 'search-lib';
  newsearchHandle.id = 'search-handle';
  newScriptsearchLib.src = '/assets/js/plugins/lunr.js';
  newsearchHandle.src = '/assets/js/plugins/lunrsearchengine.js';
  var firstScriptTag = document.getElementById('lazyloadScript');
  firstScriptTag.parentNode.insertBefore(newScriptsearchLib, firstScriptTag);
  firstScriptTag.parentNode.insertBefore(newsearchHandle, firstScriptTag);
}

function handleCreateSearchScript() {
  document.querySelector('.wrap-search i').addEventListener('click', function () {
    var searchLib = document.getElementById('search-lib');
    var searchHandle = document.getElementById('search-handle');

    if (!searchLib && !searchHandle) {
      createSearchScript();
    }
  });
  document.querySelector('.wrap-search input').addEventListener('keyup', function () {
    var searchLib = document.getElementById('search-lib');
    var searchHandle = document.getElementById('search-handle');

    if (!searchLib && !searchHandle) {
      createSearchScript();
    }
  });
} // remove all :hover stylesheets on mobile
// function hasTouch() {
// 	return (
// 		'ontouchstart' in document.documentElement ||
// 		navigator.maxTouchPoints > 0 ||
// 		navigator.msMaxTouchPoints > 0
// 	);
// }
// if (hasTouch()) {
// 	try {
// 		for (var si in document.styleSheets) {
// 			var styleSheet = document.styleSheets[si];
// 			if (!styleSheet.rules) continue;
// 			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
// 				if (!styleSheet.rules[ri].selectorText) continue;
// 				if (styleSheet.rules[ri].selectorText.match(':hover')) {
// 					styleSheet.deleteRule(ri);
// 				}
// 			}
// 		}
// 	} catch (ex) {}
// }


docReady(function () {
  //Check to see if the window is top if not then display button
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.body.scrollTop;

    if (!!_helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].scrollTopButton) {
      if (scrollTop > 300) {
        _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].scrollTopButton.classList.add('active');
      } else {
        _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].scrollTopButton.classList.remove('active');
      }
    }

    if (!!_helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].backPageButtonDark) {
      if (scrollTop > 130) {
        _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].backPageButtonDark.classList.remove('back-page-button-w');
      } else {
        _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].backPageButtonDark.classList.add('back-page-button-w');
      }
    }
  }); //Click event to scroll to top

  if (!!_helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].scrollTopButton) {
    _helpers_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].scrollTopButton.addEventListener('click', function () {
      Object(_helpers_smooth_scroll__WEBPACK_IMPORTED_MODULE_7__["smoothScrollTo"])(0);
    });
  }

  handleCreateSearchScript();
});

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    Object(_components_smooth_scroll_page_smooth_scroll_page__WEBPACK_IMPORTED_MODULE_0__["smoothScrollPage"])();
    Object(_components_search_search__WEBPACK_IMPORTED_MODULE_2__["searchInit"])();
    Object(_components_comments_comments__WEBPACK_IMPORTED_MODULE_1__["commentsInit"])();
    Object(_components_spoiler_spoiler__WEBPACK_IMPORTED_MODULE_3__["spoilerInit"])();
    Object(_components_nav_icon_nav_icon__WEBPACK_IMPORTED_MODULE_4__["navIcon"])();
    Object(_components_blackover_nav_blackover_nav__WEBPACK_IMPORTED_MODULE_5__["blackoverNav"])();
  }

  _createClass(App, null, [{
    key: "init",
    value: function init() {
      var app = new App();
      return app;
    }
  }]);

  return App;
}();

(function () {
  App.init();
})();

/***/ }),

/***/ "./_assets/components/blackover-nav/blackover-nav.js":
/*!***********************************************************!*\
  !*** ./_assets/components/blackover-nav/blackover-nav.js ***!
  \***********************************************************/
/*! exports provided: blackoverNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackoverNav", function() { return blackoverNav; });
/* harmony import */ var _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/DOM */ "./_assets/helpers/DOM.js");


var handleClickBlackoverNav = function handleClickBlackoverNav() {
  if (!!_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].blackoverNav) {
    _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].blackoverNav.addEventListener('click', function () {
      _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].navIcon.classList.remove('active');
      _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].menu.classList.remove('active');
      this.classList.remove('active');
      _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].body.classList.remove('active-side');
      _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].html.classList.remove('overflow-hidden');
    });
  }
};

var blackoverNav = function blackoverNav() {
  handleClickBlackoverNav();
};



/***/ }),

/***/ "./_assets/components/comments/comments.js":
/*!*************************************************!*\
  !*** ./_assets/components/comments/comments.js ***!
  \*************************************************/
/*! exports provided: commentsInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsInit", function() { return commentsInit; });
var showComments = function showComments() {
  var showCommentsButton = document.querySelector('.show-comments');

  if (!!showCommentsButton) {
    showCommentsButton.addEventListener('click', function () {
      document.getElementById('comments').classList.toggle('comments--show');
    });
  }
};

var commentsInit = function commentsInit() {
  showComments();
};



/***/ }),

/***/ "./_assets/components/nav-icon/nav-icon.js":
/*!*************************************************!*\
  !*** ./_assets/components/nav-icon/nav-icon.js ***!
  \*************************************************/
/*! exports provided: navIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navIcon", function() { return navIcon; });
/* harmony import */ var _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/DOM */ "./_assets/helpers/DOM.js");


var handleClickNavIcon = function handleClickNavIcon() {
  if (!!_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].navIcon) {
    _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].navIcon.addEventListener('click', function () {
      this.classList.toggle('active');
      _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].menu.classList.toggle('active');
      _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].blackoverNav.classList.toggle('active');
      _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].body.classList.toggle('active-side');
      _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__["DOM"].html.classList.toggle('overflow-hidden');
    });
  }
};

var navIcon = function navIcon() {
  handleClickNavIcon();
};



/***/ }),

/***/ "./_assets/components/search/search.js":
/*!*********************************************!*\
  !*** ./_assets/components/search/search.js ***!
  \*********************************************/
/*! exports provided: searchInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInit", function() { return searchInit; });
var showSearch = function showSearch() {
  var showSearchButton = document.querySelector('.show-search');

  if (!!showSearchButton) {
    showSearchButton.addEventListener('click', function () {
      document.querySelector('.bd-search').classList.toggle('search--show');
    });
  }
};

var searchInit = function searchInit() {
  showSearch();
};



/***/ }),

/***/ "./_assets/components/smooth-scroll-page/smooth-scroll-page.js":
/*!*********************************************************************!*\
  !*** ./_assets/components/smooth-scroll-page/smooth-scroll-page.js ***!
  \*********************************************************************/
/*! exports provided: smoothScrollPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrollPage", function() { return smoothScrollPage; });
/* harmony import */ var _helpers_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/smooth-scroll */ "./_assets/helpers/smooth-scroll.js");


var smoothScrollPage = function smoothScrollPage() {
  var anchorLink = document.querySelector('a[href*=\\#]:not([href=\\#])');
  setTimeout(function () {
    if (location.hash) {
      /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
      window.scrollTo(0, 0);
      var target = location.hash.split('#');
      Object(_helpers_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__["smoothScrollTo"])(document.querySelector("#".concat(target[1])).offsetTop);
    }
  }, 1);

  if (!!anchorLink) {
    anchorLink.addEventListener('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        Object(_helpers_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__["smoothScrollTo"])(document.querySelector("".concat(this.hash)).offsetTop);
        return false;
      }
    });
  }
};



/***/ }),

/***/ "./_assets/components/spoiler/spoiler.js":
/*!***********************************************!*\
  !*** ./_assets/components/spoiler/spoiler.js ***!
  \***********************************************/
/*! exports provided: spoilerInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spoilerInit", function() { return spoilerInit; });
var spoilerClick = function spoilerClick() {
  var spoilers = Array.from(document.querySelectorAll('.spoiler'));
  spoilers.forEach(function (el) {
    el.addEventListener('click', function () {
      el.classList.remove('spoiler');
    });
  });
};

var spoilerInit = function spoilerInit() {
  spoilerClick();
};



/***/ }),

/***/ "./_assets/helpers/DOM.js":
/*!********************************!*\
  !*** ./_assets/helpers/DOM.js ***!
  \********************************/
/*! exports provided: DOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
var DOM = {
  navIcon: document.querySelector('.nav-icon'),
  menu: document.getElementById('menu'),
  blackoverNav: document.getElementById('blackover-nav'),
  body: document.querySelector('body'),
  scrollTopButton: document.querySelector('.scroll-top'),
  backPageButtonDark: document.querySelector('.back-page-button-dark'),
  html: document.querySelector('html')
};

/***/ }),

/***/ "./_assets/helpers/animation.js":
/*!**************************************!*\
  !*** ./_assets/helpers/animation.js ***!
  \**************************************/
/*! exports provided: EasingFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasingFunctions", function() { return EasingFunctions; });
var EasingFunctions = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};


/***/ }),

/***/ "./_assets/helpers/smooth-scroll.js":
/*!******************************************!*\
  !*** ./_assets/helpers/smooth-scroll.js ***!
  \******************************************/
/*! exports provided: smoothScrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrollTo", function() { return smoothScrollTo; });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./_assets/helpers/animation.js");

var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame; // Stack Overflow: https://stackoverflow.com/a/54971309

var smoothScrollTo = function smoothScrollTo(to) {
  var start = window.scrollY || window.pageYOffset;
  var time = Date.now();
  var duration = Math.abs(start - to) / 3;

  (function step() {
    var dx = Math.min(1, (Date.now() - time) / duration);
    var pos = start + (to - start) * _animation__WEBPACK_IMPORTED_MODULE_0__["EasingFunctions"].easeOutQuart(dx);
    window.scrollTo(0, pos);

    if (dx < 1) {
      requestAnimationFrame(step);
    }
  })();
};

/***/ })

/******/ });
//# sourceMappingURL=app.js.map