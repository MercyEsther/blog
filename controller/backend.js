const colors = require("colors");

var signin = async(ctx, next) => {
    await next();
    const req = ctx.request.body;
    console.log("[signin req]".green, req);
    var data = {};

    // 判断用户名密码
    let User = await Database.getTable("users");
    await User.findAll({
        where: {
            name: req.name,
            password: req.password
        }
    }).then(r => {
        console.log("[find user]".green, JSON.stringify(r));
        if(r.length > 0){
            data = {
                success: 1
            };
        }
        else{
            data = {
                error: 1,
                message: "用户名或密码错误"
            }
        }
    })
    .catch(e => {
        console.log("[find user]".red, e);
        data = {
            error: 2,
            message: "系统错误"
        }
    })
    ctx.body = JSON.stringify(data);
}

var getPosts = async(ctx, next) => {
    await next();
    var data = {};

    let r = await Database.findAll("posts");
    if(r){
        let postsStr = JSON.stringify(r);
        posts = JSON.parse(postsStr);
        data ={
            success: 1,
            posts: posts
        }
    }
    else{
        data = {
            error: 1,
            message: "日志搜索失败"
        }
    }
    ctx.body = data;
}

var deletePost = async(ctx,next) => {
    await next();
    let id = ctx.href.split("?")[1].split("=")[1];
    console.log("[deletePost]".green, id);
    let data = {};

    const r = await Database.update("posts",{id: id},"delete")
    if(r){
        data = {
            success: 1
        }
    }else{
        data = {
            error: 1,
            message: "数据删除失败"
        }
    }
    ctx.body = data;
}

var addPost = async(ctx,next) => {
    await next();
    let data = {};
    let r = await Database.insertPost(data);
    if(r){
        data = {success: 1};
    }
    else{
        data = {
            error: 1,
            message: "添加日志失败"
        }
    }
    ctx.body = data;
}

var updatePost = async(ctx,next) => {
    await next();
    let data = {};
    let post = ctx.request.body;

    let r = await Database.update("posts",post,"update");
    if(r){
        data = {success: 1};
    }
    else{
        data = {
            error: 1,
            message: "更新日志失败"
        }
    }

    ctx.body = data;
}

module.exports = {
    signin,
    getPosts,
    deletePost,
    addPost,
    updatePost
};