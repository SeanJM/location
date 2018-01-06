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

function schemaType(string) {
  if (string[0] === ":") {
    return {
      type : "variable",
      key : string.slice(1)
    };
  }
  return {
    type : "constant",
    key  : string
  };
}

export default class Parameters {
  constructor(schema, location) {
    var schemaValue = [];

    this.schema     = pathnameToArray(schema.pathname);
    this.value      = pathnameToArray(location.pathname);
    this.isMatch    = !!location.pathname;

    for (let i = this.schema.length - 1; i >= 0; i--) {
      if (this.schema[i] === "*" && this.schema[i - 1] === "*") {
        this.schema.splice(i, 1);
      }
    }

    for (let i = 0, n = this.schema.length; i < n; i++) {
      if (this.schema[i] === "*") {
        let v = i;
        while (this.schema.slice(i).indexOf(this.value[v]) === -1 && this.value[v]) {
          schemaValue.push(
            schemaType(this.value[v])
          );
          v += 1;
        }
      } else {
        schemaValue.push(
          schemaType(this.schema[i])
        );
      }
    }

    this.schema = schemaValue;

    if (this.schema.length !== this.value.length) {
      this.isMatch = false;
    }

    for (let i = 0, n = this.schema.length; i < n; i++) {
      if (
        this.schema[i].type !== "variable" &&
        this.schema[i].key  !== "*" &&
        this.schema[i].key  !== this.value[i]
      ) {
        this.isMatch = false;
      } else if (this.schema[i].type === "variable") {
        maybeError(this, this.schema[i].key.slice(1));
        this[this.schema[i].key] = this.value[i];
      }
    }
  }

  push(value) {
    if (typeof value === "object") {
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

  unshift(value) {
    if (typeof value === "object") {
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
    const query  = [];

    if (this.schema.length) {
      for (let i = 0, n = this.schema.length; i < n; i++) {
        if (this.schema[i].type === "variable") {
          query.push(this[this.schema[i].key]);
        } else {
          query.push(this.schema[i].key);
        }
      }
    } else {
      for (let i = 0, n = this.value.length; i < n; i++) {
        query[i] = this.value[i];
      }
    }

    return "/" + query.join("/");
  }
}

Parameters.prototype.set   = set;
Parameters.prototype.clear = clear;