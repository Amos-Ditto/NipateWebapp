import {defineStore} from 'pinia'

export interface IsUserAuthenticated {
    isuserauthenticated: boolean;
}

const state = (): IsUserAuthenticated => ({
    isuserauthenticated: false,
})

const getters =  {
    getIsUserAuthenticated: (state: IsUserAuthenticated) => state.isuserauthenticated,
}

const actions = {
    toggleIsUserAuthenticated() {
        this.isuserauthenticated = !this.isuserauthenticated;
    },
}

export const useAuthStore = defineStore('authentication', {
    state,
    getters,
    actions,
})