export default class Origin {
  constructor(schema, location) {
    this.schema  = schema.origin;
    this.value   = location.origin || schema.origin;
    this.isMatch = this.schema === this.value;
  }

  toString() {
    return this.value || "";
  }
}