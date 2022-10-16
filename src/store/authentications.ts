import { defineStore } from "pinia";
import type { UserAuth, UserDetails } from "../Types/GeneralTypes";


const state = {
    User: {
        MobileNumber: null, FirstName: null, LastName: null, Auth_token: null
    } as UserAuth,
    Authenticated: false as boolean,
    Provider: false as boolean,
    UserDetails: {
        "id": 0,
        "User": {
            "id": 0,
            "MobileNumber": "",
            "IDNumber": "",
            "FirstName": "",
            "SurName": ""
        },
        "Location": {
            "id": 0,
            "Name": ""
        },
        "Provider": false
    } as UserDetails,

}

const getters = {
    getUser(state: { User: UserAuth; }): UserAuth {
        return state.User;
    },
    getAuthenticatedStatus(state: {Authenticated: boolean}): boolean {
        return state.Authenticated;
    },
    getUserDetails(): UserDetails {
        return state.UserDetails;
    }
}

const actions = {
    updateUser(payload: UserAuth): void {
        state.User = payload;
    },
    updateProvider(payload: boolean): void {
        state.Provider = payload;
    },
    updateUserDetails(payload: UserDetails): void {
        state.UserDetails = payload;
    },
    updateAuthentication(payload: boolean): void {
        state.Authenticated = payload;
    }
}

const useAuthentications = defineStore({
    id: "auth",
    state: () => (state),
    getters: getters,
    actions: actions,
})

export default useAuthentications;