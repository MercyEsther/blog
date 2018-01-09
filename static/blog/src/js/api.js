import api from "./fetch.js";

export default {
    getHomePosts: data => fetch("//localhost:3000/posts", "GET", data)
}