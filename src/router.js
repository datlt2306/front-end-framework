import User from "./App.vue";
import UserProfile from "./UserProfile.vue";
import UserPosts from "./UserPosts.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/user/:id",
        component: User, // Thành phần cha
        children: [
            {
                path: "profile",
                component: UserProfile, // Thành phần con
            },
            {
                path: "posts",
                component: UserPosts, // Thành phần con
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
