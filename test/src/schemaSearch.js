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
              map       : [{
                type : "variable",
                key  : "number"
              }]
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

  test("/post/:postID?origin=board+:category+:page")
    .this(function () {
      const l = new URL("/post/:postID?origin=board+:category+:page", {
        pathname: "/post/ezAYhlkuGEz",
        search  : "?origin=board+food+1"
      });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          origin   : undefined,
          href     : "/post/:postID?origin=board+:category+:page",
          pathname : "/post/:postID",
          hash     : "",
          search   : "?origin=board+:category+:page"
        },
        location: {
          origin   : undefined,
          href     : "/post/ezAYhlkuGEz",
          pathname : "/post/ezAYhlkuGEz",
          hash     : "",
          search   : "?origin=board+food+1"
        },
        origin: {
          schema  : undefined,
          value   : undefined,
          isMatch : true
        },
        search: {
          isMatch : true,
          schema  : {
            origin: {
              key       : "origin",
              value     : "board+:category+:page",
              delimiter : "+",
              type      : "object",
              map: [{
                type : "constant",
                key  : "board"
              }, {
                type : "variable",
                key  : "category"
              }, {
                type : "variable",
                key  : "page"
              }]
            }
          },
          keys : [
            "origin"
          ],
          origin : {
            "category" : "food",
            "page"     : 1
          }
        },
        params: {
          schema  : [{
            type : "constant",
            key  : "post",
          }, {
            type : "variable",
            key  : "postID"
          }],
          value   : [ "post", "ezAYhlkuGEz" ],
          isMatch : true,
          postID  : "ezAYhlkuGEz"
        },
        hash: {
          schema  : "",
          value   : "",
          isMatch : true
        },
        isMatch : true
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
              map       : [{
                type : "variable",
                key  : "number"
              }]
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
              map       : [{
                type : "variable",
                key: "number"
              }]
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
              map       : [{
                type : "variable",
                key : "age"
              }, {
                type : "variable",
                key : "gender"
              }]
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
              map       : [{
                type : "variable",
                key : "age"
              }, {
                type : "variable",
                key :  "gender"
              }]
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

  test("http://localhost:3000/login?reset (default value)")
    .this(function () {
      let url = new URL(null, "http://localhost:3000/login?reset");
      return url.search.reset;
    })
    .isDeepEqual(function () {
      return 1;
    });

  test("http://localhost:3000/?string (search get)")
    .this(function () {
      let url = new URL(null, {
        href: "http://localhost:3000/?string"
      });

      url.search.string = "this will be an encoded string";
      return url.search.get("string");
    })
    .isDeepEqual(function () {
      return "this will be an encoded string";
    });

  test("http://localhost:3000/?string (search get array)")
    .this(function () {
      let url = new URL({
        href: "http://localhost:3000/?string"
      });

      url.search.set({
        string : "this will be an encoded string",
        number : 2098
      });

      return url.search.get([ "string", "number" ]);
    })
    .isDeepEqual(function () {
      return {
        string : "this will be an encoded string",
        number : 2098
      };
    });
}