import fetch from "./fetch.js";

export default {
    getHomePosts: (data) => fetch("//localhost:3000/posts", "GET", data),

    backendLogin: (data) => fetch("//localhost:3000/backend/login", "POST", data)
}