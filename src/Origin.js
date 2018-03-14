export default class Origin {
  constructor(schema, location) {
    this.value = location.origin;
  }

  toString() {
    return this.value || "";
  }
}