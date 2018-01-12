const Koa = require("koa");
const fs = require("fs");
const router = require("koa-router")();
const routes = require("./routes.js");
const serve = require("koa-static");
const app = new Koa();
const Database = require("./database/database.js");
const cors = require("koa2-cors");
const bodyparser = require("koa-bodyparser");

var database = new Database();
database.init();

app.use(serve(__dirname+ "/static"));
app.use(bodyparser());
app.use(cors({
    origin: function (ctx) {
        return "*"; 
    },
    credentials: true,
}));

routes(router);
app.use(router.routes());

console.log("server is running on 3000");
app.listen(3000);

