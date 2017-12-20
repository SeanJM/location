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

  test("http://www.google.com (no schema and array)")
    .this(function () {
      let l = new URL(
        "http://www.google.com",
        { href: "http://www.google.com/?search[]=1&search[]=2" }
      );
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com",
          pathname : "/",
          hash     : "",
          search   : ""
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
          isMatch : false,
          schema  : {},
          keys    : [],
          search  : [ 1, 2 ]
        },

        params : {
          schema  : [],
          value   : [],
          isMatch : true
        },

        hash: {
          schema  : "",
          value   : "",
          isMatch : true
        },

        isMatch : false
      };
    });

  test("http://www.google.com/?search=:number")
    .this(function () {
      let l = new URL("http://www.google.com/?search=:number", { href: "http://www.google.com/?search=1" });
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
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?search=1",
          pathname : "/",
          hash     : "",
          search   : "?search=1"
        },

        origin : {
          schema  : "http://www.google.com",
          value   : "http://www.google.com",
          isMatch : true
        },

        search : {
          isMatch : true,
          schema : {
            search : {
              key       : "search",
              value     : ":number",
              delimiter : false,
              type      : "object",
              map       : [ "number" ]
            }
          },

          keys   : [ "search" ],
          search : {
            number : 1
          }
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

  test("http://www.google.com/?search[]=:number")
    .this(function () {
      let l = new URL(
        "http://www.google.com/?search[]=:number",
        { href: "http://www.google.com/?search[]=1&search[]=2" }
      );
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?search[]=:number",
          pathname : "/",
          hash     : "",
          search   : "?search[]=:number"
        },

        location : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?search[]=1&search[]=2",
          pathname : "/",
          hash     : "",
          search   : "?search[]=1&search[]=2"
        },

        origin: {
          schema  : "http://www.google.com",
          value   : "http://www.google.com",
          isMatch : true
        },

        search : {
          isMatch : true,
          schema  : {
            search : {
              key       : "search",
              value     : ":number",
              delimiter : false,
              type      : "array",
              map       : [ "number" ]
            }
          },
          keys    : [ "search" ],
          search  : [
            { number: 1 },
            { number: 2 }
          ]
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

        isMatch: true
      };
    });

  test("http://www.google.com/?person[]=:age+:gender")
    .this(function () {
      let l = new URL(
        "http://www.google.com/?person[]=:age+:gender",
        { href: "http://www.google.com/?person[]=1+male&person[]=2+female" }
      );
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?person[]=:age+:gender",
          pathname : "/",
          hash     : "",
          search   : "?person[]=:age+:gender"
        },

        location : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?person[]=1+male&person[]=2+female",
          pathname : "/",
          hash     : "",
          search   : "?person[]=1+male&person[]=2+female"
        },

        origin: {
          schema  : "http://www.google.com",
          value   : "http://www.google.com",
          isMatch : true
        },

        search : {
          isMatch : true,
          schema  : {
            person : {
              key       : "person",
              value     : ":age+:gender",
              delimiter : "+",
              type      : "array",
              map       : [ "age", "gender" ]
            }
          },
          keys    : [ "person" ],
          person  : [
            { age: 1, gender: "male" },
            { age: 2, gender: "female" }
          ]
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

        isMatch: true
      };
    });

  test("http://www.google.com/?person[]=:age+:gender (incomplete)")
    .this(function () {
      let l = new URL(
        "http://www.google.com/?person[]=:age+:gender",
        { href: "http://www.google.com/?person[]=1&person[]=2+female" }
      );
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?person[]=:age+:gender",
          pathname : "/",
          hash     : "",
          search   : "?person[]=:age+:gender"
        },

        location : {
          origin   : "http://www.google.com",
          href     : "http://www.google.com/?person[]=1&person[]=2+female",
          pathname : "/",
          hash     : "",
          search   : "?person[]=1&person[]=2+female"
        },

        origin: {
          schema  : "http://www.google.com",
          value   : "http://www.google.com",
          isMatch : true
        },

        search : {
          isMatch : true,
          schema  : {
            person : {
              key       : "person",
              value     : ":age+:gender",
              delimiter : "+",
              type      : "array",
              map       : [ "age", "gender" ]
            }
          },
          keys    : [ "person" ],
          person  : [
            { age: 1 },
            { age: 2, gender: "female" }
          ]
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

        isMatch: true
      };
    });
}