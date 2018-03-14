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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _URL = __webpack_require__(2);

var _URL2 = _interopRequireDefault(_URL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _URL2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Origin = __webpack_require__(3);

var _Origin2 = _interopRequireDefault(_Origin);

var _Search = __webpack_require__(4);

var _Search2 = _interopRequireDefault(_Search);

var _Parameters = __webpack_require__(5);

var _Parameters2 = _interopRequireDefault(_Parameters);

var _Hash = __webpack_require__(7);

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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clear = __webpack_require__(0);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var set = __webpack_require__(6);
var clear = __webpack_require__(0);

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
/* 6 */
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
/* 7 */
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

/***/ })
/******/ ])["default"];