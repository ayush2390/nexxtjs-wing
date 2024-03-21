"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
class Utils extends $stdlib.std.Resource {
  constructor($scope, $id, ) {
    super($scope, $id);
  }
  static isAbsolute(path) {
    return (require("../../../winglib-anyjs/utils.js")["isAbsolute"])(path)
  }
  static resolve(...path) {
    return (require("../../../winglib-anyjs/utils.js")["resolve"])(...path)
  }
  static getProcessEnv() {
    return (require("../../../winglib-anyjs/utils.js")["getProcessEnv"])()
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Utils-1.js")({
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const UtilsClient = ${Utils._toInflightType()};
        const client = new UtilsClient({
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  get _liftMap() {
    return ({
      "$inflight_init": [
      ],
    });
  }
  static get _liftTypeMap() {
    return ({
      "exec": [
      ],
    });
  }
}
module.exports = { Utils };
//# sourceMappingURL=preflight.utils-1.js.map