const Koa = require("koa");
const fs = require("fs");
const router = require("koa-router")();
const routes = require("./routes.js");
const serve = require("koa-static");
const app = new Koa();
const Database = require("./database/database.js");

var database = new Database();
database.init();

app.use(serve(__dirname+ "/static"));

routes(router);
app.use(router.routes());

console.log("server is running on 8009");
app.listen(8009);

