import URL from "../../src/index.js";

module.exports = function (test) {
  test("/a vs /a/b (does not match)")
    .this(function () {
      const a = new URL("/:a", "/a");
      const b = new URL("/:a", "/a/b");
      return a.isMatch && !b.isMatch;
    })
    .isEqual(function () {
      return true;
    });

  test("*?origin=user+:userID+:section+:page")
    .this(function () {
      let l = new URL(
        "*?origin=user+:userID+:section+:page",
        "http://www.domain.com/?origin=user+98fjhd+all+1"
      );
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          origin   : "*",
          href     : "*?origin=user+:userID+:section+:page",
          pathname : "/",
          hash     : "",
          search   : "?origin=user+:userID+:section+:page"
        },
        location: {
          origin   : "http://www.domain.com",
          href     : "http://www.domain.com/?origin=user+98fjhd+all+1",
          pathname : "/",
          hash     : "",
          search   : "?origin=user+98fjhd+all+1"
        },
        origin: {
          schema  : /.*?/,
          value   : "http://www.domain.com",
          isMatch : true
        },
        search: {
          isMatch : true,
          schema  : {
            origin: {
              key       : "origin",
              value     : "user+:userID+:section+:page",
              delimiter : "+",
              type      : "object",
              map       : [{
                type : "constant",
                key  : "user"
              }, {
                type : "variable",
                key  : "userID"
              }, {
                type : "variable",
                key  : "section"
              }, {
                type : "variable",
                key  : "page"
              }]
            }
          },
          src : {
            schema : "?origin=user+:userID+:section+:page",
            value  : "?origin=user+98fjhd+all+1"
          },
          keys: [ "origin" ],
          origin: {
            userID  : "98fjhd",
            section : "all",
            page    : 1
          }
        },
        params: {
          schema  : [],
          value   : [],
          isMatch : true
        },
        hash: {
          schema  : undefined,
          value   : undefined,
          isMatch : true
        },
        isMatch : true
      };
    });

  test("*?origin=user+:userID+:section+:page (pathname, search)")
    .this(function () {
      let l = new URL("*/?origin=user+:userID+:section+:page", {
        pathname : "/post/p398dfjkj",
        search   : "?origin=user+98fjhd+all+1"
      });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          origin   : "*",
          href     : "*/?origin=user+:userID+:section+:page",
          pathname : "/",
          hash     : "",
          search   : "?origin=user+:userID+:section+:page"
        },
        location : {
          href     : "/post/p398dfjkj",
          pathname : "/post/p398dfjkj",
          hash     : "",
          search   : "?origin=user+98fjhd+all+1"
        },
        origin : {
          schema  : {},
          isMatch : true
        },
        search : {
          isMatch : true,
          schema : {
            origin : {
              key : "origin",
              value : "user+:userID+:section+:page",
              delimiter : "+",
              type : "object",
              map : [{
                type : "constant",
                key  : "user"
              }, {
                type : "variable",
                key  : "userID"
              }, {
                type : "variable",
                key  : "section"
              }, {
                type : "variable",
                key  : "page"
              }]
            }
          },
          src : {
            schema : "?origin=user+:userID+:section+:page",
            value  : "?origin=user+98fjhd+all+1"
          },
          keys : [
            "origin"
          ],
          origin : {
            userID  : "98fjhd",
            section : "all",
            page    : 1
          }
        },
        params : {
          schema : [],
          value : [
            "post",
            "p398dfjkj"
          ],
          isMatch : false
        },
        hash : {
          schema  : undefined,
          value   : undefined,
          isMatch : true
        },
        isMatch : false
      };
    });

  test("/*/ (pathname, search)")
    .this(function () {
      let l = new URL("/*/", "/post/p398dfjkj");
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          origin   : undefined,
          href     : "/*/",
          pathname : "/*/",
          hash     : "",
          search   : ""
        },
        location : {
          href     : "/post/p398dfjkj",
          pathname : "/post/p398dfjkj",
          hash     : "",
          search   : ""
        },
        origin : {
          schema  : undefined,
          isMatch : true
        },
        search : {
          isMatch : true,
          schema  : {},
          src     : {
            schema : undefined,
            value  : undefined
          },
          keys    : []
        },
        params : {
          schema : [{
            type: "constant",
            key : "post"
          }, {
            type : "constant",
            key  : "p398dfjkj"
          }],
          value : [
            "post",
            "p398dfjkj"
          ],
          isMatch : true
        },
        hash : {
          schema  : undefined,
          value   : undefined,
          isMatch : true
        },
        isMatch : true
      };
    });
};