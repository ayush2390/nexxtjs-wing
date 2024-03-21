"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const cloud = $stdlib.cloud;
const fs = $stdlib.fs;
const util = $stdlib.util;
const shared = require("./preflight.shared-2.js");
const utils = require("./preflight.utils-1.js");
class AnyJSTfAws extends shared.AnyJSBase {
  constructor($scope, $id, props) {
    super($scope, $id, props);
    const buildCommand = (this.props.buildCommand ?? "npm run build");
    const buildDir = (this.props.buildDir ?? "./build");
    (util.Util.shell(buildCommand, { env: this.env, cwd: this.path }));
    this.website = this.node.root.new("@winglang/sdk.cloud.Website", cloud.Website, this, "Website", { path: (fs.Util.join(this.path, buildDir)), errorDocument: "index.html" });
  }
  getUrl() {
    return $helpers.unwrap(this.website?.url);
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.AnyJSTfAws-4.js")({
        $shared_AnyJSBase: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(shared.AnyJSBase, "", "AnyJSBase"))},
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const AnyJSTfAwsClient = ${AnyJSTfAws._toInflightType()};
        const client = new AnyJSTfAwsClient({
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  get _liftMap() {
    return $stdlib.core.mergeLiftDeps(super._liftMap, {
      "$inflight_init": [
      ],
    });
  }
}
module.exports = { AnyJSTfAws };
//# sourceMappingURL=preflight.tfaws-4.js.map