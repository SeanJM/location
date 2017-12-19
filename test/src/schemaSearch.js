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

  test("http://www.google.com?search=:number (schema only)")
    .this(function () {
      let l = new URL("http://www.google.com/?search=:number");
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?search=:number",
          pathname : "/",
          hash     : "",
          search   : "?search=:number"
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
              value     : ":number",
              delimiter : false,
              type      : "object",
              map       : [ "number" ]
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

  test("http://www.google.com?search[]")
    .this(function () {
      let l = new URL({
        href : "http://www.google.com/?search[]"
      }, {
        href: "http://www.google.com/?search[]=1&search[]=2"
      });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?search[]",
          pathname : "/",
          hash     : "",
          search   : "?search[]"
        },

        location : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?search[]=1&search[]=2",
          pathname : "/",
          hash     : "",
          search   : "?search[]=1&search[]=2"
        },

        origin : {
          schema  : "http://www.google.com",
          value   : "http://www.google.com",
          isMatch : true
        },

        search : {
          schema  : {
            search: {
              key       : "search",
              value     : undefined,
              delimiter : false,
              type      : "array",
              map       : []
            }
          },
          search  : [ 1, 2 ],
          keys    : [ "search" ],
          isMatch : true,
        },

        params : {
          schema  : [],
          value   : [],
          isMatch : true
        },

        hash : {
          schema  : "",
          value   : "",
          isMatch : true
        },

        isMatch : true
      };
    });
}