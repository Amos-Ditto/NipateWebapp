
const accounts = [
    {
        path: '/account/me',
        name: 'User',
        component: () => import('../views/Accounts/UserAccount.vue'),
        meta: {title: 'Me'}
    },
]

export default accounts;