"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (new (require("E:/Users/Ayush Thakur/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/target-sim/api.onrequest.inflight.js")).ApiOnRequestHandlerClient({ handler: 
          (await (async () => {
            const $Closure1Client = 
          require("E:/Users/Ayush Thakur/Desktop/next-wing-1/backend/target/main.wsim/.wing/inflight.$Closure1-6.js")({
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
process.on("message", async (message) => {
  const { fn, args } = message;
  try {
    const value = await exports[fn](...args);
    process.send({ type: "resolve", value });
  } catch (err) {
    process.send({ type: "reject", reason: err });
  }
});