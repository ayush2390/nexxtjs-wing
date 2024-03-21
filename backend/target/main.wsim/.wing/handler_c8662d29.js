"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure1Client = 
          require("E:/Users/Ayush Thakur/Desktop/next-wing-1/backend/target/main.wsim/.wing/inflight.$Closure1-5.js")({
            $__parent_this_1_url: "http://localhost:4500",
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};