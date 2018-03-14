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

  test("*")
    .this(function () {
      let l = new URL(
        "*",
        "http://www.domain.com/?origin=user+98fjhd+all+1"
      );
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          origin   : "*",
          href     : "*",
          pathname : "/",
          hash     : ""
        },
        location: {
          origin   : "http://www.domain.com",
          href     : "http://www.domain.com/?origin=user+98fjhd+all+1",
          pathname : "/",
          hash     : "",
          search   : "?origin=user+98fjhd+all+1"
        },
        origin: {
          value : "http://www.domain.com"
        },
        search: {
          origin : "user+98fjhd+all+1"
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
          hash     : ""
        },
        location : {
          href     : "/post/p398dfjkj",
          pathname : "/post/p398dfjkj",
          hash     : "",
          search   : "?origin=user+98fjhd+all+1"
        },
        origin : {},
        search : {
          origin : "user+98fjhd+all+1"
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
          hash     : ""
        },
        location : {
          href     : "/post/p398dfjkj",
          pathname : "/post/p398dfjkj",
          hash     : "",
          search   : ""
        },
        origin : {},
        search : {
          value : undefined
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