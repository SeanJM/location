const set   = require("./set");
const clear = require("./clear");

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
    throw new Error(
      "Invalid parameter name: \"" + key + "\", this is a reserved word."
    );
  }
}

export default class Parameters {
  constructor(schema, location) {
    this.schema  = pathnameToArray(schema.pathname);
    this.value   = pathnameToArray(location.pathname);
    this.isMatch = !!location.pathname;

    if (this.schema.length === 1 && this.schema[0] === "*") {
      this.schema = this.value.map(() => "*");
    } else if (this.schema.length !== this.value.length) {
      this.isMatch = false;
    }

    for (let i = 0, n = this.schema.length; i < n; i++) {
      if (
        this.schema[i][0] !== ":" &&
        this.schema[i]    !== "*" &&
        this.schema[i]    !== this.value[i]
      ) {
        this.isMatch = false;
      } else if (this.schema[i][0] === ":") {
        maybeError(this, this.schema[i].slice(1));
        this[this.schema[i].slice(1)] = this.value[i];
      }
    }
  }

  push(value) {
    if (typeof value === "object") {
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

  unshift(value) {
    if (typeof value === "object") {
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

  startsWith(value) {
    const str  = this.toString();
    const path = "/" + pathnameToArray(value).join("/");
    const n    = path.length;
    return str.indexOf(path) === 0 && (str[n] === "/" || !str[n + 1]);
  }

  contains(value) {
    const str  = this.toString();
    const path = "/" + pathnameToArray(value).join("/");
    return str.indexOf(path) > -1;
  }

  is(value) {
    return this.toString() === "/" + pathnameToArray(value).join("/");
  }

  toString() {
    const length = this.value.length;
    const query  = new Array(length);

    for (var i = 0; i < length; i++) {
      query[i] = this.value[i];
    }

    return "/" + query.join("/");
  }
}

Parameters.prototype.set   = set;
Parameters.prototype.clear = clear;