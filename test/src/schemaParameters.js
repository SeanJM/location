import URL from "../../src/index.js";

export default function (test) {
  test("http://www.google.com/:x")
    .this(function () {
      let l = new URL("http://www.google.com/:x", { href: "http://www.google.com/cat" });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/:x",
          pathname : "/:x",
          hash     : "",
          search   : ""
        },

        location: {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/cat",
          pathname : "/cat",
          hash     : "",
          search   : ""
        },

        origin : {
          schema  : "http://www.google.com",
          value   : "http://www.google.com",
          isMatch : true
        },

        search : {
          schema  : {},
          keys    : [],
          isMatch : true
        },

        params : {
          schema  : [ ":x" ],
          value   : [ "cat" ],
          x       : "cat",
          isMatch : true
        },

        hash   : {
          schema  : "",
          value   : "",
          isMatch : true
        },

        isMatch : true
      };
    });

  test("http://www.google.com/:x/:y")
    .this(function () {
      let l = new URL("http://www.google.com/:x/:y", { href: "http://www.google.com/cats/dogs" });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/:x/:y",
          pathname : "/:x/:y",
          hash     : "",
          search   : ""
        },

        location: {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/cats/dogs",
          pathname : "/cats/dogs",
          hash     : "",
          search   : ""
        },

        origin : {
          schema  : "http://www.google.com",
          value   : "http://www.google.com",
          isMatch : true
        },

        search : {
          schema  : {},
          keys    : [],
          isMatch : true,
        },

        params : {
          schema  : [ ":x", ":y" ],
          value   : [ "cats", "dogs" ],
          x       : "cats",
          y       : "dogs",
          isMatch : true,
        },

        hash   : {
          schema  : "",
          value   : "",
          isMatch : true
        },

        isMatch : true
      };
    });

  test("http://www.google.com/:x/:y (isMatch: false)")
    .this(function () {
      let l = new URL("http://www.google.com/:x/:y", { href: "http://www.google.com/cats" });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/:x/:y",
          pathname : "/:x/:y",
          hash     : "",
          search   : ""
        },

        location: {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/cats",
          pathname : "/cats",
          hash     : "",
          search   : ""
        },

        origin : {
          schema  : "http://www.google.com",
          value   : "http://www.google.com",
          isMatch : true
        },

        search : {
          schema  : {},
          keys    : [],
          isMatch : true
        },

        params : {
          schema  : [ ":x", ":y" ],
          value   : [ "cats" ],
          x       : "cats",
          isMatch : false
        },

        hash   : {
          schema  : "",
          value   : "",
          isMatch : true
        },

        isMatch : false
      };
    });

  test("http://www.google.com/:x/:y (contains)")
    .this(function () {
      let l = new URL(null, "http://www.google.com/cats/dogs");
      return l.params.contains("/dogs") && l.params.contains("/dogs/") && !l.params.contains("/fish");
    })
    .isEqual(function () {
      return true;
    });

  test("http://localhost:3000/startswith/ (startsWith)")
    .this(function () {
      let url = new URL(null, {
        href: "http://localhost:3000/startswith/"
      });
      return url.params.startsWith("startswith");
    })
    .isDeepEqual(function () {
      return true;
    });

  test("/startswith (startsWith)")
    .this(function () {
      let url = new URL(null, {
        href: "/login"
      });
      return url.params.startsWith("/login");
    })
    .isDeepEqual(function () {
      return true;
    });

  test("http://localhost:3000/startswith/ (startsWith multiple)")
    .this(function () {
      let url = new URL(null, {
        href: "http://localhost:3000/startswith/reset"
      });
      return (
        url.params.startsWith("startswith/reset") &&
        url.params.startsWith("/startswith/reset") &&
        !url.params.startsWith("/startswith/res") &&
        !url.params.startsWith("startswith/test")
      );
    })
    .isDeepEqual(function () {
      return true;
    });

  test("http://localhost:3000/starts/with/that (is)")
    .this(function () {
      let url = new URL(null, {
        href: "http://localhost:3000/starts/with/"
      });
      return (
        url.params.is("starts/with/") &&
        url.params.is("/starts/with/") &&
        url.params.is("starts/with") &&
        !url.params.is("starts/with/that")
      );
    })
    .isDeepEqual(function () {
      return true;
    });

  test("http://localhost:3001/ (startsWith)")
    .this(function () {
      let url = new URL(null, {
        href : "http://localhost:3001/",
      });
      return url.params.startsWith("login");
    })
    .isDeepEqual(function () {
      return false;
    });

  test("http://localhost:3001/ (push)")
    .this(function () {
      let url = new URL(null, {
        href : "http://localhost:3001/",
      });
      url.params.push("login");
      return url.toString();
    })
    .isDeepEqual(function () {
      return "http://localhost:3001/login";
    });

  test("http://localhost:3001/ (push object)")
    .this(function () {
      let url = new URL(null, {
        href : "http://localhost:3001/",
      });

      url.params.push({ name: "login" });

      return [ url.toString(), url.params.name ];
    })
    .isDeepEqual(function () {
      return [ "http://localhost:3001/login", "login" ];
    });

  test("http://localhost:3001/ (unshift)")
    .this(function () {
      let url = new URL(null, {
        href : "http://localhost:3001/",
      });
      url.params.unshift("login");
      return url.toString();
    })
    .isDeepEqual(function () {
      return "http://localhost:3001/login";
    });

  test("http://localhost:3001/ (unshift object)")
    .this(function () {
      let url = new URL(null, {
        href : "http://localhost:3001/",
      });

      url.params.unshift({ name: "login" });

      return [ url.toString(), url.params.name ];
    })
    .isDeepEqual(function () {
      return [ "http://localhost:3001/login", "login" ];
    });
}