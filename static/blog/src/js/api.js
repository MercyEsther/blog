import fetch from "./fetch.js";

export default {
    backendLogin: (data) => fetch("//localhost:3000/backend/login", "POST", data),

    getPosts: (data) => fetch("//localhost:3000/api/v1/posts", "GET", data),
    deletePost: (data) => fetch("//localhost:3000/api/v1/post/delete", "GET", data),
    addPost: (data) => fetch("//localhost:3000/api/v1/post/add", "GET", data),
    updatePost: (data) => fetch("//localhost:3000/api/v1/post/update", "POST", data),
    backendSignout: (data) => fetch("//localhost:3000/api/v1/backend/signout", "GET", data)
}