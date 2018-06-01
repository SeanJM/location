import URL from "../../src/index.js";

export default function (test) {
  test("http://www.google.com?search[]")
    .this(function () {
      let l = new URL({
        href: "http://www.google.com/"
      }, {
        href: "http://www.google.com/?search[]=1&search[]=2"
      });
      return l;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          origin: "http://www.google.com",
          href: "http://www.google.com/",
          pathname: "/",
          hash: ""
        },

        location: {
          origin: "http://www.google.com",
          href: "http://www.google.com/?search[]=1&search[]=2",
          pathname: "/",
          hash: "",
          search: "?search[]=1&search[]=2"
        },

        origin: {
          value: "http://www.google.com"
        },

        search: {
          search: [1, 2]
        },

        params: {
          schema: [],
          value: [],
          isMatch: true
        },

        hash: {
          schema: undefined,
          value: undefined,
          isMatch: true
        },

        isMatch: true
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
        schema: {
          origin: "http://www.google.com",
          href: "http://www.google.com",
          pathname: "/",
          hash: ""
        },

        location: {
          origin: "http://www.google.com",
          href: "http://www.google.com/?search[]=1&search[]=2",
          pathname: "/",
          hash: "",
          search: "?search[]=1&search[]=2"
        },

        origin: {
          value: "http://www.google.com"
        },

        search: {
          search: [1, 2]
        },

        params: {
          schema: [],
          value: [],
          isMatch: true
        },

        hash: {
          schema: undefined,
          value: undefined,
          isMatch: true
        },

        isMatch: true
      };
    });

  test("Incorrectly formatted location object (React Router)")
    .this(function () {
      let url = new URL("/insurance/receipts/all", {
        origin: undefined,
        href: "/insurance/receipts/all",
        pathname: "/insurance/receipts/all",
        hash: "",
        search: "?index=0&length=20"
      });
      return url;
    })
    .isDeepEqual(function () {
      return {
        schema: {
          href: "/insurance/receipts/all",
          pathname: "/insurance/receipts/all",
          hash: ""
        },
        location: {
          href: "/insurance/receipts/all?index=0&length=20",
          pathname: "/insurance/receipts/all",
          hash: "",
          search: "?index=0&length=20"
        },
        origin: {},
        search: {
          index: 0,
          length: 20
        },
        params: {
          schema: [{
            type: "constant",
            key: "insurance"
          }, {
            type: "constant",
            key: "receipts"
          }, {
            type: "constant",
            key: "all"
          }],
          value: [
            "insurance",
            "receipts",
            "all"
          ],
          isMatch: true
        },
        hash: {
          schema: undefined,
          value: undefined,
          isMatch: true
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

      url.search.assign({
        string: "this will be an encoded string",
        number: 2098
      });

      return url.search.get(["string", "number"]);
    })
    .isDeepEqual(function () {
      return {
        string: "this will be an encoded string",
        number: 2098
      };
    });

  test("http://localhost:3000/?select=value#hash (search with hash)")
    .this(function () {
      let url = new URL(null, {
        href: "http://localhost:3000/?select=value#hash"
      });

      return url;
    })
    .isDeepEqual(function () {
      return {
        schema: {},
        location: {
          origin: "http://localhost:3000",
          href: "http://localhost:3000/?select=value#hash",
          pathname: "/",
          hash: "#hash",
          search: "?select=value"
        },
        origin: {
          value: "http://localhost:3000"
        },
        search: {
          select: "value"
        },
        params: {
          schema: [],
          value: [],
          isMatch: true
        },
        hash: {
          value: "#hash",
          isMatch: false
        },
        isMatch: false
      };
    });
}