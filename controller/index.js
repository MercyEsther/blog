const backend = require("./backend.js");

module.exports = {
    "POST /backend/login": backend.signin,
    
    "GET /api/v1/posts": backend.getPosts,

    "GET /api/v1/post/:offset/:limit": backend.getSomePosts,

    "GET /api/v1/post/delete": backend.deletePost,

    "GET /api/v1/post/add": backend.addPost,

    "POST /api/v1/post/update": backend.updatePost,

    "GET /api/v1/backend/signout": backend.signout,

    "GET /api/v1/design/add": backend.addDesign,

    "GET /api/v1/designs": backend.getDesigns,

    "GET /api/v1/design/delete": backend.deleteDesign,

    "POST /api/v1/design/update": backend.updateDesign
}