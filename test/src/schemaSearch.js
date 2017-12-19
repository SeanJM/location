import URL from "../../src/index.js";

export default function (test) {
  test("http://www.google.com?search=1 (schema only)")
    .this(function () {
      let l = new URL({ href: "http://www.google.com/?search=1" });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?search=1",
          pathname : "/",
          hash     : "",
          search   : "?search=1"
        },

        location : {
          origin   : undefined,
          href     : undefined,
          pathname : undefined,
          hash     : undefined,
          search   : undefined
        },

        origin : {
          schema  : "http://www.google.com",
          value   : undefined,
          isMatch : false
        },

        search : {
          schema  : {
            search: {
              key       : "search",
              value     : 1,
              delimiter : false,
              type      : "object",
              map       : []
            }
          },

          keys    : [ "search" ],
          isMatch : false,
        },

        params : {
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