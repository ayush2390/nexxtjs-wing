"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (new (require("E:/Users/Ayush Thakur/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/target-sim/api.onrequest.inflight.js")).ApiOnRequestHandlerClient({ handler: 
                (await (async () => {
                  const $Closure1Client = 
                require("E:/Users/Ayush Thakur/Desktop/next-wing-1/backend/target/main.wsim/.wing/inflight.$Closure1-1.js")({
                  $std_Json: require("E:/Users/Ayush Thakur/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
                })
              ;
                  const client = new $Closure1Client({
                  });
                  if (client.$inflight_init) { await client.$inflight_init(); }
                  return client;
                })())
              , args: {} }));
  return await $handler.handle(event);
};