module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _URL = __webpack_require__(4);

var _URL2 = _interopRequireDefault(_URL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _URL2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clear;
function clear() {
  for (var k in this) {
    if (this.hasOwnProperty(k)) {
      this[k] = undefined;
    }
  }
  return this;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tinyTest = __webpack_require__(3);

var _tinyTest2 = _interopRequireDefault(_tinyTest);

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _schemaStringEmptyLocation = __webpack_require__(10);

var _schemaStringEmptyLocation2 = _interopRequireDefault(_schemaStringEmptyLocation);

var _schemaObjectEmptyLocation = __webpack_require__(11);

var _schemaObjectEmptyLocation2 = _interopRequireDefault(_schemaObjectEmptyLocation);

var _schemaParameters = __webpack_require__(12);

var _schemaParameters2 = _interopRequireDefault(_schemaParameters);

var _schemaSearch = __webpack_require__(13);

var _schemaSearch2 = _interopRequireDefault(_schemaSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tinyTest2.default)(function (test, load) {
  (0, _schemaStringEmptyLocation2.default)(test);
  (0, _schemaObjectEmptyLocation2.default)(test);
  (0, _schemaParameters2.default)(test);
  (0, _schemaSearch2.default)(test);
  // test("http://www.google.com/ (toString)")
  //   .this(function () {
  //     let l = new URL("http://www.google.com/");
  //     return l.toString();
  //   })
  //   .isEqual(function () {
  //     return "http://www.google.com/";
  //   });

  // test("http://www.google.com/?search=2 (toString)")
  //   .this(function () {
  //     let l = new URL({ href: "http://www.google.com/?search=2" });
  //     l.search.search = 3;
  //     return l.toString();
  //   })
  //   .isEqual(function () {
  //     return "http://www.google.com/?search=3";
  //   });

  // test("http://www.google.com/?search[]=1&search[]=2 (toString)")
  //   .this(function () {
  //     let l = new URL({ href: "http://www.google.com/?search[]=1&search[]=2" });
  //     l.search.search[0] = 3;
  //     return l.toString();
  //   })
  //   .isEqual(function () {
  //     return "http://www.google.com/?search[]=3&search[]=2";
  //   });

  // test("http://www.google.com/?search[]=:number (toString)")
  //   .this(function () {
  //     let l = new URL("http://www.google.com/?search[]=:number", {
  //       href: "http://www.google.com/?search[]=1&search[]=2"
  //     });
  //     l.search.search[0].number = 3;
  //     return l.toString();
  //   })
  //   .isEqual(function () {
  //     return "http://www.google.com/?search[]=3&search[]=2";
  //   });

  // test("http://www.google.com/?search[]=:name,:gender (toString)")
  //   .this(function () {
  //     let l = new URL("http://www.google.com/?search[]=:name,:gender", {
  //       href: "http://www.google.com/?search[]=sean,male&search[]=sarah,female"
  //     });
  //     l.search.search[0].name = "John";
  //     return l.toString();
  //   })
  //   .isEqual(function () {
  //     return "http://www.google.com/?search[]=John,male&search[]=sarah,female";
  //   });

  // test("/user/:userID (string HREF)")
  //   .this(function () {
  //     const l = new URL(
  //       "/user/:userID",
  //       "/user/SeanJM"
  //     );
  //     return l.params.userID;
  //   })
  //   .isEqual(function () {
  //     return "SeanJM";
  //   });

  // test("/user/:userID (object)")
  //   .this(function () {
  //     const l = new URL("/user/:userID", { pathname: "/user/SeanJM" });
  //     return l.params.userID;
  //   })
  //   .isEqual(function () {
  //     return "SeanJM";
  //   });

  // test("/user/:userID?depth[]=:number+:id")
  //   .this(function () {
  //     const l = new URL("/user/:userID?depth[]=:number+:id", {
  //       pathname : "/user/SeanJM",
  //       search   : "?depth[]=0+o8jk&depth[]=1+99qE&depth[]=2+eBPs"
  //     });
  //     return l.search.depth;
  //   })
  //   .isDeepEqual(function () {
  //     return [{
  //       number: 0,
  //       id    : "o8jk"
  //     }, {
  //       number: 1,
  //       id    : "99qE"
  //     }, {
  //       number: 2,
  //       id    : "eBPs"
  //     }];
  //   });

  // test("/post/:postID?origin=... (manipulating a mapped object)")
  //   .this(function () {
  //     const l = new URL("/post/:postID?origin=board+:category+:page", {
  //       pathname: "/post/ezAYhlkuGEz",
  //       search  : "?origin=board+food+1"
  //     });

  //     l.search.origin.category = "fitness";
  //     return l.toString();
  //   })
  //   .isEqual(function () {
  //     return "/post/ezAYhlkuGEz?origin=board+fitness+1";
  //   });

  // test("Empty")
  //   .this(function () {
  //     const l = new URL();
  //     return l.toString();
  //   })
  //   .isEqual(function () {
  //     return "/";
  //   });

  // test("/a vs /a/b (does not match)")
  //   .this(function () {
  //     const a = new URL("/:a", "/a");
  //     const b = new URL("/:a", "/a/b");
  //     return a.isMatch && !b.isMatch;
  //   })
  //   .isEqual(function () {
  //     return true;
  //   });

  // test("*?origin=user+:userID+:section+:page")
  //   .this(function () {
  //     let l = new URL("*?origin=user+:userID+:section+:page", { href: "http://www.domain.com/?origin=user+98fjhd+all+1" });
  //     return l;
  //   })
  //   .isDeepEqual(function () {
  //     return {
  //       location: {
  //         origin       : "http://www.domain.com",
  //         href         : "http://www.domain.com/?origin=user+98fjhd+all+1",
  //         hash         : "",
  //         pathname     : "/",
  //         params       : "/",
  //         search       : "?origin=user+98fjhd+all+1",
  //         searchSchema : "?origin=user+:userID+:section+:page"
  //       },

  //       origin: {
  //         value: "http://www.domain.com"
  //       },

  //       hash : { value: "" },

  //       search: {
  //         schema     : {
  //           origin: {
  //             delimiter: "+",
  //             type : "object",
  //             map: [ { constant: "user" }, "userID", "section", "page" ]
  //           }
  //         },
  //         schemaKeys : [ "origin" ],
  //         origin       : {
  //           user: "user",
  //           userID: "98fjhd",
  //           section: "all",
  //           page : 1
  //         }
  //       },

  //       params: {
  //         path    : [],
  //         params  : [],
  //         isMatch : true
  //       },

  //       isMatch: true
  //     };
  //   });

  // test("*?origin=user+:userID+:section+:page (pathname, search)")
  //   .this(function () {
  //     let l = new URL("*?origin=user+:userID+:section+:page", {
  //       pathname : "/post/p398dfjkj",
  //       search   : "?origin=user+98fjhd+all+1"
  //     });
  //     return l;
  //   })
  //   .isDeepEqual(function () {
  //     return {
  //       location: {
  //         origin       : undefined,
  //         href         : undefined,
  //         hash         : "",
  //         pathname     : "/post/p398dfjkj",
  //         params       : "/",
  //         search       : "?origin=user+98fjhd+all+1",
  //         searchSchema : "?origin=user+:userID+:section+:page"
  //       },

  //       origin: { value: undefined },

  //       hash : { value: "" },

  //       search: {
  //         schema     : {
  //           origin: {
  //             delimiter: "+",
  //             type : "object",
  //             map: [ { constant: "user" }, "userID", "section", "page" ]
  //           }
  //         },
  //         schemaKeys : [ "origin" ],
  //         origin       : {
  //           user: "user",
  //           userID: "98fjhd",
  //           section: "all",
  //           page : 1
  //         }
  //       },

  //       params: {
  //         path    : [ "post", "p398dfjkj" ],
  //         params  : [],
  //         isMatch : true
  //       },

  //       isMatch: true
  //     };
  //   });

  // test("/board/:category?page")
  //   .this(function () {
  //     let back            = new URL("/user/:userID/:section?page");
  //     back.params.userID  = "98374jf";
  //     back.params.section = "comments";
  //     back.search.page    = 1;
  //     return back.toString();
  //   })
  //   .isDeepEqual(function () {
  //     return "/user/98374jf/comments?page=1";
  //   });

  // test("http://localhost:3000/login?reset")
  //   .this(function () {
  //     let url = new URL({ href: "http://localhost:3000/login?reset" });
  //     return url.search.reset;
  //   })
  //   .isDeepEqual(function () {
  //     return 1;
  //   });

  // test("http://localhost:3000/login?reset (toString)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "http://localhost:3000/login?reset"
  //     });
  //     return url.toString();
  //   })
  //   .isDeepEqual(function () {
  //     return "http://localhost:3000/login?reset=1";
  //   });

  // test("http://localhost:3000/?string (search set)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "http://localhost:3000/?string"
  //     });

  //     url.search.set({
  //       string: "this will be an encoded string"
  //     });

  //     return url.toString();
  //   })
  //   .isDeepEqual(function () {
  //     return "http://localhost:3000/?string=this%20will%20be%20an%20encoded%20string";
  //   });

  // test("http://localhost:3000/?string (search get)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "http://localhost:3000/?string"
  //     });

  //     url.search.string = "this will be an encoded string";

  //     return url.search.get("string");
  //   })
  //   .isDeepEqual(function () {
  //     return "this will be an encoded string";
  //   });

  // test("http://localhost:3000/?string (search get array)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "http://localhost:3000/?string"
  //     });

  //     url.search.set({
  //       string: "this will be an encoded string",
  //       number: 2098
  //     });

  //     return url.search.get([ "string", "number" ]);
  //   })
  //   .isDeepEqual(function () {
  //     return {
  //       string: "this will be an encoded string",
  //       number: 2098
  //     };
  //   });

  // test("http://localhost:3000/?string (set pathname)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "http://localhost:3000/?string"
  //     });

  //     url.set({
  //       pathname : "/path/name"
  //     });

  //     return url.toString();
  //   })
  //   .isDeepEqual(function () {
  //     return "http://localhost:3000/path/name?string=1";
  //   });

  // test("http://localhost:3000/?string (set search)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "http://localhost:3000/login"
  //     });

  //     url.set({
  //       search : "?search=1&cat=fluffy&dog=sam"
  //     });

  //     return url.toString();
  //   })
  //   .isDeepEqual(function () {
  //     return "http://localhost:3000/login?search=1&cat=fluffy&dog=sam";
  //   });

  // test("http://localhost:3000/startswith/ (startsWith)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "http://localhost:3000/startswith/"
  //     });
  //     return url.params.startsWith("startswith");
  //   })
  //   .isDeepEqual(function () {
  //     return true;
  //   });

  // test("/startswith (startsWith)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "/login"
  //     });
  //     return url.params.startsWith("/login");
  //   })
  //   .isDeepEqual(function () {
  //     return true;
  //   });

  // test("http://localhost:3000/startswith/ (startsWith multiple)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "http://localhost:3000/startswith/reset"
  //     });
  //     return (
  //       url.params.startsWith("startswith/reset") &&
  //       url.params.startsWith("/startswith/reset") &&
  //       !url.params.startsWith("/startswith/res") &&
  //       !url.params.startsWith("startswith/test")
  //     );
  //   })
  //   .isDeepEqual(function () {
  //     return true;
  //   });

  // test("http://localhost:3000/starts/with/that (is)")
  //   .this(function () {
  //     let url = new URL({
  //       href: "http://localhost:3000/starts/with/"
  //     });
  //     return (
  //       url.params.is("starts/with/") &&
  //       url.params.is("/starts/with/") &&
  //       url.params.is("starts/with") &&
  //       !url.params.is("starts/with/that")
  //     );
  //   })
  //   .isDeepEqual(function () {
  //     return true;
  //   });

  // test("http://localhost:3001/ (startsWith)")
  //   .this(function () {
  //     let url = new URL({
  //       href : "http://localhost:3001/",
  //     });
  //     return url.params.startsWith("login");
  //   })
  //   .isDeepEqual(function () {
  //     return false;
  //   });

  // test("http://localhost:3001/ (push)")
  //   .this(function () {
  //     let url = new URL({
  //       href : "http://localhost:3001/",
  //     });
  //     url.params.push("login");
  //     return url.toString();
  //   })
  //   .isDeepEqual(function () {
  //     return "http://localhost:3001/login";
  //   });

  // test("http://localhost:3001/ (push object)")
  //   .this(function () {
  //     let url = new URL({
  //       href : "http://localhost:3001/",
  //     });

  //     url.params.push({ name: "login" });

  //     return [ url.toString(), url.params.name ];
  //   })
  //   .isDeepEqual(function () {
  //     return [ "http://localhost:3001/login", "login" ];
  //   });

  // test("http://localhost:3001/ (unshift)")
  //   .this(function () {
  //     let url = new URL({
  //       href : "http://localhost:3001/",
  //     });
  //     url.params.unshift("login");
  //     return url.toString();
  //   })
  //   .isDeepEqual(function () {
  //     return "http://localhost:3001/login";
  //   });

  // test("http://localhost:3001/ (unshift object)")
  //   .this(function () {
  //     let url = new URL({
  //       href : "http://localhost:3001/",
  //     });

  //     url.params.unshift({ name: "login" });

  //     return [ url.toString(), url.params.name ];
  //   })
  //   .isDeepEqual(function () {
  //     return [ "http://localhost:3001/login", "login" ];
  //   });

  // test("http://localhost:3001/#my-hash (Object)")
  //   .this(function () {
  //     let url = new URL({
  //       href : "http://localhost:3001/#my-hash",
  //     });
  //     return url;
  //   })
  //   .isDeepEqual(function () {
  //     return {
  //       location: {
  //         origin       : "http://localhost:3001",
  //         href         : "http://localhost:3001/#my-hash",
  //         pathname     : "/",
  //         hash         : "#my-hash",
  //         params       : "/",
  //         search       : "",
  //         searchSchema : ""
  //       },

  //       origin: {
  //         value: "http://localhost:3001"
  //       },

  //       search: {
  //         schema     : {},
  //         schemaKeys : []
  //       },

  //       params: {
  //         path    : [],
  //         params  : [],
  //         isMatch : true
  //       },

  //       hash: {
  //         value: "#my-hash"
  //       },

  //       isMatch: true
  //     };
  //   });

  // test("http://localhost:3001/#my-hash (query hash)")
  //   .this(function () {
  //     let url = new URL({
  //       href : "http://localhost:3001/#my-hash",
  //     });

  //     return url.location.hash;
  //   })
  //   .isDeepEqual(function () {
  //     return "#my-hash";
  //   });

  // test("http://localhost:3001/#my-hash (hash toString)")
  //   .this(function () {
  //     let url = new URL({
  //       href : "http://localhost:3001/#my-hash",
  //     });

  //     url.hash.value = "#changed-hash";
  //     return url.toString();
  //   })
  //   .isDeepEqual(function () {
  //     return "http://localhost:3001/#changed-hash";
  //   });

  // test("https://maps.googleapis.com/maps/api/place/textsearch/json (Copy)")
  //   .this(function () {
  //     let url  = new URL("https://maps.googleapis.com/maps/api/place/textsearch/json");
  //     let copy = url.copy();

  //     copy.search.query = "test";

  //     return [
  //       url.toString(),
  //       copy.toString()
  //     ];
  //   })
  //   .isDeepEqual(function () {
  //     return [
  //       "https://maps.googleapis.com/maps/api/place/textsearch/json",
  //       "https://maps.googleapis.com/maps/api/place/textsearch/json?query=test"
  //     ];
  //   });

  // test("/location/:lang match method")
  //   .this(function () {
  //     let url  = new URL("/location/:lang");
  //     return [
  //       url.test("/location/english"),
  //       url.test("/loc/english"),
  //       url.test(undefined),
  //     ];
  //   })
  //   .isDeepEqual(function () {
  //     return [ true, false, false ];
  //   });

  load();
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tiny-test");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Origin = __webpack_require__(5);

var _Origin2 = _interopRequireDefault(_Origin);

var _Search = __webpack_require__(6);

var _Search2 = _interopRequireDefault(_Search);

var _Parameters = __webpack_require__(7);

var _Parameters2 = _interopRequireDefault(_Parameters);

var _Hash = __webpack_require__(9);

var _Hash2 = _interopRequireDefault(_Hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URL = function () {
  function URL(schema, location) {
    _classCallCheck(this, URL);

    this.setSchema(schema || {});
    this.setLocation(location || {});

    this.origin = new _Origin2.default(this.schema, this.location);
    this.search = new _Search2.default(this.schema, this.location);
    this.params = new _Parameters2.default(this.schema, this.location);
    this.hash = new _Hash2.default(this.schema, this.location);

    this.isMatch = this.origin.isMatch && this.search.isMatch && this.params.isMatch && this.hash.isMatch;
  }

  _createClass(URL, [{
    key: "test",
    value: function test(location) {
      return new URL(this.arguments.schema, location).isMatch;
    }
  }, {
    key: "setLocation",
    value: function setLocation(location) {
      this.location = {
        origin: this.getUrlOrigin(location),
        href: this.getUrlHref(location),
        pathname: this.getUrlPathname(location),
        hash: this.getUrlHash(location),
        search: this.getUrlSearch(location)
      };
      return this;
    }
  }, {
    key: "setSchema",
    value: function setSchema(schema) {
      this.schema = {
        origin: this.getUrlOrigin(schema),
        href: this.getUrlHref(schema),
        pathname: this.getUrlPathname(schema),
        hash: this.getUrlHash(schema),
        search: this.getUrlSearch(schema)
      };
      return this;
    }
  }, {
    key: "getLocationString",
    value: function getLocationString(location) {
      return location && (location.href || location.pathname || location.origin);
    }
  }, {
    key: "getUrlHash",
    value: function getUrlHash(location) {
      if (typeof location === "string") {
        var split = location.split("#")[1];
        var hash = split && "#" + split;
        return hash || "";
      } else if (location) {
        return this.getUrlHash(location.hash || this.getLocationString(location));
      }
      return undefined;
    }
  }, {
    key: "getUrlHref",
    value: function getUrlHref(location) {
      if ((typeof location === "undefined" ? "undefined" : _typeof(location)) === "object") {
        return location.href || this.getLocationString(location);
      }
      return location;
    }
  }, {
    key: "getUrlPathname",
    value: function getUrlPathname(location) {
      if ((typeof location === "undefined" ? "undefined" : _typeof(location)) === "object") {
        return this.getUrlPathname(location.pathname || this.getLocationString(location));
      } else if (typeof location === "string") {
        var string = location ? location.split("?")[0].split("#")[0] : location;
        var end = string && string.length;
        var start = 0;

        if ((typeof loc === "undefined" ? "undefined" : _typeof(loc)) === "object") {
          return this.getUrlPathname(this.getLocationString(location));
        } else if (string) {
          if (string.indexOf("http://") === 0) {
            start += 7;
          } else if (string.indexOf("https://") === 0) {
            start += 8;
          }
          start = string.indexOf("/", start);
          return start === -1 ? "/" : string.substring(start, end);
        }
      }

      return undefined;
    }
  }, {
    key: "getUrlOrigin",
    value: function getUrlOrigin(location) {
      var origin = undefined;
      var end = void 0;

      if ((typeof location === "undefined" ? "undefined" : _typeof(location)) === "object") {
        return this.getUrlOrigin(location.origin || location.href);
      } else if (location && location.indexOf("http") === 0) {
        location = location.split("?")[0];
        end = location.indexOf("/", location.indexOf("//") + 2);
        origin = location.substring(0, end > -1 ? end : location.length);
      }

      return origin;
    }
  }, {
    key: "getUrlSearch",
    value: function getUrlSearch(location) {
      if ((typeof location === "undefined" ? "undefined" : _typeof(location)) === "object") {
        return this.getUrlSearch(location.search || this.getLocationString(location));
      } else if (location) {
        var split = location.split("?");
        return split[1] ? "?" + location.split("?")[1] : "";
      }

      return undefined;
    }
  }, {
    key: "locationFromString",
    value: function locationFromString(string) {
      return {
        pathname: this.getUrlPathname(string),
        hash: this.getHash(string),
        search: this.getUrlSearch(string)
      };
    }
  }, {
    key: "toObject",
    value: function toObject(string) {
      return new URL(this.__params, this.locationFromString(string));
    }
  }, {
    key: "copy",
    value: function copy() {
      var x = new URL(this.params.value, this.location.value);

      for (var k in this.search) {
        if (this.search.hasOwnProperty(k)) {
          x.search[k] = this.search[k];
        }
      }

      for (k in this.params) {
        if (this.params.hasOwnProperty(k)) {
          x.params[k] = this.params[k];
        }
      }

      for (k in this.hash) {
        if (this.hash.hasOwnProperty(k)) {
          x.hash[k] = this.hash[k];
        }
      }

      return x;
    }
  }, {
    key: "set",
    value: function set(location) {
      var x = {};

      var keys = ["pathname", "href", "hash", "origin", "search"];

      for (var i = 0, n = keys.length; i < n; i++) {
        if (location[keys[i]]) {
          x[keys[i]] = location[keys[i]];
          this.location[keys[i]] = location[keys[i]];
        }
      }

      if (x.pathname || x.href) {
        this.location.params = this.getUrlPathname(this.getLocationString(x));
      }

      this.origin = new _Origin2.default(this.location);
      this.search = new _Search2.default(this.location);
      this.params = new _Parameters2.default(this.location);
      this.hash = new _Hash2.default(this.location);
      this.isMatch = this.params.__isMatch;

      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.origin.toString() + this.params.toString() + this.search.toString() + this.hash.toString();
    }
  }]);

  return URL;
}();

exports.default = URL;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Origin = function () {
  function Origin(schema, location) {
    _classCallCheck(this, Origin);

    this.schema = schema.origin;
    this.value = location.origin;
    this.isMatch = this.schema === this.value;
  }

  _createClass(Origin, [{
    key: "toString",
    value: function toString() {
      return this.value || "";
    }
  }]);

  return Origin;
}();

exports.default = Origin;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clear = __webpack_require__(1);

var reserved = {
  searchEach: true,
  setSchema: true,
  setValue: true,
  toString: true,
  set: true,
  get: true,
  schema: true,
  keys: true
};

function filterValue(str) {
  var n = Number(str);
  return isNaN(n) ? str : n;
}

// ?this=value&that[]=a&that[]=b
// ?this=:key+:property

function schemaArrayToString(key, value, schema) {
  var t = [];

  for (var i = 0, n = value.length; i < n; i++) {
    t.push([encodeURI(key) + "[]="]);

    for (var x in value[i]) {
      t[i].push(value[i][x]);
    }

    t[i] = t[i][0] + encodeURI(t[i].slice(1).join(schema.delimiter));
  }

  return t.join("&");
}

function schemaObjectToString(key, value, schema) {
  var temp = [key + "=", []];

  value = value || {};

  for (var i = 0, n = schema.map.length; i < n; i++) {
    if (schema.map[i].constant) {
      temp[1].push(schema.map[i].constant);
    } else if (value[schema.map[i]]) {
      temp[1].push(value[schema.map[i]]);
    }
  }

  return encodeURI(temp[0] + temp[1].join("+"));
}

var Search = function () {
  function Search(schema, location) {
    _classCallCheck(this, Search);

    this.isMatch = typeof schema.search === "string" && typeof location.search === "string";

    this.schema = {};
    this.keys = [];
    this.setSchema(schema.search);
    this.setValue(location.search);
  }

  _createClass(Search, [{
    key: "searchEach",
    value: function searchEach(raw, callback) {
      if (raw) {
        var str = raw[0] === "?" ? raw.slice(1) : raw;
        var split = str.split("&").filter(function (a) {
          return a.length;
        });

        for (var i = 0, n = split.length; i < n; i++) {
          var element = split[i].split("=");
          var isArray = element[0].slice(-2) === "[]";
          var delimiter = false;

          element[0] = decodeURI(element[0]);
          element[1] = element[1] && decodeURI(element[1]);

          if (reserved[element[0]]) {
            throw new Error("Invalid name: " + element[0] + ", this is a reserved name");
          }

          if (element[1]) {
            if (element[1].indexOf(",") > -1) {
              delimiter = ",";
            } else if (element[1].indexOf("+") > -1) {
              delimiter = "+";
            }
          }

          callback({
            key: isArray ? element[0].slice(0, -2) : element[0],
            value: element[1],
            delimiter: delimiter,
            type: isArray ? "array" : "object"
          });
        }
      }
    }
  }, {
    key: "setSchema",
    value: function setSchema(schema) {
      var _this = this;

      this.searchEach(schema, function (props) {
        props.map = [];
        if (props.delimiter) {
          props.value.split(props.delimiter).forEach(function (name) {
            if (name[0] === ":") {
              props.map.push(name.substring(1));
            } else {
              props.map.push({ constant: name });
            }
          });
        } else if (props.value && props.value[0] === ":") {
          props.map.push(props.value.substring(1));
        }

        if (_this.keys.indexOf(props.key) === -1) {
          _this.keys.push(props.key);
        }

        props.value = filterValue(props.value);
        _this.schema[props.key] = props;
      });
    }
  }, {
    key: "setValue",
    value: function setValue(search) {
      var _this2 = this;

      var array = {};
      var object = [];

      this.searchEach(search, function (props) {
        var ref = _this2.schema[props.key];
        if (props.type === "array") {
          if (!array[props.key]) {
            array[props.key] = {
              key: props.key,
              delimiter: false,
              list: []
            };
          }
          if (props.delimiter) {
            array[props.key].delimiter = props.delimiter;
          }
          array[props.key].list.push(props.value);
        } else {
          object.push(props);
        }
        if (!ref) {
          _this2.isMatch = false;
        }
      });

      for (var k in array) {
        array[k].list.forEach(function (value, pIndex) {
          var ref = _this2.schema[array[k].key];
          _this2[array[k].key] = _this2[array[k].key] || [];
          if (ref && ref.map.length) {
            if (ref.delimiter) {
              value.split(array[k].delimiter).forEach(function (value, i) {
                _this2[array[k].key][pIndex] = _this2[array[k].key][pIndex] || {};
                _this2[array[k].key][pIndex][ref.map[i]] = filterValue(value);
              });
            } else {
              _this2[array[k].key][pIndex] = _this2[array[k].key][pIndex] || {};
              _this2[array[k].key][pIndex][ref.map[0]] = filterValue(value);
            }
          } else {
            _this2[array[k].key].push(filterValue(value));
          }
        });
      }

      object.forEach(function (props) {
        var ref = _this2.schema[props.key];
        _this2[props.key] = {};
        if (ref.delimiter) {
          props.value.split(ref.delimiter).forEach(function (value) {
            _this2[props.key][ref.map[0]] = filterValue(value);
          });
        } else {
          _this2[props.key][ref.map[0]] = filterValue(props.value);
        }
      });
    }
  }, {
    key: "toString",
    value: function toString() {
      var search = [];
      for (var k in this) {
        if (this.hasOwnProperty(k) && !reserved[k]) {
          if (this.schema[k] && this.schema[k].map.length) {
            if (this.schema[k].type === "array") {
              search.push(schemaArrayToString(k, this[k], this.schema[k]));
            } else if (this.schema[k].type === "object") {
              search.push(schemaObjectToString(k, this[k], this.schema[k]));
            }
          } else if (typeof this[k] === "number" || typeof this[k] === "string" && this[k].length) {
            search.push(encodeURI(k + "=" + this[k]));
          } else if (Array.isArray(this[k])) {
            for (var i = 0, n = this[k].length; i < n; i++) {
              search.push(encodeURI(k) + "[]=" + encodeURI(this[k][i]));
            }
          }
        }
      }

      return search.length ? "?" + search.join("&") : "";
    }
  }, {
    key: "set",
    value: function set(props) {
      for (var k in props) {
        if (props.hasOwnProperty(k) && !reserved[k]) {
          this[k] = props[k];
        } else if (Search.prototype[k]) {
          throw "Invalid property \"" + k + "\", this is a reserved key";
        }
      }
      return this;
    }
  }, {
    key: "get",
    value: function get(key) {
      var props = {};
      if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
        for (var i = 0, n = key.length; i < n; i++) {
          props[key[i]] = this.get(key[i]);
        }
        return props;
      }
      return this[key];
    }
  }]);

  return Search;
}();

exports.default = Search;


Search.prototype.clear = clear;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var set = __webpack_require__(8);
var clear = __webpack_require__(1);

function pathnameToArray(pathname) {
  pathname = pathname || "";
  if (pathname[0] === "/") {
    pathname = pathname.substring(1);
  }
  if (pathname[pathname.length - 1] === "/") {
    pathname = pathname.substring(0, pathname.length - 1);
  }
  return pathname.length ? pathname.split("/") : [];
}

function maybeError(self, key) {
  if (typeof self[key] === "function") {
    throw new Error("Invalid parameter name: \"" + key + "\", this is a reserved word.");
  }
}

var Parameters = function () {
  function Parameters(schema, location) {
    _classCallCheck(this, Parameters);

    this.schema = pathnameToArray(schema.pathname);
    this.value = pathnameToArray(location.pathname);
    this.isMatch = !!location.pathname;

    if (this.schema.length === 1 && this.schema[0] === "*") {
      this.schema = this.value.map(function () {
        return "*";
      });
    } else if (this.schema.length !== this.value.length) {
      this.isMatch = false;
    }

    for (var i = 0, n = this.schema.length; i < n; i++) {
      if (this.schema[i][0] !== ":" && this.schema[i] !== "*" && this.schema[i] !== this.value[i]) {
        this.isMatch = false;
      } else if (this.schema[i][0] === ":") {
        maybeError(this, this.schema[i].slice(1));
        this[this.schema[i].slice(1)] = this.value[i];
      }
    }
  }

  _createClass(Parameters, [{
    key: "push",
    value: function push(value) {
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
        for (var k in value) {
          maybeError(this, k);
          this[k] = value[k];
          this.schema.push(value[k]);
          this.value.push(value[k]);
        }
      } else {
        this.schema.push(value);
        this.value.push(value);
      }

      return this;
    }
  }, {
    key: "unshift",
    value: function unshift(value) {
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
        for (var k in value) {
          maybeError(this, k);
          this[k] = value[k];
          this.schema.unshift(value[k]);
          this.value.unshift(value[k]);
        }
      } else {
        this.schema.unshift(value);
        this.value.unshift(value);
      }

      return this;
    }
  }, {
    key: "startsWith",
    value: function startsWith(value) {
      var str = this.toString();
      var path = "/" + pathnameToArray(value).join("/");
      var n = path.length;
      return str.indexOf(path) === 0 && (str[n] === "/" || !str[n + 1]);
    }
  }, {
    key: "contains",
    value: function contains(value) {
      var str = this.toString();
      var path = "/" + pathnameToArray(value).join("/");
      return str.indexOf(path) > -1;
    }
  }, {
    key: "is",
    value: function is(value) {
      return this.toString() === "/" + pathnameToArray(value).join("/");
    }
  }, {
    key: "toString",
    value: function toString() {
      var length = this.value.length;
      var query = new Array(length);

      for (var i = 0; i < length; i++) {
        query[i] = this.value[i];
      }

      return "/" + query.join("/");
    }
  }]);

  return Parameters;
}();

exports.default = Parameters;


Parameters.prototype.set = set;
Parameters.prototype.clear = clear;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = set;
function set(props) {
  for (var k in props) {
    this[k] = props[k];
  }
  return this;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hash = function () {
  function Hash(schema, location) {
    _classCallCheck(this, Hash);

    this.schema = schema.hash;
    this.value = location.hash;
    this.isMatch = this.schema === this.value;
  }

  _createClass(Hash, [{
    key: "toString",
    value: function toString() {
      var str = this.value || "";
      if (str && str[0] !== "#") {
        str = "#" + str;
      }
      return str;
    }
  }]);

  return Hash;
}();

exports.default = Hash;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (test) {
  test("http://www.google.com/").this(function () {
    var l = new _index2.default("http://www.google.com/");
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/",
        pathname: "/",
        hash: "",
        search: ""
      },

      location: {
        origin: undefined,
        href: undefined,
        hash: undefined,
        pathname: undefined,
        search: undefined
      },

      hash: {
        schema: "",
        value: undefined,
        isMatch: false
      },

      origin: {
        schema: "http://www.google.com",
        value: undefined,
        isMatch: false
      },

      search: {
        schema: {},
        keys: [],
        isMatch: false
      },

      params: {
        schema: [],
        value: [],
        isMatch: false
      },

      isMatch: false
    };
  });
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (test) {
  test("http://www.google.com/ (object.origin)").this(function () {
    var l = new _index2.default({ origin: "http://www.google.com/" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/",
        hash: "",
        pathname: "/",
        search: ""
      },

      location: {
        origin: undefined,
        href: undefined,
        hash: undefined,
        pathname: undefined,
        search: undefined
      },

      origin: {
        schema: "http://www.google.com",
        value: undefined,
        isMatch: false
      },

      search: {
        schema: {},
        keys: [],
        isMatch: false
      },

      params: {
        schema: [],
        value: [],
        isMatch: false
      },

      hash: {
        schema: "",
        value: undefined,
        isMatch: false
      },

      isMatch: false
    };
  });

  test("http://www.google.com/ (object.href)").this(function () {
    var l = new _index2.default({ href: "http://www.google.com/" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/",
        hash: "",
        pathname: "/",
        search: ""
      },

      location: {
        origin: undefined,
        href: undefined,
        hash: undefined,
        pathname: undefined,
        search: undefined
      },

      origin: {
        schema: "http://www.google.com",
        value: undefined,
        isMatch: false
      },

      search: {
        schema: {},
        keys: [],
        isMatch: false
      },

      params: {
        schema: [],
        value: [],
        isMatch: false
      },

      hash: {
        schema: "",
        value: undefined,
        isMatch: false
      },

      isMatch: false
    };
  });
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (test) {
  test("http://www.google.com/:x").this(function () {
    var l = new _index2.default("http://www.google.com/:x", { href: "http://www.google.com/cat" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/:x",
        pathname: "/:x",
        hash: "",
        search: ""
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/cat",
        pathname: "/cat",
        hash: "",
        search: ""
      },

      origin: {
        schema: "http://www.google.com",
        value: "http://www.google.com",
        isMatch: true
      },

      search: {
        schema: {},
        keys: [],
        isMatch: true
      },

      params: {
        schema: [":x"],
        value: ["cat"],
        x: "cat",
        isMatch: true
      },

      hash: {
        schema: "",
        value: "",
        isMatch: true
      },

      isMatch: true
    };
  });

  test("http://www.google.com/:x/:y").this(function () {
    var l = new _index2.default("http://www.google.com/:x/:y", { href: "http://www.google.com/cats/dogs" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/:x/:y",
        pathname: "/:x/:y",
        hash: "",
        search: ""
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/cats/dogs",
        pathname: "/cats/dogs",
        hash: "",
        search: ""
      },

      origin: {
        schema: "http://www.google.com",
        value: "http://www.google.com",
        isMatch: true
      },

      search: {
        schema: {},
        keys: [],
        isMatch: true
      },

      params: {
        schema: [":x", ":y"],
        value: ["cats", "dogs"],
        x: "cats",
        y: "dogs",
        isMatch: true
      },

      hash: {
        schema: "",
        value: "",
        isMatch: true
      },

      isMatch: true
    };
  });

  test("http://www.google.com/:x/:y (isMatch: false)").this(function () {
    var l = new _index2.default("http://www.google.com/:x/:y", { href: "http://www.google.com/cats" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/:x/:y",
        pathname: "/:x/:y",
        hash: "",
        search: ""
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/cats",
        pathname: "/cats",
        hash: "",
        search: ""
      },

      origin: {
        schema: "http://www.google.com",
        value: "http://www.google.com",
        isMatch: true
      },

      search: {
        schema: {},
        keys: [],
        isMatch: true
      },

      params: {
        schema: [":x", ":y"],
        value: ["cats"],
        x: "cats",
        isMatch: false
      },

      hash: {
        schema: "",
        value: "",
        isMatch: true
      },

      isMatch: false
    };
  });

  test("http://www.google.com/:x/:y (contains)").this(function () {
    var l = new _index2.default(null, "http://www.google.com/cats/dogs");
    return l.params.contains("/dogs") && l.params.contains("/dogs/") && !l.params.contains("/fish");
  }).isEqual(function () {
    return true;
  });
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (test) {
  test("http://www.google.com?search=1 (schema only)").this(function () {
    var l = new _index2.default({ href: "http://www.google.com/?search=1" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search=1",
        pathname: "/",
        hash: "",
        search: "?search=1"
      },

      location: {
        origin: undefined,
        href: undefined,
        pathname: undefined,
        hash: undefined,
        search: undefined
      },

      origin: {
        schema: "http://www.google.com",
        value: undefined,
        isMatch: false
      },

      search: {
        schema: {
          search: {
            key: "search",
            value: 1,
            delimiter: false,
            type: "object",
            map: []
          }
        },

        keys: ["search"],
        isMatch: false
      },

      params: {
        schema: [],
        value: [],
        isMatch: false
      },

      hash: {
        schema: "",
        value: undefined,
        isMatch: false
      },

      isMatch: false
    };
  });

  test("http://www.google.com?search=:number (schema only)").this(function () {
    var l = new _index2.default("http://www.google.com/?search=:number");
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search=:number",
        pathname: "/",
        hash: "",
        search: "?search=:number"
      },

      location: {
        origin: undefined,
        href: undefined,
        pathname: undefined,
        hash: undefined,
        search: undefined
      },

      origin: {
        schema: "http://www.google.com",
        value: undefined,
        isMatch: false
      },

      search: {
        schema: {
          search: {
            key: "search",
            value: ":number",
            delimiter: false,
            type: "object",
            map: ["number"]
          }
        },

        keys: ["search"],
        isMatch: false
      },

      params: {
        schema: [],
        value: [],
        isMatch: false
      },

      hash: {
        schema: "",
        value: undefined,
        isMatch: false
      },

      isMatch: false
    };
  });

  test("http://www.google.com?search[]").this(function () {
    var l = new _index2.default({
      href: "http://www.google.com/?search[]"
    }, {
      href: "http://www.google.com/?search[]=1&search[]=2"
    });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search[]",
        pathname: "/",
        hash: "",
        search: "?search[]"
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search[]=1&search[]=2",
        pathname: "/",
        hash: "",
        search: "?search[]=1&search[]=2"
      },

      origin: {
        schema: "http://www.google.com",
        value: "http://www.google.com",
        isMatch: true
      },

      search: {
        schema: {
          search: {
            key: "search",
            value: undefined,
            delimiter: false,
            type: "array",
            map: []
          }
        },
        search: [1, 2],
        keys: ["search"],
        isMatch: true
      },

      params: {
        schema: [],
        value: [],
        isMatch: true
      },

      hash: {
        schema: "",
        value: "",
        isMatch: true
      },

      isMatch: true
    };
  });

  test("http://www.google.com (no schema and array)").this(function () {
    var l = new _index2.default("http://www.google.com", { href: "http://www.google.com/?search[]=1&search[]=2" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com",
        pathname: "/",
        hash: "",
        search: ""
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search[]=1&search[]=2",
        pathname: "/",
        hash: "",
        search: "?search[]=1&search[]=2"
      },

      origin: {
        schema: "http://www.google.com",
        value: "http://www.google.com",
        isMatch: true
      },

      search: {
        isMatch: false,
        schema: {},
        keys: [],
        search: [1, 2]
      },

      params: {
        schema: [],
        value: [],
        isMatch: true
      },

      hash: {
        schema: "",
        value: "",
        isMatch: true
      },

      isMatch: false
    };
  });

  test("http://www.google.com/?search=:number").this(function () {
    var l = new _index2.default("http://www.google.com/?search=:number", { href: "http://www.google.com/?search=1" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search=:number",
        pathname: "/",
        hash: "",
        search: "?search=:number"
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search=1",
        pathname: "/",
        hash: "",
        search: "?search=1"
      },

      origin: {
        schema: "http://www.google.com",
        value: "http://www.google.com",
        isMatch: true
      },

      search: {
        isMatch: true,
        schema: {
          search: {
            key: "search",
            value: ":number",
            delimiter: false,
            type: "object",
            map: ["number"]
          }
        },

        keys: ["search"],
        search: {
          number: 1
        }
      },

      params: {
        schema: [],
        value: [],
        isMatch: true
      },

      hash: {
        schema: "",
        value: "",
        isMatch: true
      },

      isMatch: true
    };
  });

  test("http://www.google.com/?search[]=:number").this(function () {
    var l = new _index2.default("http://www.google.com/?search[]=:number", { href: "http://www.google.com/?search[]=1&search[]=2" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search[]=:number",
        pathname: "/",
        hash: "",
        search: "?search[]=:number"
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search[]=1&search[]=2",
        pathname: "/",
        hash: "",
        search: "?search[]=1&search[]=2"
      },

      origin: {
        schema: "http://www.google.com",
        value: "http://www.google.com",
        isMatch: true
      },

      search: {
        isMatch: true,
        schema: {
          search: {
            key: "search",
            value: ":number",
            delimiter: false,
            type: "array",
            map: ["number"]
          }
        },
        keys: ["search"],
        search: [{ number: 1 }, { number: 2 }]
      },

      params: {
        schema: [],
        value: [],
        isMatch: true
      },

      hash: {
        schema: "",
        value: "",
        isMatch: true
      },

      isMatch: true
    };
  });

  test("http://www.google.com/?person[]=:age+:gender").this(function () {
    var l = new _index2.default("http://www.google.com/?person[]=:age+:gender", { href: "http://www.google.com/?person[]=1+male&person[]=2+female" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?person[]=:age+:gender",
        pathname: "/",
        hash: "",
        search: "?person[]=:age+:gender"
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?person[]=1+male&person[]=2+female",
        pathname: "/",
        hash: "",
        search: "?person[]=1+male&person[]=2+female"
      },

      origin: {
        schema: "http://www.google.com",
        value: "http://www.google.com",
        isMatch: true
      },

      search: {
        isMatch: true,
        schema: {
          person: {
            key: "person",
            value: ":age+:gender",
            delimiter: "+",
            type: "array",
            map: ["age", "gender"]
          }
        },
        keys: ["person"],
        person: [{ age: 1, gender: "male" }, { age: 2, gender: "female" }]
      },

      params: {
        schema: [],
        value: [],
        isMatch: true
      },

      hash: {
        schema: "",
        value: "",
        isMatch: true
      },

      isMatch: true
    };
  });

  test("http://www.google.com/?person[]=:age+:gender (incomplete)").this(function () {
    var l = new _index2.default("http://www.google.com/?person[]=:age+:gender", { href: "http://www.google.com/?person[]=1&person[]=2+female" });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?person[]=:age+:gender",
        pathname: "/",
        hash: "",
        search: "?person[]=:age+:gender"
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?person[]=1&person[]=2+female",
        pathname: "/",
        hash: "",
        search: "?person[]=1&person[]=2+female"
      },

      origin: {
        schema: "http://www.google.com",
        value: "http://www.google.com",
        isMatch: true
      },

      search: {
        isMatch: true,
        schema: {
          person: {
            key: "person",
            value: ":age+:gender",
            delimiter: "+",
            type: "array",
            map: ["age", "gender"]
          }
        },
        keys: ["person"],
        person: [{ age: 1 }, { age: 2, gender: "female" }]
      },

      params: {
        schema: [],
        value: [],
        isMatch: true
      },

      hash: {
        schema: "",
        value: "",
        isMatch: true
      },

      isMatch: true
    };
  });
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map