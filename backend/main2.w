bring ex;
bring cloud;

class App {
  new() {
    if !nodeof(this).app.isTestEnvironment {
      let react = new ex.ReactApp(
        projectPath: "../client",
        startCommand: "npm run dev",
        localPort: 4025
      );
     let api = new cloud.Api(
    cors: true
  );
      react.addEnvironment("key1", "value1");
      react.addEnvironment("title", "Learn React with Wing");
      react.addEnvironment("apiUrl", api.url);
      api.get("/title", inflight () => {
        let responseObject = {
          text: "Hello from Ayush Thakur",
          number: 43,
          docs: "Find in-depth information about Wing",
          docsLink: "https://www.winglang.io/docs",
          playgroud: "Try out Wing on our playgroud feature",
          playgroundLink: "https://www.winglang.io/play/",
          community: "Join our community",
          communityLink: "https://www.winglang.io/community",
          wingCloud: "Do check out Wing Cloud and click to learn more about it",
          wingCloudLink: "https://www.wing.cloud/",
          successMsg: "Data Succesfully fetched"
        };
        return {
            status: 200,
            body: Json.stringify(responseObject)
            // body: "Ayush Thakur"
    };
  });
      api.get("/tasks", inflight () => {
        
        return {
            status: 200,
            body: "tasks"
            // body: "Ayush Thakur"
    };
  });

    }
  }
}

new App();
