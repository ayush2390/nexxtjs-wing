"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const cloud = $stdlib.cloud;
const ui = $stdlib.ui;
const util = $stdlib.util;
const shared = require("./preflight.shared-2.js");
const sim = require("./preflight.sim-3.js");
const tfAws = require("./preflight.tfaws-4.js");
class AnyJS extends $stdlib.std.Resource {
  constructor($scope, $id, props) {
    super($scope, $id);
    if ($helpers.eq((util.Util.env("WING_TARGET")), "sim")) {
      this.platform = new sim.AnyJSSim(this, "AnyJSSim", props);
    }
    else if ($helpers.eq((util.Util.env("WING_TARGET")), "tf-aws")) {
      this.platform = new tfAws.AnyJSTfAws(this, "AnyJSTfAws", props);
    }
    else {
      throw new Error("unknown platform");
    }
    this.url = (this.platform.getUrl());
    const __parent_this_1 = this;
    class $Closure1 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure1-5.js")({
            $__parent_this_1_url: ${$stdlib.core.liftObject(__parent_this_1.url)},
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
            [__parent_this_1.url, []],
          ],
          "$inflight_init": [
            [__parent_this_1.url, []],
          ],
        });
      }
    }
    this.node.root.new("@winglang/sdk.ui.Field", ui.Field, this, "Field", "url", new $Closure1(this, "$Closure1"), { link: true });
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.AnyJS-5.js")({
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const AnyJSClient = ${AnyJS._toInflightType()};
        const client = new AnyJSClient({
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
module.exports = { AnyJS };
//# sourceMappingURL=preflight.lib-5.js.map