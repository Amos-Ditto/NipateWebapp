import { defineStore } from "pinia";
import type { UserAuth } from "../Types/GeneralTypes";


const state = {
    User: {
        MobileNumber: null, FirstName: null, Auth_token: null
    } as UserAuth,
    Authenticated: false as boolean,

}

const getters = {
    getUser(state: { User: UserAuth; }): UserAuth {
        return state.User;
    },
    getAuthenticatedStatus(state: {Authenticated: boolean}): boolean {
        return state.Authenticated;
    }
}

const actions = {
    updateUser(payload: UserAuth): void {
        state.User = payload;
        (payload.Auth_token === null) ? state.Authenticated = false : state.Authenticated = true;
    }
}

const useAuthentications = defineStore({
    id: "auth",
    state: () => (state),
    getters: getters,
    actions: actions,
})

export default useAuthentications;