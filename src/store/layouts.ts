import { defineStore } from "pinia";

const state = {
    userdashboard: false as boolean,
}

const getters = {
    getUserDashboard(state: { userdashboard: boolean }): boolean {
        return state.userdashboard;
    }
}
const actions = {
    updateUserDashboard(): void {
        state.userdashboard = !state.userdashboard;
        console.log("User Dashboard");
        
    }
}

const useLayouts = defineStore({
    id: 'layout',
    state: () => (state),
    getters: getters,
    actions: actions,
})

export default useLayouts;