import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PiramidMethod from "../views/PiramidMethodView.vue";
import ThreeTwoOneMethod from "../views/531MethodView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/piramidmethod",
		name: "piramidMethod",
		component: PiramidMethod,
	},
	{
		path: "/531method",
		name: "531Method",
		component: ThreeTwoOneMethod,
	},
	// {
	//   path: "/about",
	//   name: "about",
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () =>
	//     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
