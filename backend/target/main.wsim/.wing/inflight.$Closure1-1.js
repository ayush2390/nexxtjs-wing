"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $std_Json }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const responseObject = ({"text": "Hello from Ayush Thakur", "number": 43, "docs": "Find in-depth information about Wing", "docsLink": "https://www.winglang.io/docs", "playgroud": "Try out Wing on our playgroud feature", "playgroundLink": "https://www.winglang.io/play/", "community": "Join our community", "communityLink": "https://www.winglang.io/community", "wingCloud": "Do check out Wing Cloud and click to learn more about it", "wingCloudLink": "https://www.wing.cloud/", "successMsg": "Data Succesfully fetched"});
      return ({"status": 200, "body": ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(responseObject)});
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-1.js.map