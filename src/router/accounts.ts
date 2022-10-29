const services_children = [
	{
		path: "",
		name: "Provider-Services-List",
		component: () => import("../views/Accounts/ServicesList.vue"),
		meta: { title: "My-Services-List" },
	},
	{
		path: "/account/me/services/new",
		name: "Provider-Services-New",
		component: () => import("../views/Accounts/CreateService.vue"),
		meta: { title: "New-Services" },
	},
];

const requests_list = [
	{
		path: "client",
		name: "Client-Requests-List",
		component: () => import("../views/Accounts/Requests/ClientRequests.vue"),
		meta: { title: "My-Services-List" },
	},
	{
		path: "provider",
		name: "Provider-Requests-List",
		component: () => import("../views/Accounts/Requests/ProviderRequests.vue"),
		meta: { title: "My-Services-List" },
	},
];
const children = [
	{
		path: "provider/services",
		name: "Provider-Services",
		redirect: { name: "Provider-Services-List" },
		component: () => import("../views/Accounts/ProviderServices.vue"),
		meta: { title: "My Services" },
		children: services_children,
	},
	{
		path: "provider",
		name: "Provider-Home",
		component: () => import("../views/Accounts/ProviderAccount.vue"),
		meta: { title: "Account-Home" },
	},

	{
		path: "client",
		name: "UserHome",
		component: () => import("../views/Accounts/NonProviderAccount.vue"),
		meta: { title: "User-Home" },
	},
	{
		path: "requests",
		name: "Service-Requests",
		component: () => import("../views/Accounts/ServicesRequestList.vue"),
		children: requests_list,
	},
	{
		path: "adverts",
		name: "User-Adverts",
		component: () => import("../views/Accounts/AdvertView.vue"),
		meta: { title: "User-Adverts" },
	},
	{
		path: "new-adverts",
		name: "Create-Advert",
		component: () => import("../views/Accounts/CreateAdvert.vue"),
		meta: { title: "New-Advert" },
	},
];
const accounts = [
	{
		path: "/account/me",
		name: "User",
		// redirect: {name: 'UserHome'},
		component: () => import("../views/Accounts/UserAccount.vue"),
		meta: { title: "Me" },
		children: children,
	},
	{
		path: "new-provider",
		name: "Register-Provider",
		component: () => import("../views/Accounts/RegisterProvider.vue"),
		meta: { title: "Register as a provider" },
	},
];

export default accounts;
