import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from '../views/EventDetails.vue'
import About from "../views/AboutPage.vue"

const routes = [
	{
		path: "/",
		name: "EventList",
		component: EventList,
	},
	{
		path: '/event/:id',
		name: 'EventDetails',
		props: true,
		component: EventDetails
	},
	{
		path: "/AboutPage",
		name: "AboutPage",
		component: About
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
