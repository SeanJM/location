import URL from "../../src/index.js";

module.exports = function (test) {
  test("http://localhost:3001/#my-hash (Object)")
    .this(function () {
      let url = new URL(null, {
        href : "http://localhost:3001/#my-hash",
      });
      return url;
    })
    .isDeepEqual(function () {
      return {
        schema : {},
        location : {
          origin   : "http://localhost:3001",
          href     : "http://localhost:3001/#my-hash",
          pathname : "/",
          hash     : "#my-hash",
          search   : ""
        },
        origin : {
          value   : "http://localhost:3001",
          isMatch : false
        },
        search : {
          isMatch : false,
          schema  : {},
          keys    : [],
          src     : {
            schema : undefined,
            value  : undefined
          }
        },
        params : {
          schema  : [],
          value   : [],
          isMatch : true
        },
        hash: {
          value   : "#my-hash",
          isMatch : false
        },
        isMatch : false
      };
    });

  test("http://localhost:3001/#my-hash (query hash)")
    .this(function () {
      let url = new URL(null, {
        href : "http://localhost:3001/#my-hash",
      });

      return url.location.hash;
    })
    .isDeepEqual(function () {
      return "#my-hash";
    });

  test("http://localhost:3001/#my-hash (hash toString)")
    .this(function () {
      let url = new URL(null, {
        href : "http://localhost:3001/#my-hash",
      });

      url.hash.value = "#changed-hash";
      return url.toString();
    })
    .isDeepEqual(function () {
      return "http://localhost:3001/#changed-hash";
    });
};