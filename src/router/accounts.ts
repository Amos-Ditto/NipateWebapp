
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
        path: '/account/provider/services',
        name: 'Provider-Services',
        redirect: { name: 'Provider-Services-List' },
        component: () => import('../views/Accounts/ProviderServices.vue'),
        meta: {title: 'My Services'},
        children: services_children
    },
    {
        path: 'provider',
        name: 'Provider-Home',
        component: () => import('../views/Accounts/ProviderAccount.vue'),
        meta: {title: 'Account-Home'}
    },

    {
        path: 'client',
        name: 'UserHome',
        component: () => import('../views/Accounts/NonProviderAccount.vue'),
        meta: {title: 'User-Home'}
    },
    {
        path: 'requests',
        name: 'Service-Requests',
        component: () => import('../views/Accounts/ServicesRequestList.vue'),
        meta: {title: 'Request-Lists'}
    },
    {
        path: 'adverts',
        name: 'User-Adverts',
        component: () => import('../views/Accounts/AdvertView.vue'),
        meta: {title: 'User-Adverts'}
    },
]
const accounts = [
    {
        path: '/account/me',
        name: 'User',
        // redirect: {name: 'UserHome'},
        component: () => import('../views/Accounts/UserAccount.vue'),
        meta: {title: 'Me'},
        children: children
    },
]

export default accounts;