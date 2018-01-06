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
    this.search = new _Search2.default(this.schema, this.location);
    this.params = new _Parameters2.default(this.schema, this.location);
    this.hash = new _Hash2.default(this.schema, this.location);

    this.isMatch = this.origin.isMatch && this.search.isMatch && this.params.isMatch && this.hash.isMatch;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Origin = function () {
  _createClass(Origin, [{
    key: "toExpression",
    value: function toExpression(str) {
      return new RegExp(str.replace(/\*/g, ".*?"));
    }
  }]);

  function Origin(schema, location) {
    _classCallCheck(this, Origin);

    this.schema = schema.origin && this.toExpression(schema.origin);
    this.value = location.origin;

    this.isMatch = schema.origin ? this.schema.test(this.value) : location.origin === schema.origin;
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
  searchEach: true,
  setSchema: true,
  setValue: true,
  toString: true,
  set: true,
  get: true,
  schema: true,
  keys: true,
  isMatch: true
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
    if (schema.map[i].type === "constant") {
      temp[1].push(schema.map[i].key);
    } else if (value[schema.map[i].key]) {
      temp[1].push(value[schema.map[i].key]);
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
              props.map.push({
                type: "variable",
                key: name.substring(1)
              });
            } else {
              props.map.push({
                type: "constant",
                key: name
              });
            }
          });
        } else if (props.value && props.value[0] === ":") {
          props.map.push({
            type: "variable",
            key: props.value.substring(1)
          });
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
                _this2[array[k].key][pIndex][ref.map[i].key] = filterValue(value);
              });
            } else {
              _this2[array[k].key][pIndex] = _this2[array[k].key][pIndex] || {};
              _this2[array[k].key][pIndex][ref.map[0].key] = filterValue(value);
            }
          } else {
            _this2[array[k].key].push(filterValue(value));
          }
        });
      }

      object.forEach(function (props) {
        var ref = _this2.schema[props.key];
        _this2[props.key] = {};
        if (ref) {
          if (ref.delimiter) {
            props.value.split(ref.delimiter).forEach(function (value, i) {
              var element = ref.map[i];
              if (element.type === "variable") {
                _this2[props.key][element.key] = filterValue(value);
              }
            });
          } else {
            _this2[props.key][ref.map[0].key] = filterValue(props.value);
          }
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

    this.schema = pathnameToArray(schema.pathname);
    this.value = pathnameToArray(location.pathname);
    this.isMatch = !!location.pathname;

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
      if (this.schema[_i2].type !== "variable" && this.schema[_i2].key !== "*" && this.schema[_i2].key !== this.value[_i2]) {
        this.isMatch = false;
      } else if (this.schema[_i2].type === "variable") {
        maybeError(this, this.schema[_i2].key.slice(1));
        this[this.schema[_i2].key] = this.value[_i2];
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

/***/ })
/******/ ])["default"];