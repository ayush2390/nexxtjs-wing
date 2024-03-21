"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      return ({"status": 200, "body": "tasks"});
    }
  }
  return $Closure2;
}
//# sourceMappingURL=inflight.$Closure2-1.js.map