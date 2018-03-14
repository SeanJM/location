import URL from "../../src/index.js";

export default function (test) {
  test("http://www.google.com/ (object.origin)")
    .this(function () {
      let l = new URL({ origin: "http://www.google.com/" });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/",
          pathname : "/",
          hash     : ""
        },
        location : {},
        origin   : {},
        search   : {},
        params   : {
          schema  : [],
          value   : [],
          isMatch : true
        },
        hash : {
          isMatch : true
        },
        isMatch : true
      };
    });

  test("http://www.google.com/ (object.href)")
    .this(function () {
      let l = new URL({ href: "http://www.google.com/" });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/",
          pathname : "/",
          hash     : ""
        },
        location : {},
        origin : {},
        search : {},
        params : {
          schema : [],
          value : [],
          isMatch : true
        },
        hash : {
          isMatch : true
        },
        isMatch : true
      };
    });
}