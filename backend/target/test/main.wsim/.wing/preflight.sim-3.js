"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const cloud = $stdlib.cloud;
const shared = require("./preflight.shared-2.js");
const utils = require("./preflight.utils-1.js");
class AnyJSSim extends shared.AnyJSBase {
  constructor($scope, $id, props) {
    super($scope, $id, props);
    this.port = props.localPort;
    ((obj, args) => { obj[args[0]] = args[1]; })(this.env, ["PORT", String.raw({ raw: ["", ""] }, this.port)]);
    const startCommand = (this.props.startCommand ?? "npm run start");
    const __parent_this_1 = this;
    class $Closure1 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure1-3.js")({
            $__parent_this_1_env: ${$stdlib.core.liftObject(__parent_this_1.env)},
            $__parent_this_1_path: ${$stdlib.core.liftObject(__parent_this_1.path)},
            $startCommand: ${$stdlib.core.liftObject(startCommand)},
            $utils_Utils: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(utils.Utils, "", "Utils"))},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure1Client = ${$Closure1._toInflightType()};
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [$stdlib.core.toLiftableModuleType(utils.Utils, "", "Utils"), ["exec"]],
            [__parent_this_1.env, []],
            [__parent_this_1.path, []],
            [startCommand, []],
          ],
          "$inflight_init": [
            [$stdlib.core.toLiftableModuleType(utils.Utils, "", "Utils"), []],
            [__parent_this_1.env, []],
            [__parent_this_1.path, []],
            [startCommand, []],
          ],
        });
      }
    }
    const service = this.node.root.new("@winglang/sdk.cloud.Service", cloud.Service, this, "Service", new $Closure1(this, "$Closure1"));
    $helpers.nodeof(service).hidden = true;
    $helpers.nodeof(this).hidden = true;
  }
  getUrl() {
    return String.raw({ raw: ["http://localhost:", ""] }, this.port);
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.AnyJSSim-3.js")({
        $shared_AnyJSBase: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(shared.AnyJSBase, "", "AnyJSBase"))},
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const AnyJSSimClient = ${AnyJSSim._toInflightType()};
        const client = new AnyJSSimClient({
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
module.exports = { AnyJSSim };
//# sourceMappingURL=preflight.sim-3.js.map