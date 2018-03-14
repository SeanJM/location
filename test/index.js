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

var _URL = __webpack_require__(5);

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

var _schemaStringEmptyLocation = __webpack_require__(4);

var _schemaStringEmptyLocation2 = _interopRequireDefault(_schemaStringEmptyLocation);

var _schemaObjectEmptyLocation = __webpack_require__(11);

var _schemaObjectEmptyLocation2 = _interopRequireDefault(_schemaObjectEmptyLocation);

var _schemaParameters = __webpack_require__(12);

var _schemaParameters2 = _interopRequireDefault(_schemaParameters);

var _schemaSearch = __webpack_require__(13);

var _schemaSearch2 = _interopRequireDefault(_schemaSearch);

var _toString = __webpack_require__(14);

var _toString2 = _interopRequireDefault(_toString);

var _matching = __webpack_require__(15);

var _matching2 = _interopRequireDefault(_matching);

var _hash = __webpack_require__(16);

var _hash2 = _interopRequireDefault(_hash);

var _urlMethods = __webpack_require__(17);

var _urlMethods2 = _interopRequireDefault(_urlMethods);

var _nulls = __webpack_require__(18);

var _nulls2 = _interopRequireDefault(_nulls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tinyTest2.default)(function (test, load) {
  (0, _schemaStringEmptyLocation2.default)(test);
  (0, _schemaObjectEmptyLocation2.default)(test);
  (0, _schemaParameters2.default)(test);
  (0, _schemaSearch2.default)(test);
  (0, _toString2.default)(test);
  (0, _matching2.default)(test);
  (0, _hash2.default)(test);
  (0, _urlMethods2.default)(test);
  (0, _nulls2.default)(test);
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
        hash: ""
      },
      location: {},
      origin: {},
      search: {},
      params: {
        schema: [],
        value: [],
        isMatch: true
      },
      hash: {
        isMatch: true
      },
      isMatch: true
    };
  });
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Origin = __webpack_require__(6);

var _Origin2 = _interopRequireDefault(_Origin);

var _Search = __webpack_require__(7);

var _Search2 = _interopRequireDefault(_Search);

var _Parameters = __webpack_require__(8);

var _Parameters2 = _interopRequireDefault(_Parameters);

var _Hash = __webpack_require__(10);

