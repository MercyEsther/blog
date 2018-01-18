var posts = async (ctx, next) => {
    await next();
    ctx.response.body = {id: 1, name: "test", status: "ok"};
}

module.exports = {
    "GET /posts": posts
}