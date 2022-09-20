
const auths = [
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('../views/Auths/Login.vue'),
        meta: {title: 'Login'}
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('../views/Auths/Register.vue'),
        meta: {title: 'Register'}
    }
]

export default auths;