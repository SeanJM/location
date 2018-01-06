const clear = require("./clear");

const reserved = {
  searchEach : true,
  setSchema  : true,
  setValue   : true,
  toString   : true,
  set        : true,
  get        : true,
  schema     : true,
  keys       : true,
};

function filterValue(str) {
  let n = Number(str);
  return isNaN(n) ? str : n;
}

// ?this=value&that[]=a&that[]=b
// ?this=:key+:property

function schemaArrayToString(key, value, schema) {
  let t = [];

  for (var i = 0, n = value.length; i < n; i++) {
    t.push([
      encodeURI(key) + "[]="
    ]);

    for (var x in value[i]) {
      t[i].push(value[i][x]);
    }

    t[i] = t[i][0] + encodeURI(t[i].slice(1).join(schema.delimiter));
  }

  return t.join("&");
}

function schemaObjectToString(key, value, schema) {
  let temp = [ key + "=", [] ];

  value = value || {};

  for (var i = 0, n = schema.map.length; i < n; i++) {
    if (schema.map[i].constant) {
      temp[1].push(schema.map[i].constant);
    } else if (value[schema.map[i]]) {
      temp[1].push(value[schema.map[i]]);
    }
  }

  return encodeURI(
    temp[0] + temp[1].join("+")
  );
}

export default class Search {
  constructor(schema, location) {
    this.isMatch = (
      typeof schema.search === "string" &&
      typeof location.search === "string"
    );

    this.schema  = {};
    this.keys    = [];
    this.setSchema(schema.search);
    this.setValue(location.search);
  }

  searchEach(raw, callback) {
    if (raw) {
      let str   = raw[0] === "?" ? raw.slice(1) : raw;
      let split = str.split("&").filter(a => a.length);

      for (var i = 0, n = split.length; i < n; i++) {
        let element   = split[i].split("=");
        let isArray   = element[0].slice(-2) === "[]";
        let delimiter = false;

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
          key       : isArray ? element[0].slice(0, -2) : element[0],
          value     : element[1],
          delimiter : delimiter,
          type      : isArray ? "array" : "object"
        });
      }
    }
  }

  setSchema(schema) {
    this.searchEach(schema, props => {
      props.map = [];
      if (props.delimiter) {
        props.value.split(props.delimiter).forEach(name => {
          if (name[0] === ":") {
            props.map.push(name.substring(1));
          } else {
            props.map.push({ constant : name });
          }
        });
      } else if (props.value && props.value[0] === ":") {
        props.map.push(props.value.substring(1));
      }

      if (this.keys.indexOf(props.key) === -1) {
        this.keys.push(props.key);
      }

      props.value            = filterValue(props.value);
      this.schema[props.key] = props;
    });
  }

  setValue(search) {
    const array  = {};
    const object = [];

    this.searchEach(search, props => {
      const ref = this.schema[props.key];
      if (props.type === "array") {
        if (!array[props.key]) {
          array[props.key] = {
            key       : props.key,
            delimiter : false,
            list      : []
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
        this.isMatch = false;
      }
    });

    for (var k in array) {
      array[k].list.forEach((value, pIndex) => {
        const ref = this.schema[array[k].key];
        this[array[k].key] = (this[array[k].key] || []);
        if (ref && ref.map.length) {
          if (ref.delimiter) {
            value
              .split(array[k].delimiter)
              .forEach((value, i) => {
                this[array[k].key][pIndex] = (this[array[k].key][pIndex] || {});
                this[array[k].key][pIndex][ref.map[i]] = filterValue(value);
              });
          } else {
            this[array[k].key][pIndex] = (this[array[k].key][pIndex] || {});
            this[array[k].key][pIndex][ref.map[0]] = filterValue(value);
          }
        } else {
          this[array[k].key].push(filterValue(value));
        }
      });
    }

    object.forEach(props => {
      const ref       = this.schema[props.key];
      this[props.key] = {};
      if (ref) {
        if (ref.delimiter) {
          props.value
            .split(ref.delimiter)
            .forEach(value => {
              this[props.key][ref.map[0]] = filterValue(value);
            });
        } else {
          this[props.key][ref.map[0]] = filterValue(props.value);
        }
      }
    });
  }

  toString() {
    const search = [];
    for (let k in this) {
      if (this.hasOwnProperty(k) && !reserved[k]) {
        if (this.schema[k] && this.schema[k].map.length) {
          if (this.schema[k].type === "array") {
            search.push(
              schemaArrayToString(k, this[k], this.schema[k])
            );
          } else if (this.schema[k].type === "object") {
            search.push(
              schemaObjectToString(k, this[k], this.schema[k])
            );
          }
        } else if (
          typeof this[k] === "number" ||
          (typeof this[k] === "string" && this[k].length)
        ) {
          search.push(
            encodeURI(k + "=" + this[k])
          );
        } else if (Array.isArray(this[k])) {
          for (var i = 0, n = this[k].length; i < n; i++) {
            search.push(
              encodeURI(k) + "[]=" + encodeURI(this[k][i])
            );
          }
        }
      }
    }

    return search.length
      ? "?" + search.join("&")
      : "";
  }

  set(props) {
    for (var k in props) {
      if (props.hasOwnProperty(k) && !reserved[k]) {
        this[k] = props[k];
      } else if (Search.prototype[k]) {
        throw "Invalid property \"" + k + "\", this is a reserved key";
      }
    }
    return this;
  }

  get(key) {
    let props = {};
    if (typeof key === "object") {
      for (var i = 0, n = key.length; i < n; i++) {
        props[key[i]] = this.get(key[i]);
      }
      return props;
    }
    return this[key];
  }
}

Search.prototype.clear = clear;