import URL from "../../src/index.js";

module.exports = function (test) {
  test("new URL(null, null)")
    .this(function () {
      let l = new URL(null, null);
      return l;
    })
    .isDeepEqual(function () {
      return {
        "schema": {},
        "location": {},
        "origin": {
          "isMatch": true
        },
        "search": {
          "isMatch": false,
          "schema": {},
          "keys": []
        },
        "params": {
          "schema": [],
          "value": [],
          "isMatch": false
        },
        "hash": {
          "isMatch": true
        },
        "isMatch": false
      };
    });

  test("new URL(null, {})")
    .this(function () {
      let l = new URL(null, {});
      return l;
    })
    .isDeepEqual(function () {
      return {
        "schema": {},
        "location": {},
        "origin": {
          "isMatch": true
        },
        "search": {
          "isMatch": false,
          "schema": {},
          "keys": []
        },
        "params": {
          "schema": [],
          "value": [],
          "isMatch": false
        },
        "hash": {
          "isMatch": true
        },
        "isMatch": false
      };
    });

  test("new URL(null, null) toString")
    .this(function () {
      let l = new URL(null, null);
      return l.toString();
    })
    .isEqual(function () {
      return "/";
    });

  test("new URL(null, null) toString")
    .this(function () {
      let l = new URL(null, {});
      return l.toString();
    })
    .isEqual(function () {
      return "/";
    });
};