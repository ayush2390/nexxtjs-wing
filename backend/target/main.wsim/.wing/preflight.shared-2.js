"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const cloud = $stdlib.cloud;
const fs = $stdlib.fs;
const utils = require("./preflight.utils-1.js");
class AnyJSBase extends $stdlib.std.Resource {
  constructor($scope, $id, props) {
    super($scope, $id);
    if ((!(fs.Util.exists(props.projectPath)))) {
      throw new Error(String.raw({ raw: ["", " not exists"] }, props.projectPath));
    }
    this.props = props;
    if ((utils.Utils.isAbsolute(props.projectPath))) {
      this.path = props.projectPath;
    }
    else {
      this.path = (utils.Utils.resolve($helpers.nodeof(this).app.entrypointDir, props.projectPath));
    }
    this.env = (utils.Utils.getProcessEnv());
    if (((props.env) != null)) {
      for (const key of Object.keys($helpers.unwrap(props.env))) {
        ((obj, args) => { obj[args[0]] = args[1]; })(this.env, [key, ((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })($helpers.unwrap(props.env), key)]);
      }
    }
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.AnyJSBase-2.js")({
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const AnyJSBaseClient = ${AnyJSBase._toInflightType()};
        const client = new AnyJSBaseClient({
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
}
module.exports = { AnyJSBase };
//# sourceMappingURL=preflight.shared-2.js.map