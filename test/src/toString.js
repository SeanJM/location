import URL from "../../src/index.js";

module.exports = function (test) {
  test("http://www.google.com/ (toString)")
    .this(function () {
      let l = new URL(null, "http://www.google.com/");
      return l.toString();
    })
    .isEqual(function () {
      return "http://www.google.com/";
    });

  test("http://www.google.com/?search=2 (toString)")
    .this(function () {
      let l = new URL(null, { href: "http://www.google.com/?search=2" });
      l.search.search = 3;
      return l.toString();
    })
    .isEqual(function () {
      return "http://www.google.com/?search=3";
    });

  test("http://www.google.com/?search[]=1&search[]=2 (toString)")
    .this(function () {
      let l = new URL(null, { href: "http://www.google.com/?search[]=1&search[]=2" });
      l.search.search[0] = 3;
      return l.toString();
    })
    .isEqual(function () {
      return "http://www.google.com/?search[]=3&search[]=2";
    });

  test("http://www.google.com/?search[]=:number (toString)")
    .this(function () {
      let l = new URL("http://www.google.com/?search[]=:number", {
        href: "http://www.google.com/?search[]=1&search[]=2"
      });
      l.search.search[0].number = 3;
      return l.toString();
    })
    .isEqual(function () {
      return "http://www.google.com/?search[]=3&search[]=2";
    });

  test("http://www.google.com/?search[]=:name,:gender (toString)")
    .this(function () {
      let l = new URL("http://www.google.com/?search[]=:name,:gender", {
        href: "http://www.google.com/?search[]=sean,male&search[]=sarah,female"
      });
      l.search.search[0].name = "John";
      return l.toString();
    })
    .isEqual(function () {
      return "http://www.google.com/?search[]=John,male&search[]=sarah,female";
    });

  test("/user/:userID (string HREF)")
    .this(function () {
      const l = new URL(
        "/user/:userID",
        "/user/SeanJM"
      );
      return l.params.userID;
    })
    .isEqual(function () {
      return "SeanJM";
    });

  test("/user/:userID (object)")
    .this(function () {
      const l = new URL("/user/:userID", { pathname: "/user/SeanJM" });
      return l.params.userID;
    })
    .isEqual(function () {
      return "SeanJM";
    });

  test("/user/:userID?depth[]=:number+:id")
    .this(function () {
      const l = new URL("/user/:userID?depth[]=:number+:id", {
        pathname : "/user/SeanJM",
        search   : "?depth[]=0+o8jk&depth[]=1+99qE&depth[]=2+eBPs"
      });
      return l.search.depth;
    })
    .isDeepEqual(function () {
      return [{
        number: 0,
        id    : "o8jk"
      }, {
        number: 1,
        id    : "99qE"
      }, {
        number: 2,
        id    : "eBPs"
      }];
    });

  test("/post/:postID?origin=... (manipulating a mapped object)")
    .this(function () {
      const l = new URL("/post/:postID?origin=board+:category+:page", {
        pathname: "/post/ezAYhlkuGEz",
        search  : "?origin=board+food+1"
      });
      l.search.origin.category = "fitness";
      l.search.origin.board    = "unchanged";
      return l.toString();
    })
    .isEqual(function () {
      return "/post/ezAYhlkuGEz?origin=board+fitness+1";
    });

  test("Empty")
    .this(function () {
      const l = new URL();
      return l.toString();
    })
    .isEqual(function () {
      return "/";
    });

  test("/board/:category?page")
    .this(function () {
      let back            = new URL("/user/:userID/:section?page");
      back.params.userID  = "98374jf";
      back.params.section = "comments";
      back.search.page    = 1;
      return back.toString();
    })
    .isEqual(function () {
      return "/user/98374jf/comments?page=1";
    });

  test("http://localhost:3000/login?reset (toString)")
    .this(function () {
      let url = new URL(null, {
        href: "http://localhost:3000/login?reset"
      });
      return url.toString();
    })
    .isDeepEqual(function () {
      return "http://localhost:3000/login?reset=1";
    });

  test("http://localhost:3000/?string (search set)")
    .this(function () {
      let url = new URL(null, {
        href: "http://localhost:3000/?string"
      });

      url.search.set({
        string: "this will be an encoded string"
      });

      return url.toString();
    })
    .isDeepEqual(function () {
      return "http://localhost:3000/?string=this%20will%20be%20an%20encoded%20string";
    });

  test("http://localhost:3000/?string (set pathname)")
    .this(function () {
      let url = new URL(null, {
        href: "http://localhost:3000/?string"
      });

      url.set({
        pathname : "/path/name"
      });

      return url.toString();
    })
    .isDeepEqual(function () {
      return "http://localhost:3000/path/name?string=1";
    });

    test("http://localhost:3000/?string (set search)")
      .this(function () {
        let url = new URL(null, {
          href: "http://localhost:3000/login"
        });

        url.set({
          search : "?search=1&cat=fluffy&dog=sam"
        });

        return url.toString();
      })
      .isDeepEqual(function () {
        return "http://localhost:3000/login?search=1&cat=fluffy&dog=sam";
      });
};