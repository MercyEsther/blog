import vue from "vue";
import Router from "vue-router";
import App from "../App";
import Home from "../pages/home/Home";

const Projects  = () => import("../pages/projects/Projects");

const BackendLogin = () => import("../pages/login/Login");

const Backend = () => import("../pages/backend/Common");
const BackendPosts = () => import("../pages/backend/children/Posts");
const BackendProjects = () => import("../pages/backend/children/Projects");
const BackendResource = () => import("../pages/backend/children/Resource");
const BackendUsers = () => import("../pages/backend/children/Users");
const BackendDesign = () => import("../pages/backend/children/Design");

vue.use(Router);

const routes = [
    {
        path: "/",
        name: "app",
        component: App,
        children: [{
            path: "",
            redirect: "home"
        },{
            path: "home",
            name: "home",
            component: Home
        },{
            path: "projects",
            name: "projects",
            component: Projects
        },{
            path: "login",
            name: "backendLogin",
            component: BackendLogin
        },{
            path: "backend",
            name: "backend",
            component: Backend,
            children: [
                {
                    path: "",
                    redirect: {name: "backendPosts"}
                },
                {
                    path: "posts",
                    name: "backendPosts",
                    component: BackendPosts
                },{
                    path: "projects",
                    name: "backendProjects",
                    component: BackendProjects
                },{
                    path: "resource",
                    name: "backendResource",
                    component: BackendResource
                },{
                    path: "users",
                    name: "backendUsers",
                    component: BackendUsers
                },{
                    path: "design",
                    name: "backendDesign",
                    component: BackendDesign
                }
            ]
        }]
    }
]

export default new Router({
    mode: "history",
    bash: __dirname,
    routes
})