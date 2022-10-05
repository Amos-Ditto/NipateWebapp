
const services_children = [
    {
        path: '/account/me/services/list',
        name: 'Provider-Services-List',
        component: () => import('../views/Accounts/ServicesList.vue'),
        meta: {title: 'My-Services-List'}
    },
    {
        path: '/account/me/services/new',
        name: 'Provider-Services-New',
        component: () => import('../views/Accounts/CreateService.vue'),
        meta: {title: 'New-Services'}
    },
]
const children = [
    {
        path: '/account/me/services',
        name: 'Provider-Services',
        redirect: { name: 'Provider-Services-List' },
        component: () => import('../views/Accounts/ProviderServices.vue'),
        meta: {title: 'My Services'},
        children: services_children
    },
    {
        path: '/account/me/home',
        name: 'Provider-Home',
        component: () => import('../views/Accounts/ProviderAccount.vue'),
        meta: {title: 'Account-Home'}
    },
]
const accounts = [
    {
        path: '/account/me',
        name: 'User',
        redirect: {name: 'Provider-Home'},
        component: () => import('../views/Accounts/UserAccount.vue'),
        meta: {title: 'Me'},
        children: children
    },
]

export default accounts;