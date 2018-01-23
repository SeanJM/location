export default class Hash {
  constructor(schema, location) {
    this.schema  = schema.hash || undefined;
    this.value   = location.hash || undefined;
    this.isMatch = this.schema === this.value;
  }

  toString() {
    let str = this.value || "";
    if (str && str[0] !== "#") {
      str = "#" + str;
    }
    return str;
  }
}