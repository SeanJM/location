import URL from "../../src/index.js";

export default function (test) {
  test("http://www.google.com/:x")
    .this(function () {
      let l = new URL("http://www.google.com/:x", { href: "http://www.google.com/cat" });
      console.log(l.search);
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
          isMatch : true,
        },

        params : {
          schema  : [ ":x" ],
          value   : [ "cat" ],
          x       : "cat",
          isMatch : true,
        },

        hash   : {
          schema  : "",
          value   : "",
          isMatch : true
        },

        isMatch : true,
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

        isMatch : true,
      };
    });
}