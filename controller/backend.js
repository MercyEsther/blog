const colors = require("colors");
const bcrypt = require("bcrypt");

/**
 * signin
 * 
 * res: userinfo
 */
var signin = async(ctx, next) => {
    await next();
    const user = ctx.request.body;
    console.log("[signin req]".green, user);
    var data = {};

    // 判断用户名密码
    let _User = await Database.getTable("users");
    await _User.findAll({
        where: {
            name: user.name
        }
    }).then(r => {
        console.log("[find user]".green, JSON.stringify(r));
        if(r.length > 0){
            // 检测密码
            let hash = JSON.stringify(r);
            hash = JSON.parse(hash)[0].password;
            let checkResult = bcrypt.compare(user.password, hash);
            if(checkResult){
                data = {success: 1};
                ctx.session.user = user;
            }
            else{
                data = {
                    error: 0,
                    message: "密码错误"
                }
            }
        }
        else{
            data = {
                error: 1,
                message: "不存在该用户"
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

/**
* signout
* 
* res: signout result 
*/

var signout = async(ctx, next) => {
    await next();
    let data = {};
    ctx.session.user = null;
    console.log(ctx.session.user);
    if(!ctx.session.user){
        data = {success: 1};
    }
    else{
        data = {error: 0, message: "退出失败"};
    }
    console.log("[data]".green,ctx.session.user);
    ctx.body = data;
}

/**
 * get All posts
 * 
 * res: posts
 */

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

/**
 * getDesigns
 * 
 * @param {*} ctx 
 * @param {*} next 
 */

var getDesigns = async(ctx, next) => {
    await next();
    let data = {};
    console.log("getDesigns".green);

    let r = await Database.findAll("designs");
    if(r){
        let designStr = JSON.stringify(r);
        designs = JSON.parse(designStr);
        data ={
            success: 1,
            designs: designs
        }
    }
    else{
        data = {
            error: 1,
            message: "设计搜索失败"
        }
    }
    ctx.body = data;
}

var getSomePosts = async(ctx, next) => {
    await next();
    var data = {};

    ctx.body = data;
}

/**
 * delete Post
 * 
 * req: post
 * res: result
 */

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

/**
 * deleteDesign
 * 
 * @param {*} ctx 
 * @param {*} next 
 */

var deleteDesign = async(ctx, next) => {
    await next();
    let id = ctx.href.split("?")[1].split("=")[1];
    console.log("[deleteDesign]".green, id);
    let data = {};

    const r = await Database.update("designs",{id: id},"delete")
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

/**
 * add post
 * 
 * req: post
 * res: result
 */

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

/**
 * update post
 * 
 * req: post
 * res: result
 */

var updatePost = async(ctx,next) => {
    await next();
    let data = {};
    let post = ctx.request.body;
    console.log("[updatePost success]".green);

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

/**
 * updateDesign
 * 
 * @param {*} ctx 
 * @param {*} next 
 */

var updateDesign = async(ctx, next) => {
    await next();
    let data = {};
    let design = ctx.request.body;
    console.log("[updateDesign success]".green);

    let r = await Database.update("designs",design,"update");
    if(r){
        data = {success: 1};
    }
    else{
        data = {
            error: 1,
            message: "更新设计失败"
        }
    }
    ctx.body = data;
}

/**
 * addDesign
 * 
 * @param {*} ctx 
 * @param {*} next 
 */

var addDesign = async(ctx, next) => {
    await next();
    let data = {};
    let r = await Database.insertDesign(data);
    if(r){
        data = {success: 1};
    }
    else{
        data = {
            error: 1,
            message: "添加设计失败"
        }
    }
    ctx.body = data;
}

/**
 * export all backend controller function
 */

module.exports = {
    signin,
    signout,
    getPosts,
    getSomePosts,
    deletePost,
    addPost,
    updatePost,
    addDesign,
    getDesigns,
    deleteDesign,
    updateDesign
};