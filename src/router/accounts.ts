const children = [
    {
        path: '/account/me/services',
        name: 'Provider-Services',
        component: () => import('../views/Accounts/ProviderServices.vue'),
        meta: {title: 'Profile'}
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