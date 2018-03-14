const reserved = {
  setValue : true,
  toString : true,
  set      : true,
  get      : true
};

function Search(location) {
  this.set(location.search);
}

function assignAB(a, b) {
  for (var k in b) {
    if (b.hasOwnProperty(k)) {
      a[k] = b[k];
    }
  }
  return a;
}

Search.prototype.set = function (search) {
  const parts = (
    search
      ? search.split("?")[1].split("&")
      : []
  );

  let i = -1;
  let n = parts.length;
  let t = [];

  for (var k in this) {
    if (this.hasOwnProperty(k)) {
      delete this[k];
    }
  }

  while (++i < n) {
    t    = parts[i].split("=");
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
};

Search.prototype.toString = function () {
  const search = [];
  for (var k in this) {
    if (this.hasOwnProperty(k) && !reserved[k]) {
      if (Array.isArray(this[k])) {
        let x = -1;
        let y = this[k].length;
        while (++x < y) {
          search.push(k + "[]=" + encodeURI(this[k][x]));
        }
      } else {
        search.push(k + "=" + encodeURI(this[k]));
      }
    }
  }
  return search.length ? "?" + search.join("&") : "";
};

Search.prototype.assign = function () {
  let i = -1;
  let n = arguments.length;

  while (++i < n) {
    assignAB(this, arguments[i]);
  }

  return this;
};

Search.prototype.get = function (key) {
  let props = {};
  if (typeof key === "object") {
    for (var i = 0, n = key.length; i < n; i++) {
      props[key[i]] = this.get(key[i]);
    }
    return props;
  }
  return this[key];
};

export default Search;