import URL from "../../src/index.js";

export default function (test) {
  test("http://www.google.com/")
    .this(function () {
      let l = new URL("http://www.google.com/");
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/",
          pathname : "/",
          hash     : "",
          search   : ""
        },

        location: {
          origin   : undefined,
          href     : undefined,
          hash     : undefined,
          pathname : undefined,
          search   : undefined,
        },

        hash    : {
          schema  : undefined,
          value   : undefined,
          isMatch : true
        },

        origin  : {
          schema  : "http://www.google.com",
          value   : undefined,
          isMatch : false
        },

        search  : {
          src     : {
            schema : undefined
          },
          schema  : {},
          keys    : [],
          isMatch : false,
        },

        params  : {
          schema  : [],
          value   : [],
          isMatch : false
        },

        isMatch : false
      };
    });
}