var _Hash2 = _interopRequireDefault(_Hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URL = function () {
  function URL(schema, location) {
    _classCallCheck(this, URL);

    this.setSchema(schema || {});
    this.setLocation(location || {});

    this.origin = new _Origin2.default(this.schema, this.location);
    this.search = new _Search2.default(this.location);
    this.params = new _Parameters2.default(this.schema, this.location);
    this.hash = new _Hash2.default(this.schema, this.location);

    this.isMatch = this.params.isMatch && this.hash.isMatch;
  }

  _createClass(URL, [{
    key: "test",
    value: function test(location) {
      return new URL(this.schema, location).isMatch;
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
        hash: this.getUrlHash(schema)
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
        if (location.href && location.search && location.href.indexOf("?") === -1) {
          return location.href + this.getUrlSearch(location.search);
        }
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
      } else if (location) {
        location = location.split("?")[0];
        if (location.indexOf("http") === 0) {
          end = location.indexOf("/", location.indexOf("//") + 2);
          origin = location.substring(0, end > -1 ? end : location.length);
        } else {
          origin = location.split("/")[0] ? location.split("/")[0] : undefined;
        }
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
        if (split[1]) {
          split[1] = split[1].split("#")[0];
        }
        return split[1] ? "?" + split[1] : "";
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
      var x = new URL(this.schema, this.location);

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

      this.origin = new _Origin2.default(this.schema, this.location);
      this.search = new _Search2.default(this.location);
      this.params = new _Parameters2.default(this.schema, this.location);
      this.hash = new _Hash2.default(this.schema, this.location);
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
/* 6 */
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

    this.value = location.origin;
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
/* 7 */
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
  setValue: true,
  toString: true,
  set: true,
  get: true
};

var Search = function () {
  function Search(location) {
    _classCallCheck(this, Search);

    this.setValue(location.search);
  }

  _createClass(Search, [{
    key: "setValue",
    value: function setValue(search) {
      var parts = search ? search.split("?")[1].split("&") : [];

      var i = -1;
      var n = parts.length;
      var t = [];

      for (var k in this) {
        if (this.hasOwnProperty(k)) {
          delete this[k];
        }
      }

      while (++i < n) {
        t = parts[i].split("=");
        t[1] = decodeURI(t[1] || "1");
        if (t[0].substr(-2) === "[]") {
          t[0] = t[0].substring(0, t[0].length - 2);
          if (reserved[t[0]]) {
            throw new Error("Invalid key \"" + t[0] + "\", this key is reserved.");
          }
          if (!this[t[0]]) {
            this[t[0]] = [];
          }
          this[t[0]].push(t[1]);
        } else {
          if (reserved[t[0]]) {
            throw new Error("Invalid key \"" + t[0] + "\", this key is reserved.");
          }
          this[t[0]] = t[1];
        }
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      var search = [];
      for (var k in this) {
        if (this.hasOwnProperty(k) && !reserved[k]) {
          if (Array.isArray(this[k])) {
            var x = -1;
            var y = this[k].length;
            while (++x < y) {
              search.push(k + "[]=" + encodeURI(this[k][x]));
            }
          } else {
            search.push(k + "=" + encodeURI(this[k]));
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var set = __webpack_require__(9);
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

function schemaType(string) {
  if (string[0] === ":") {
    return {
      type: "variable",
      key: string.slice(1)
    };
  }
  return {
    type: "constant",
    key: string
  };
}

var Parameters = function () {
  function Parameters(schema, location) {
    _classCallCheck(this, Parameters);

    var schemaValue = [];
    var t;

    this.schema = pathnameToArray(schema.pathname);
    this.value = pathnameToArray(location.pathname);
    this.isMatch = true;

    for (var i = this.schema.length - 1; i >= 0; i--) {
      if (this.schema[i] === "*" && this.schema[i - 1] === "*") {
        this.schema.splice(i, 1);
      }
    }

    for (var _i = 0, n = this.schema.length; _i < n; _i++) {
      if (this.schema[_i] === "*") {
        var v = _i;
        while (this.schema.slice(_i).indexOf(this.value[v]) === -1 && this.value[v]) {
          schemaValue.push(schemaType(this.value[v]));
          v += 1;
        }
      } else {
        schemaValue.push(schemaType(this.schema[_i]));
      }
    }

    this.schema = schemaValue;

    if (this.schema.length !== this.value.length) {
      this.isMatch = false;
    }

    for (var _i2 = 0, _n = this.schema.length; _i2 < _n; _i2++) {
      t = this.schema[_i2];
      if (t.type !== "variable" && t.key !== "*" && t.key !== this.value[_i2]) {
        this.isMatch = false;
      } else if (t.type === "variable") {
        maybeError(this, t.key.slice(1));
        this[t.key] = this.value[_i2];
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
          this.schema.push(schemaType(value[k]));
          this.value.push(value[k]);
        }
      } else {
        this.schema.push(schemaType(value));
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
          this.schema.unshift(schemaType(value[k]));
          this.value.unshift(value[k]);
        }
      } else {
        this.schema.unshift(schemaType(value));
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
      var query = [];

      if (this.schema.length) {
        for (var i = 0, n = this.schema.length; i < n; i++) {
          if (this.schema[i].type === "variable") {
            query.push(this[this.schema[i].key]);
          } else {
            query.push(this.schema[i].key);
          }
        }
      } else {
        for (var _i3 = 0, _n2 = this.value.length; _i3 < _n2; _i3++) {
          query[_i3] = this.value[_i3];
        }
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
/* 9 */
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
/* 10 */
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

    this.schema = schema.hash || undefined;
    this.value = location.hash || undefined;
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
        pathname: "/",
        hash: ""
      },
      location: {},
      origin: {},
      search: {},
      params: {
        schema: [],
        value: [],
        isMatch: true
      },
      hash: {
        isMatch: true
      },
      isMatch: true
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
        pathname: "/",
        hash: ""
      },
      location: {},
      origin: {},
      search: {},
      params: {
        schema: [],
        value: [],
        isMatch: true
      },
      hash: {
        isMatch: true
      },
      isMatch: true
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
        hash: ""
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/cat",
        pathname: "/cat",
        hash: "",
        search: ""
      },

      origin: {
        value: "http://www.google.com"
      },

      search: {
        value: undefined
      },

      params: {
        schema: [{ type: "variable", key: "x" }],
        value: ["cat"],
        x: "cat",
        isMatch: true
      },

      hash: {
        schema: undefined,
        value: undefined,
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
        hash: ""
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/cats/dogs",
        pathname: "/cats/dogs",
        hash: "",
        search: ""
      },

      origin: {
        value: "http://www.google.com"
      },

      search: {
        value: undefined
      },

      params: {
        schema: [{
          type: "variable",
          key: "x"
        }, {
          type: "variable",
          key: "y"
        }],
        value: ["cats", "dogs"],
        x: "cats",
        y: "dogs",
        isMatch: true
      },

      hash: {
        schema: undefined,
        value: undefined,
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
        hash: ""
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/cats",
        pathname: "/cats",
        hash: "",
        search: ""
      },

      origin: {
        value: "http://www.google.com"
      },

      search: {
        value: undefined
      },

      params: {
        schema: [{
          type: "variable",
          key: "x"
        }, {
          type: "variable",
          key: "y"
        }],
        value: ["cats"],
        x: "cats",
        isMatch: false
      },

      hash: {
        schema: undefined,
        value: undefined,
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

  test("http://localhost:3000/startswith/ (startsWith)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3000/startswith/"
    });
    return url.params.startsWith("startswith");
  }).isDeepEqual(function () {
    return true;
  });

  test("/startswith (startsWith)").this(function () {
    var url = new _index2.default(null, {
      href: "/login"
    });
    return url.params.startsWith("/login");
  }).isDeepEqual(function () {
    return true;
  });

  test("http://localhost:3000/startswith/ (startsWith multiple)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3000/startswith/reset"
    });
    return url.params.startsWith("startswith/reset") && url.params.startsWith("/startswith/reset") && !url.params.startsWith("/startswith/res") && !url.params.startsWith("startswith/test");
  }).isDeepEqual(function () {
    return true;
  });

  test("http://localhost:3000/starts/with/that (is)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3000/starts/with/"
    });
    return url.params.is("starts/with/") && url.params.is("/starts/with/") && url.params.is("starts/with") && !url.params.is("starts/with/that");
  }).isDeepEqual(function () {
    return true;
  });

  test("http://localhost:3001/ (startsWith)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3001/"
    });
    return url.params.startsWith("login");
  }).isDeepEqual(function () {
    return false;
  });

  test("http://localhost:3001/ (push)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3001/"
    });
    url.params.push("login");
    return url.toString();
  }).isDeepEqual(function () {
    return "http://localhost:3001/login";
  });

  test("http://localhost:3001/ (push object)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3001/"
    });

    url.params.push({ name: "login" });

    return [url.toString(), url.params.name];
  }).isDeepEqual(function () {
    return ["http://localhost:3001/login", "login"];
  });

  test("http://localhost:3001/ (unshift)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3001/"
    });
    url.params.unshift("login");
    return url.toString();
  }).isDeepEqual(function () {
    return "http://localhost:3001/login";
  });

  test("http://localhost:3001/ (unshift object)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3001/"
    });

    url.params.unshift({ name: "login" });

    return [url.toString(), url.params.name];
  }).isDeepEqual(function () {
    return ["http://localhost:3001/login", "login"];
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
  test("http://www.google.com?search[]").this(function () {
    var l = new _index2.default({
      href: "http://www.google.com/"
    }, {
      href: "http://www.google.com/?search[]=1&search[]=2"
    });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "http://www.google.com",
        href: "http://www.google.com/",
        pathname: "/",
        hash: ""
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search[]=1&search[]=2",
        pathname: "/",
        hash: "",
        search: "?search[]=1&search[]=2"
      },

      origin: {
        value: "http://www.google.com"
      },

      search: {
        search: ["1", "2"]
      },

      params: {
        schema: [],
        value: [],
        isMatch: true
      },

      hash: {
        schema: undefined,
        value: undefined,
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
        hash: ""
      },

      location: {
        origin: "http://www.google.com",
        href: "http://www.google.com/?search[]=1&search[]=2",
        pathname: "/",
        hash: "",
        search: "?search[]=1&search[]=2"
      },

      origin: {
        value: "http://www.google.com"
      },

      search: {
        search: ["1", "2"]
      },

      params: {
        schema: [],
        value: [],
        isMatch: true
      },

      hash: {
        schema: undefined,
        value: undefined,
        isMatch: true
      },

      isMatch: true
    };
  });

  test("Incorrectly formatted location object (React Router)").this(function () {
    var url = new _index2.default("/insurance/receipts/all", {
      origin: undefined,
      href: "/insurance/receipts/all",
      pathname: "/insurance/receipts/all",
      hash: "",
      search: "?index=0&length=20"
    });
    return url;
  }).isDeepEqual(function () {
    return {
      schema: {
        href: "/insurance/receipts/all",
        pathname: "/insurance/receipts/all",
        hash: ""
      },
      location: {
        href: "/insurance/receipts/all?index=0&length=20",
        pathname: "/insurance/receipts/all",
        hash: "",
        search: "?index=0&length=20"
      },
      origin: {},
      search: {
        index: "0",
        length: "20"
      },
      params: {
        schema: [{
          type: "constant",
          key: "insurance"
        }, {
          type: "constant",
          key: "receipts"
        }, {
          type: "constant",
          key: "all"
        }],
        value: ["insurance", "receipts", "all"],
        isMatch: true
      },
      hash: {
        schema: undefined,
        value: undefined,
        isMatch: true
      },
      isMatch: true
    };
  });

  test("http://localhost:3000/login?reset (default value)").this(function () {
    var url = new _index2.default(null, "http://localhost:3000/login?reset");
    return url.search.reset;
  }).isDeepEqual(function () {
    return "1";
  });

  test("http://localhost:3000/?string (search get)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3000/?string"
    });

    url.search.string = "this will be an encoded string";
    return url.search.get("string");
  }).isDeepEqual(function () {
    return "this will be an encoded string";
  });

  test("http://localhost:3000/?string (search get array)").this(function () {
    var url = new _index2.default({
      href: "http://localhost:3000/?string"
    });

    url.search.set({
      string: "this will be an encoded string",
      number: 2098
    });

    return url.search.get(["string", "number"]);
  }).isDeepEqual(function () {
    return {
      string: "this will be an encoded string",
      number: 2098
    };
  });

  test("http://localhost:3000/?select=value#hash (search with hash)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3000/?select=value#hash"
    });

    return url;
  }).isDeepEqual(function () {
    return {
      schema: {},
      location: {
        origin: "http://localhost:3000",
        href: "http://localhost:3000/?select=value#hash",
        pathname: "/",
        hash: "#hash",
        search: "?select=value"
      },
      origin: {
        value: "http://localhost:3000"
      },
      search: {
        select: "value"
      },
      params: {
        schema: [],
        value: [],
        isMatch: true
      },
      hash: {
        value: "#hash",
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (test) {
  test("http://www.google.com/ (toString)").this(function () {
    var l = new _index2.default(null, "http://www.google.com/");
    return l.toString();
  }).isEqual(function () {
    return "http://www.google.com/";
  });

  test("http://www.google.com/?search=2 (toString)").this(function () {
    var l = new _index2.default(null, { href: "http://www.google.com/?search=2" });
    l.search.search = 3;
    return l.toString();
  }).isEqual(function () {
    return "http://www.google.com/?search=3";
  });

  test("http://www.google.com/?search[]=1&search[]=2 (toString)").this(function () {
    var l = new _index2.default(null, { href: "http://www.google.com/?search[]=1&search[]=2" });
    l.search.search[0] = 3;
    return l.toString();
  }).isEqual(function () {
    return "http://www.google.com/?search[]=3&search[]=2";
  });

  test("http://www.google.com/?search[]=1&search[]=2 (toString)").this(function () {
    var l = new _index2.default("http://www.google.com/", {
      href: "http://www.google.com/?search[]=1&search[]=2"
    });
    l.search.search[0] = 3;
    return l.toString();
  }).isEqual(function () {
    return "http://www.google.com/?search[]=3&search[]=2";
  });

  test("/user/:userID (string HREF)").this(function () {
    var l = new _index2.default("/user/:userID", "/user/SeanJM");
    return l.params.userID;
  }).isEqual(function () {
    return "SeanJM";
  });

  test("/user/:userID (object)").this(function () {
    var l = new _index2.default("/user/:userID", { pathname: "/user/SeanJM" });
    return l.params.userID;
  }).isEqual(function () {
    return "SeanJM";
  });

  test("/user/:userID?depth[]=:number+:id").this(function () {
    var l = new _index2.default("/user/:userID?depth[]=:number+:id", {
      pathname: "/user/SeanJM",
      search: "?depth[]=0+o8jk&depth[]=1+99qE&depth[]=2+eBPs"
    });
    return l.search.depth;
  }).isDeepEqual(function () {
    return ["0+o8jk", "1+99qE", "2+eBPs"];
  });

  test("Empty").this(function () {
    var l = new _index2.default();
    return l.toString();
  }).isEqual(function () {
    return "/";
  });

  test("/board/:category?page").this(function () {
    var back = new _index2.default("/user/:userID/:section?page");
    back.params.userID = "98374jf";
    back.params.section = "comments";
    back.search.page = 1;
    return back.toString();
  }).isEqual(function () {
    return "/user/98374jf/comments?page=1";
  });

  test("http://localhost:3000/login?reset (toString)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3000/login?reset"
    });
    return url.toString();
  }).isDeepEqual(function () {
    return "http://localhost:3000/login?reset=1";
  });

  test("http://localhost:3000/?string (search set)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3000/?string"
    });

    url.search.set({
      string: "this will be an encoded string"
    });

    return url.toString();
  }).isDeepEqual(function () {
    return "http://localhost:3000/?string=this%20will%20be%20an%20encoded%20string";
  });

  test("http://localhost:3000/?string (set pathname)").this(function () {
    try {
      var url = new _index2.default(null, {
        href: "http://localhost:3000/?string"
      });

      url.set({
        pathname: "/path/name"
      });

      return url.toString();
    } catch (e) {
      console.log(e);
    }
  }).isDeepEqual(function () {
    return "http://localhost:3000/path/name?string=1";
  });

  test("http://localhost:3000/?string (set search)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3000/login"
    });

    url.set({
      search: "?search=1&cat=fluffy&dog=sam"
    });

    return url.toString();
  }).isDeepEqual(function () {
    return "http://localhost:3000/login?search=1&cat=fluffy&dog=sam";
  });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (test) {
  test("/a vs /a/b (does not match)").this(function () {
    var a = new _index2.default("/:a", "/a");
    var b = new _index2.default("/:a", "/a/b");
    return a.isMatch && !b.isMatch;
  }).isEqual(function () {
    return true;
  });

  test("*").this(function () {
    var l = new _index2.default("*", "http://www.domain.com/?origin=user+98fjhd+all+1");
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "*",
        href: "*",
        pathname: "/",
        hash: ""
      },
      location: {
        origin: "http://www.domain.com",
        href: "http://www.domain.com/?origin=user+98fjhd+all+1",
        pathname: "/",
        hash: "",
        search: "?origin=user+98fjhd+all+1"
      },
      origin: {
        value: "http://www.domain.com"
      },
      search: {
        origin: "user+98fjhd+all+1"
      },
      params: {
        schema: [],
        value: [],
        isMatch: true
      },
      hash: {
        schema: undefined,
        value: undefined,
        isMatch: true
      },
      isMatch: true
    };
  });

  test("*?origin=user+:userID+:section+:page (pathname, search)").this(function () {
    var l = new _index2.default("*/?origin=user+:userID+:section+:page", {
      pathname: "/post/p398dfjkj",
      search: "?origin=user+98fjhd+all+1"
    });
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: "*",
        href: "*/?origin=user+:userID+:section+:page",
        pathname: "/",
        hash: ""
      },
      location: {
        href: "/post/p398dfjkj",
        pathname: "/post/p398dfjkj",
        hash: "",
        search: "?origin=user+98fjhd+all+1"
      },
      origin: {},
      search: {
        origin: "user+98fjhd+all+1"
      },
      params: {
        schema: [],
        value: ["post", "p398dfjkj"],
        isMatch: false
      },
      hash: {
        schema: undefined,
        value: undefined,
        isMatch: true
      },
      isMatch: false
    };
  });

  test("/*/ (pathname, search)").this(function () {
    var l = new _index2.default("/*/", "/post/p398dfjkj");
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {
        origin: undefined,
        href: "/*/",
        pathname: "/*/",
        hash: ""
      },
      location: {
        href: "/post/p398dfjkj",
        pathname: "/post/p398dfjkj",
        hash: "",
        search: ""
      },
      origin: {},
      search: {
        value: undefined
      },
      params: {
        schema: [{
          type: "constant",
          key: "post"
        }, {
          type: "constant",
          key: "p398dfjkj"
        }],
        value: ["post", "p398dfjkj"],
        isMatch: true
      },
      hash: {
        schema: undefined,
        value: undefined,
        isMatch: true
      },
      isMatch: true
    };
  });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (test) {
  test("http://localhost:3001/#my-hash (Object)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3001/#my-hash"
    });
    return url;
  }).isDeepEqual(function () {
    return {
      schema: {},
      location: {
        origin: "http://localhost:3001",
        href: "http://localhost:3001/#my-hash",
        pathname: "/",
        hash: "#my-hash",
        search: ""
      },
      origin: {
        value: "http://localhost:3001"
      },
      search: {
        value: undefined
      },
      params: {
        schema: [],
        value: [],
        isMatch: true
      },
      hash: {
        value: "#my-hash",
        isMatch: false
      },
      isMatch: false
    };
  });

  test("http://localhost:3001/#my-hash (query hash)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3001/#my-hash"
    });

    return url.location.hash;
  }).isDeepEqual(function () {
    return "#my-hash";
  });

  test("http://localhost:3001/#my-hash (hash toString)").this(function () {
    var url = new _index2.default(null, {
      href: "http://localhost:3001/#my-hash"
    });

    url.hash.value = "#changed-hash";
    return url.toString();
  }).isDeepEqual(function () {
    return "http://localhost:3001/#changed-hash";
  });
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (test) {
  test("https://maps.googleapis.com/maps/api/place/textsearch/json (Copy)").this(function () {
    var url = new _index2.default(null, "https://maps.googleapis.com/maps/api/place/textsearch/json");
    var copy = url.copy();

    url.search.query = "test";

    console.log(copy.toString());

    return [url.toString(), copy.toString()];
  }).isDeepEqual(function () {
    return ["https://maps.googleapis.com/maps/api/place/textsearch/json?query=test", "https://maps.googleapis.com/maps/api/place/textsearch/json"];
  });

  test("/location/:lang match method").this(function () {
    var url = new _index2.default("/location/:lang");
    return [url.test("/location/english"), url.test("/loc/english"), url.test(undefined)];
  }).isDeepEqual(function () {
    return [true, false, false];
  });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (test) {
  test("new URL(null, null)").this(function () {
    var l = new _index2.default(null, null);
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {},
      location: {},
      origin: {},
      search: {
        value: undefined
      },
      params: {
        schema: [],
        value: [],
        isMatch: true
      },
      hash: {
        isMatch: true
      },
      isMatch: true
    };
  });

  test("new URL(null, {})").this(function () {
    var l = new _index2.default(null, {});
    return l;
  }).isDeepEqual(function () {
    return {
      schema: {},
      location: {},
      origin: {},
      search: {
        value: undefined
      },
      params: {
        schema: [],
        value: [],
        isMatch: true
      },
      hash: {
        isMatch: true
      },
      isMatch: true
    };
  });

  test("new URL(null, null) toString").this(function () {
    var l = new _index2.default(null, null);
    return l.toString();
  }).isEqual(function () {
    return "/";
  });

  test("new URL(null, null) toString").this(function () {
    var l = new _index2.default(null, {});
    return l.toString();
  }).isEqual(function () {
    return "/";
  });
};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map