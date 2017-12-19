import Origin     from "./Origin";
import Search     from "./Search";
import Parameters from "./Parameters";
import Hash       from "./Hash";

export default class URL {
  constructor(schema, location) {
    this.setSchema(schema);
    this.setLocation(location);

    this.origin  = new Origin(this.schema, this.location);
    this.search  = new Search(this.schema, this.location);
    this.params  = new Parameters(this.schema, this.location);
    this.hash    = new Hash(this.schema, this.location);

    this.isMatch = (
      this.origin.isMatch &&
      this.search.isMatch &&
      this.params.isMatch &&
      this.hash.isMatch
    );
  }

  test(location) {
    return new URL(this.arguments.schema, location).isMatch;
  }

  setLocation(location) {
    this.location = {
      origin   : this.getUrlOrigin(location),
      href     : this.getUrlHref(location),
      pathname : this.getUrlPathname(location),
      hash     : this.getUrlHash(location),
      search   : this.getUrlSearch(location)
    };
    return this;
  }

  setSchema(schema) {
    this.schema = {
      origin   : this.getUrlOrigin(schema),
      href     : this.getUrlHref(schema),
      pathname : this.getUrlPathname(schema),
      hash     : this.getUrlHash(schema),
      search   : this.getUrlSearch(schema)
    };
    return this;
  }

  getLocationString(location) {
    return location && (
      location.href || location.pathname || location.origin
    );
  }

  getUrlHash(location) {
    if (typeof location === "string") {
      let split = location.split("#")[1];
      let hash  = split && "#" + split;
      return hash || "";
    } else if (location) {
      return this.getUrlHash(
        location.hash || this.getLocationString(location)
      );
    }
    return undefined;
  }

  getUrlHref(location) {
    if (typeof location === "object") {
      return location.href || this.getLocationString(location);
    }
    return location;
  }

  getUrlPathname(location) {
    if (typeof location === "object") {
      return this.getUrlPathname(
        location.pathname ||
        this.getLocationString(location)
      );
    } else if (typeof location === "string") {
      let string = location ? location.split("?")[0].split("#")[0] : location;
      let end    = string && string.length;
      let start  = 0;

      if (typeof loc === "object") {
        return this.getUrlPathname(
          this.getLocationString(location)
        );
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

  getUrlOrigin(location) {
    let origin = undefined;
    let end;

    if (typeof location === "object") {
      return this.getUrlOrigin(location.origin || location.href);
    } else if (location && location.indexOf("http") === 0) {
      location = location.split("?")[0];
      end      = location.indexOf("/", location.indexOf("//") + 2);
      origin   = location.substring(0, end > -1 ? end : location.length);
    }

    return origin;
  }

  getUrlSearch(location) {
    if (typeof location === "object") {
      return this.getUrlSearch(
        location.search ||
        this.getLocationString(location)
      );
    } else if (location) {
      let split = location.split("?");
      return split[1] ? "?" + location.split("?")[1] : "";
    }

    return undefined;
  }

  locationFromString(string) {
    return {
      pathname : this.getUrlPathname(string),
      hash     : this.getHash(string),
      search   : this.getUrlSearch(string)
    };
  }

  toObject(string) {
    return new URL(
      this.__params,
      this.locationFromString(string)
    );
  }

  copy() {
    let x = new URL(this.params.value, this.location.value);

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

  set(location) {
    const x = {};

    const keys = [
      "pathname",
      "href",
      "hash",
      "origin",
      "search"
    ];

    for (var i = 0, n = keys.length; i < n; i++) {
      if (location[keys[i]]) {
        x[keys[i]]             = location[keys[i]];
        this.location[keys[i]] = location[keys[i]];
      }
    }

    if (x.pathname || x.href) {
      this.location.params = (
        this.getUrlPathname(
          this.getLocationString(x)
        )
      );
    }

    this.origin  = new Origin(this.location);
    this.search  = new Search(this.location);
    this.params  = new Parameters(this.location);
    this.hash    = new Hash(this.location);
    this.isMatch = this.params.__isMatch;

    return this;
  }

  toString() {
    return (
      this.origin.toString() +
      this.params.toString() +
      this.search.toString() +
      this.hash.toString()
    );
  }
}