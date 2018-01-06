import URL from "../../src/index.js";

module.exports = function (test) {
  test("https://maps.googleapis.com/maps/api/place/textsearch/json (Copy)")
    .this(function () {
      let url  = new URL(null, "https://maps.googleapis.com/maps/api/place/textsearch/json");
      let copy = url.copy();

      url.search.query = "test";

      console.log(copy.toString());

      return [
        url.toString(),
        copy.toString()
      ];
    })
    .isDeepEqual(function () {
      return [
        "https://maps.googleapis.com/maps/api/place/textsearch/json?query=test",
        "https://maps.googleapis.com/maps/api/place/textsearch/json"
      ];
    });

  test("/location/:lang match method")
    .this(function () {
      let url  = new URL("/location/:lang");
      return [
        url.test("/location/english"),
        url.test("/loc/english"),
        url.test(undefined),
      ];
    })
    .isDeepEqual(function () {
      return [ true, false, false ];
    });
};