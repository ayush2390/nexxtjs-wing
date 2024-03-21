bring cloud;
bring "./winglib-anyjs/lib.w" as anyjs;

let api = new cloud.Api();

api.get("/hello", inflight () => {
  return {
    status: 200,
    body: "Hello World!!!!",
  };
});

if !nodeof(this).app.isTestEnvironment {
  new anyjs.AnyJS(
    projectPath: "./client",
    startCommand: "npm run dev",
    localPort: 4500,
    env: {
      "API_URL": api.url,
    }
  );
}
