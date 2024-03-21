"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class Utils {
    constructor({  }) {
    }
    static async exec(command, env, cwd) {
      return (require("../../../../winglib-anyjs/utils.js")["exec"])(command, env, cwd)
    }
  }
  return Utils;
}
//# sourceMappingURL=inflight.Utils-1.js.map