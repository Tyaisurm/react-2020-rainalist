// server.js
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
//var routes = JSON.parse(fs.readFileSync(path.join(__dirname, "./routes.json")));
//server.use(jsonServer.rewriter(routes));
server.use("/api", router);
server.listen(3001, () => {
  console.log("JSON Server is running...");
});
