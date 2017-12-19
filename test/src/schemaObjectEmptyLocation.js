import URL from "../../src/index.js";

export default function (test) {
  test("http://www.google.com/ (object.origin)")
    .this(function () {
      let l = new URL({ origin: "http://www.google.com/" });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema  : {
          origin       : "http://www.google.com",
          href         : "http://www.google.com/",
          hash         : "",
          pathname     : "/",
          search       : "",
        },

        location: {
          origin       : undefined,
          href         : undefined,
          hash         : undefined,
          pathname     : undefined,
          search       : undefined,
        },

        origin   : {
          schema  : "http://www.google.com",
          value   : undefined,
          isMatch : false
        },

        search  : {
          schema  : {},
          keys    : [],
          isMatch : false
        },

        params  : {
          schema  : [],
          value   : [],
          isMatch : false
        },

        hash : {
          schema  : "",
          value   : undefined,
          isMatch : false
        },

        isMatch : false
      };
    });

  test("http://www.google.com/ (object.href)")
    .this(function () {
      let l = new URL({ href: "http://www.google.com/" });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema  : {
          origin       : "http://www.google.com",
          href         : "http://www.google.com/",
          hash         : "",
          pathname     : "/",
          search       : "",
        },

        location: {
          origin       : undefined,
          href         : undefined,
          hash         : undefined,
          pathname     : undefined,
          search       : undefined,
        },

        origin   : {
          schema  : "http://www.google.com",
          value   : undefined,
          isMatch : false
        },

        search  : {
          schema  : {},
          keys    : [],
          isMatch : false
        },

        params  : {
          schema  : [],
          value   : [],
          isMatch : false
        },

        hash : {
          schema  : "",
          value   : undefined,
          isMatch : false
        },

        isMatch : false
      };
    });
}