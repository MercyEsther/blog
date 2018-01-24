const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const router = require("koa-router")();
const routes = require("./routes.js");
const serve = require("koa-static");
const app = new Koa();
const Database = require("./database/orm.js");
const cors = require("koa2-cors");
const bodyparser = require("koa-bodyparser");
const history = require("koa-connect-history-api-fallback");
const session = require("koa-session");
app.keys = ["huangyh"];

const sessionConfig = {
    key: "huangyh" ,
    maxAge: 60*60*1000
}

global.Database = new Database();

app.use(session(sessionConfig,app));
app.use(bodyparser());
app.use(cors({
    origin: function (ctx) {
        return "*"; 
    },
    credentials: true,
}));

routes(router);
app.use(router.routes());
app.use(history());

app.use(serve(__dirname+ "/static/blog/dist/"));

console.log("server is running on 3000");
app.listen(80);

