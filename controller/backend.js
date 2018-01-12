const Database = require("../database/database.js");
const colors = require("colors");

var signin = async(ctx, next) => {
    await next();
    const req = ctx.request.body;
    console.log("[signin req]".green, req);

    // 判断用户名密码
    var name = req.name;
    var database = new Database();
    await database.init();
    database.findByName("users",name).then(r => {
        console.log("[find name]".green, r);
    })
    .catch(e => {
        console.log("[find name]".red, e);
    })

    var data = {
        state: "ok"
    };
    ctx.body = JSON.stringify(data);
}

module.exports = {
    "POST /backend/login": signin
}