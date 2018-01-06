import tinytest from "tiny-test";
import schemaStringEmptyLocation from "./schemaStringEmptyLocation";
import schemaObjectEmptyLocation from "./schemaObjectEmptyLocation";
import schemaParameters from "./schemaParameters";
import schemaSearch from "./schemaSearch";
import toString from "./toString";
import matching from "./matching";
import hash from "./hash";
import urlMethods from "./urlMethods";

tinytest(function (test, load) {
  schemaStringEmptyLocation(test);
  schemaObjectEmptyLocation(test);
  schemaParameters(test);
  schemaSearch(test);
  toString(test);
  matching(test);
  hash(test);
  urlMethods(test);
  load();
});