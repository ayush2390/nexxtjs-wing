"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $__parent_this_1_env, $__parent_this_1_path, $startCommand, $utils_Utils }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const result = (await $utils_Utils.exec($startCommand, $__parent_this_1_env, $__parent_this_1_path));
      return result.kill;
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-3.js.map