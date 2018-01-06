export default class Origin {
  toExpression(str) {
    return new RegExp(str.replace(/\*/g, ".*?"));
  }

  constructor(schema, location) {
    this.schema  = schema.origin && this.toExpression(schema.origin);
    this.value   = location.origin;

    this.isMatch = (
      schema.origin
        ? this.schema.test(this.value)
        : location.origin === schema.origin
    );
  }

  toString() {
    return this.value || "";
  }
}